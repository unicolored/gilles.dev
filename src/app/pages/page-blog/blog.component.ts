import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { Post, PostCollection } from '../../interfaces/post';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-blog-component',
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  template: `
    <main class="p-4 gap-6 flex flex-col">
        @for (post of posts(); track post.slug) {
          <article>
            <div class="shadow-md p-4 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <!-- Image -->
              @if (post.cloudinaryId) {
                <img
                  [ngSrc]="post.cloudinaryId"
                  width="700"
                  height="400"
                  priority
                  placeholder
                  class="w-full h-64 object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  [alt]="post.title"
                  [title]="post.title"
                />
              }
              <!-- Card Content -->
              <div class="p-4">
              <h2>
                <a [routerLink]="['/blog', post.slug]" class="text-xl font-semibold mb-2 hover:underline">
                  {{ post.title }}
                </a>
                </h2>
                @if (post.createdAt) {
                  <p class="text-gray-500 text-sm mb-2">
                    {{ post.createdAt | date: 'medium' }}
                  </p>
                }
                @if (post.listItems.length > 0) {
                  <div class="mt-2">
                    <p class="text-sm font-medium text-gray-700">Appears in:</p>
                    <ul class="list-disc list-inside text-sm text-gray-500">
                      @for (item of post.listItems; track item['@id']) {
                        <li>{{ item.postList.name }} ({{ item.postList.slug }})</li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          </article>
        }
        @if (posts().length === 0) {
          <div class="text-center text-gray-500 col-span-full">
            No posts found.
          </div>
        }
      <!-- Pagination -->
      @if (totalPages() > 1) {
        <div class="mt-8 flex justify-center items-center space-x-4">
          <button
            [disabled]="currentPage() === 1"
            [routerLink]="['/blog/page', currentPage() - 1]"
            class="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Previous
          </button>
          <span class="px-4 py-2 text-gray-700">
            Page {{ currentPage() }} of {{ totalPages() }}
          </span>
          <button
            [disabled]="currentPage() === totalPages()"
            [routerLink]="['/blog/page', currentPage() + 1]"
            class="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      }
    </main>
  `,
  styles: ``
})
export class BlogComponent {
  posts = signal<Post[]>([]);
  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(3);
  totalItems = signal<number>(0);
  totalPages = signal<number>(0);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    effect(() => {
      this.route.paramMap.subscribe(params => {
        if (!params.get('page')) {
          this.currentPage.set(1);
          this.loadPosts();
        } else {
          const page = parseInt(params.get('page') || '1', 10);
          console.log('page =', page);
          const newPage = isNaN(page) || page < 1 ? 1 : page;
          console.log(newPage, this.currentPage());
          if (newPage !== this.currentPage()) {
            this.currentPage.set(newPage);
            this.loadPosts();
          }
        }
      });
    }, { allowSignalWrites: true });
  }

  loadPosts(): void {
    console.log('load posts...');
    this.apiService.getBlogPosts(this.currentPage(), this.itemsPerPage()).subscribe({
      next: (response: PostCollection) => {
        console.log(response);
        this.posts.set(response.member);
        this.totalItems.set(response.totalItems);
        this.totalPages.set(Math.ceil(response.totalItems / this.itemsPerPage()));
        if ((this.currentPage() > this.totalPages() && this.totalPages() > 0) || this.totalItems() === 0) {
          this.router.navigate(['/blog/page', 1]);
        }
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }
}
