import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { Post } from '../../interfaces/post'; // Adjust path as needed
import { ApiService } from '../../services/api.service'; // Adjust path as needed
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-blog-post',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
      <main class="page-prose">
      @if (post(); as post) {
        <article class="p-6">
          <!-- Image -->
          @if (post.cloudinaryId) {
            <img
              [ngSrc]="post.cloudinaryId"
              width="700"
              height="400"
              priority
              placeholder
              class="w-full h-64 object-cover rounded-lg mb-6"
              sizes="(min-width: 1024px) 50vw, 100vw"
              [alt]="post.title"
              [title]="post.title"
            />
          }
          <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
          @if (post.createdAt) {
            <p class="text-gray-500 text-sm mb-4">
              {{ post.createdAt | date: 'medium' }}
            </p>
          }
          @if (post.listItems.length > 0) {
            <div class="mb-4">
              <p class="text-sm font-medium text-gray-700">Appears in:</p>
              <ul class="list-disc list-inside text-sm text-gray-500">
                @for (item of post.listItems; track item['@id']) {
                  <li>{{ item.postList.name }} ({{ item.postList.slug }})</li>
                }
              </ul>
            </div>
          }
        </article>
      } @else {
        <div class="text-center">
          Post not found.
        </div>
      }
    </main>
  `,
  styles: ``
})
export class BlogPostComponent {
  post = signal<Post | null>(null);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    effect(() => {
      this.route.paramMap.subscribe(params => {
        const slug = params.get('slug');
        if (slug) {
          this.loadPost(slug);
        }
      });
    }, { allowSignalWrites: true });
  }

  loadPost(slug: string): void {
    this.apiService.getItem(slug).subscribe({
      next: (post) => {
        this.post.set(post);
      },
      error: (error) => {
        console.error('Error fetching post:', error);
        this.post.set(null);
      }
    });
  }
}
