import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioHit } from '../../services/search.interface';
import { extractText } from '../../app.helpers';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gilles-nx-portfolio-hits',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    @if (title() || subtitle()) {
      <article class="prose mb-6">
        @if (title()) {
          <h2 class="font-bold leading-snug mb-1">
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

    @defer (on viewport; prefetch on timer(1s)) {
      <div class="portfolio-items">
        @for (item of itemsComputed(); track item.objectID) {
          <div class="portfolio-item" [routerLink]="['portfolio', 'item', item.objectID]">
            <img
              *ngIf="item.images.thumbnail?.url"
              [ngSrc]="item.images.thumbnail.url"
              fill
              priority
              class="img-thumbnail"
              [alt]="item.post_title"
              [title]="item.post_title"
            />
          </div>
        }
      </div>
    } @placeholder (minimum 1s) {
      <div class="portfolio-items">
        @for (i of [1, 2, 3, 4, 5, 6]; track i) {
          <div class="portfolio-item placeholder">
            <span class="loading loading-ring loading-lg"></span>
            <div class="skeleton h-430 w-242"></div>
          </div>
        }
      </div>
    } @error {
      <div class="portfolio-items">
        @for (i of [1, 2, 3, 4, 5, 6]; track i) {
          <div class="portfolio-item placeholder">
            <span class="loading loading-ring loading-lg"></span>
            <div class="skeleton h-430 w-242"></div>
          </div>
        }
      </div>
    }
  `,
  styleUrls: ['./portfolio.component.scss'],
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

  items = input<PortfolioHit[]>([]);
  itemsComputed = computed(() =>
    this.items().map((item) => {
      const currentUrl = item.images.thumbnail?.url;

      if (!currentUrl) {
        item.images.thumbnail = {
          url: 'missing.jpg',
          width: 430,
          height: 215,
        };
      } else {
        // const url = 'https://www.gilleshoarau.com/da/wp-content/uploads/2014/07/logo-velinea-200x200.png';

        const publicId = extractText(currentUrl);

        if (!publicId) {
          item.images.thumbnail = {
            url: 'missing.jpg',
            width: 430,
            height: 215,
          };
        } else {
          item.images.thumbnail = {
            // url: `f_webp,q_auto,w_430,h_242,c_fill,ar_16:9/${publicId}.webp`,
            url: `f_webp,q_auto,w_600,c_fill,ar_16:9/${publicId}.webp`,
            width: 2,
            height: 1,
          };
          item.images.full = {
            // url: `f_webp,q_auto,w_430,h_242,c_fill,ar_16:9/${publicId}.webp`,
            url: `q_auto:best,w_1280,c_fit,ar_16:9/${publicId}.jpg`,
          };
        }
      }
      return item;
    }),
  );
}
