import { Component, computed, input, ViewEncapsulation, ChangeDetectionStrategy, inject, PLATFORM_ID, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PortfolioHit } from '../../services/search.interface';
import { extractText } from '../../app.helpers';
import { RouterLink } from '@angular/router';
import { PostListItem } from '../../interfaces/api-postList';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'gilles-nx-portfolio-hits',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
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
            @if (item.images.thumbnail?.url) {
              <img
                [ngSrc]="item.images.thumbnail.url"
                fill
                priority
                class="img-thumbnail"
                [alt]="item.post_title"
                [title]="item.post_title"
                />
            }
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
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioHitsComponent {
  public apiService = inject(ApiService);
  title = input<string>();
  subtitle = input<string>();
  priority = input<boolean>(false);
  platformId = inject(PLATFORM_ID);
  selectedItem = input<string | null>();
  isRemoteActive = input<boolean>();
  itemSelected = output<string>();

  items = input<PostListItem[] | undefined>([]);
  //       url: `f_webp,q_auto,w_600,c_fill,ar_16:9/${publicId}.webp`,
  itemsComputed = computed(() => {
    return this.items();
  });

  selectItem(itemId?: string) {
    if (itemId) {
      this.itemSelected.emit(itemId);
    }
  }
}
