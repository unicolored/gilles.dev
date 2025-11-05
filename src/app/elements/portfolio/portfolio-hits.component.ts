import { Component, computed, inject, input, output, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { PostListItem } from '../../interfaces/api-postList';

@Component({
  selector: 'gilles-nx-portfolio-hits',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    <article class="mb-6">
      @if (title() || subtitle()) {
        <header class="prose dark:prose-invert max-w-none">
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
          @for (item of items; track item.post.slug; let i = $index) {
            @if (item.post.cloudinaryId) {
              @if (isRemoteActive()) {
                <span class="portfolio-item" (click)="selectItem(item.post.slug)">
                  <figure>
                    <span class="item-body">
                      <img
                        [ngSrc]="'cloud-coelis/prod/' + item.post.cloudinaryId"
                        fill
                        [priority]="priority() && i <= 4"
                        placeholder
                        sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
                        [alt]="item.post.title"
                        [title]="item.post.title"
                      />
                    </span>
                    @if (item.post.description) {
                      <figcaption class="prose dark:prose-invert">
                        {{ portfolioService.stripTags(item.post.description) }}
                      </figcaption>
                    }
                  </figure>
                </span>
              } @else {
                <a
                  class="portfolio-item"
                  [href]="['/portfolio', 'item', item.post.slug]"
                  [routerLink]="['/portfolio', 'item', item.post.slug]"
                  animate.enter="enter-animation"
                >
                  <figure>
                    <span class="item-body">
                      <img
                        [ngSrc]="'cloud-coelis/prod/' + item.post.cloudinaryId"
                        fill
                        [priority]="priority() && i <= 4"
                        placeholder
                        sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
                        [alt]="item.post.title"
                        [title]="item.post.title"
                      />
                    </span>
                    @if (item.post.description) {
                      <figcaption class="prose dark:prose-invert">
                        {{ portfolioService.stripTags(item.post.description) }}
                      </figcaption>
                    }
                  </figure>
                </a>
              }
            } @else {
              <span class="portfolio-item">
                <figure>
                  <span class="item-body">
                    {{ item.post.title }}
                  </span>
                  @if (item.post.description) {
                    <figcaption class="prose dark:prose-invert">
                      {{ portfolioService.stripTags(item.post.description) }}
                    </figcaption>
                  }
                </figure>
              </span>
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
  platformId = inject(PLATFORM_ID);
  selectedItem = input<string | null>();
  isRemoteActive = input<boolean>();
  itemSelected = output<string>();
  public readonly portfolioService = inject(PortfolioService);

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
