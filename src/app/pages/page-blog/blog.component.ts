import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core'; // Add OnInit
import { Post, PostCollection } from '../../interfaces/post';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-blog-component',
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  template: `
    <main class="flex flex-col gap-6 p-4">
      @for (post of posts; track post.slug) {
        <article>
          <div class="overflow-hidden p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <!-- Image -->
            @if (post.cloudinaryId) {
              <img
                [ngSrc]="post.cloudinaryId"
                width="700"
                height="400"
                priority
                placeholder
                class="h-64 w-full object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                [alt]="post.title"
                [title]="post.title"
              />
            }
            <!-- Card Content -->
            <div class="p-4">
              <h2>
                <a [routerLink]="['/blog/post', post.slug]" class="mb-2 text-xl font-semibold hover:underline">
                  {{ post.title }}
                </a>
              </h2>
              @if (post.createdAt) {
                <p class="mb-2 text-sm text-gray-500">
                  {{ post.createdAt | date: 'medium' }}
                </p>
              }
              @if (post.listItems.length > 0) {
                <div class="mt-2">
                  <p class="text-sm font-medium text-gray-700">Appears in:</p>
                  <ul class="list-inside list-disc text-sm text-gray-500">
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
      @if (posts.length === 0) {
        <div class="col-span-full text-center text-gray-500">No posts found.</div>
      }
      <!-- Pagination -->
      @if (totalPages() > 1) {
        <div class="mt-8 flex items-center justify-center space-x-4">
          <button
            [disabled]="currentPage() === 1"
            [routerLink]="['/blog/page', currentPage() - 1]"
            class="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Previous
          </button>
          <span class="px-4 py-2 text-gray-700"> Page {{ currentPage() }} of {{ totalPages() }} </span>
          <button
            [disabled]="currentPage() === totalPages()"
            [routerLink]="['/blog/page', currentPage() + 1]"
            class="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      }
    </main>
  `,
  styles: ``,
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(3);
  totalItems = signal<number>(0);
  totalPages = signal<number>(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Get resolved data (available immediately, even in prerender)
    const resolvedData: PostCollection = this.route.snapshot.data['blogData'];

    if (resolvedData) {
      this.posts = resolvedData.member;
    }
    this.totalItems.set(resolvedData.totalItems);
    this.totalPages.set(Math.ceil(resolvedData.totalItems / this.itemsPerPage()));

    // Set current page from params (for consistency)
    const pageStr = this.route.snapshot.paramMap.get('page') || '1';
    const page = parseInt(pageStr, 10);
    const current = isNaN(page) || page < 1 ? 1 : page;
    this.currentPage.set(current);

    // Redirect if invalid page (e.g., beyond total or empty results)
    if ((current > this.totalPages() && this.totalPages() > 0) || this.totalItems() === 0) {
      this.router.navigate(['/blog/page', 1]);
    }
  }
}
