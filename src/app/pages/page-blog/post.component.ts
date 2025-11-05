import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Adjust path as needed
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/api-post';

@Component({
  standalone: true,
  selector: 'app-blog-post',
  imports: [CommonModule, NgOptimizedImage],
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
              class="mb-6 h-64 w-full rounded-lg object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              [alt]="post.title"
              [title]="post.title"
            />
          }
          <h1 class="mb-4 text-3xl font-bold">{{ post.title }}</h1>
          @if (post.createdAt) {
            <p class="mb-4 text-sm text-gray-500">
              {{ post.createdAt | date: 'medium' }}
            </p>
          }
          @if (post.listItems.member.length > 0) {
            <div class="mb-4">
              <p class="text-sm font-medium text-gray-700">Appears in:</p>
              <ul class="list-inside list-disc text-sm text-gray-500">
                @for (item of post.listItems.member; track item['@id']) {
                  <li>{{ item.postList.name }} ({{ item.postList.slug }})</li>
                }
              </ul>
            </div>
          }
        </article>
      } @else {
        <div class="text-center">Post not found.</div>
      }
    </main>
  `,
  styles: ``,
})
export class BlogPostComponent {
  post = signal<Post | null>(null);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {
    effect(
      () => {
        this.route.paramMap.subscribe((params) => {
          const slug = params.get('slug');
          if (slug) {
            this.loadPost(slug);
          }
        });
      },
      { allowSignalWrites: true },
    );
  }

  loadPost(slug: string): void {
    this.apiService.getItem(slug).subscribe({
      next: (post) => {
        this.post.set(post);
      },
      error: (error) => {
        console.error('Error fetching post:', error);
        this.post.set(null);
      },
    });
  }
}
