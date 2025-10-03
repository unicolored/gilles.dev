import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostListItem } from '../../interfaces/post';

@Component({
  selector: 'gilles-nx-portfolio-hits',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    @if (title() || subtitle()) {
      <article class="prose mb-6">
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
      </article>
    }

    <div class="portfolio-items">
      @for (item of itemsComputed(); track item['@id']) {
        @if (item.post.cloudinaryId) {
          <a
            class="portfolio-item"
            [href]="['/portfolio', 'item', item.post.slug]"
            [routerLink]="['/portfolio', 'item', item.post.slug]"
          >
            <img
              [ngSrc]="item.post.cloudinaryId"
              width="700"
              height="400"
              priority
              placeholder
              class="img-thumbnail"
              sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
              [alt]="item.post.title"
              [title]="item.post.title"
              style="object-fit: cover;"
            />
          </a>
        }
      }
    </div>
  `,
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioHitsComponent {
  title = input<string>();
  name = computed(() => {
    const name = this.title();
    return name ? name.toLocaleLowerCase().replace(/ /g, '-') : Math.random().toString(36);
  });
  subtitle = input<string>();

  itemId = input<string | null>(null);

  items = input<PostListItem[]>([]);
  //       url: `f_webp,q_auto,w_600,c_fill,ar_16:9/${publicId}.webp`,
  itemsComputed = computed(() => this.items());
}
