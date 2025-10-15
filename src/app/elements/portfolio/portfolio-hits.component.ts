import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostListItem } from '../../interfaces/post';

@Component({
  selector: 'gilles-nx-portfolio-hits',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    <article class="mb-6">
      @if (title() || subtitle()) {
        <header class="prose max-w-none">
          @if (title()) {
            <h2 class="mb-1 leading-snug font-bold">
              <span i18n [innerHTML]="title()"></span>
            </h2>
          }
          @if (subtitle()) {
            <p class="uppercase">
              <span i18n>{{ subtitle() }}</span>
            </p>
          }
        </header>
      }

      <div class="portfolio-items">
        @if (itemsComputed(); as items) {
          @for (item of items; track item.post.slug) {
            @if (item.post.cloudinaryId) {
              <a
                class="portfolio-item"
                [href]="['/portfolio', 'item', item.post.slug]"
                [routerLink]="['/portfolio', 'item', item.post.slug]"
              >
                <figure>
                  <span class="item-body">
                    <img
                      [ngSrc]="item.post.cloudinaryId"
                      fill
                      [priority]="priority()"
                      placeholder
                      sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
                      [alt]="item.post.title"
                      [title]="item.post.title"
                    />
                  </span>
                  @if (item.post.description) {
                    <figcaption class="prose" [innerHTML]="item.post.description"></figcaption>
                  }
                </figure>
              </a>
            }
          }
        }
      </div>
    </article>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioHitsComponent {
  title = input<string>();
  subtitle = input<string>();
  priority = input<boolean>(false);

  items = input<PostListItem[] | undefined>([]);
  //       url: `f_webp,q_auto,w_600,c_fill,ar_16:9/${publicId}.webp`,
  itemsComputed = computed(() => {
    return this.items();
  });
}
