import { Component, computed, inject, signal, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioHit } from '../../services/search.interface';
import { ActivatedRoute } from '@angular/router';
import { PortfolioItemAttachmentsComponent } from '../../elements/portfolio/portfolio-item-attachments.component';
import { PageIdSlugEnum } from '../../app.global';
import { Hit } from 'instantsearch.js/es/types/results';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { InstantSearchService } from '../../services/instantsearch.service';
import { extractText } from '../../app.helpers';

@Component({
  selector: 'gilles-nx-portfolio-item',
  imports: [CommonModule, PortfolioItemAttachmentsComponent, NgOptimizedImage],
  template: `
    <main class="page-prose">
      <article class="mb-6">
        @for (item of items(); track item.objectID) {
          <figure class="p-4">
            @if (item.images.full) {
              <img
                *ngIf="item.images.full?.url"
                [ngSrc]="item.images.full.url"
                priority
                width="600"
                height="300"
                class="img-thumbnail m-auto"
                [alt]="item.post_title"
                [title]="item.post_title"
              />
            } @else if (item.images.thumbnail) {
              <img
                *ngIf="item.images.thumbnail?.url"
                [ngSrc]="item.images.thumbnail.url"
                priority
                width="600"
                height="300"
                class="img-thumbnail m-auto"
                [alt]="item.post_title"
                [title]="item.post_title"
              />
            }
          </figure>

          <header class="flex justify-center mb-2">
            <h1 class="font-bold text-xl mb-1">
              <span i18n [innerHTML]="item.post_title"></span>
            </h1>
          </header>

          <div class="flex justify-between">
            @if (item.taxonomies.post_tag) {
              <div class="uppercase">{{ item.taxonomies.post_tag.join(', ') }}</div>
            }
            @if (item.taxonomies.category) {
              <div class="text-center uppercase">{{ item.taxonomies.category.join(' | ') }}</div>
            }
          </div>

          <main class="flex p-4 w-full ">
            @if (item.content) {
              <!--            <p class="uppercase">-->
              <!--              <span i18n>{{ subtitle() }}</span>-->
              <!--            </p>-->
              <div class="prose" [innerHTML]="item.content"></div>
            }
          </main>
        }

        <section>
          <gilles-nx-portfolio-item-attachments
            [items]="itemsComputed()"
            [itemId]="itemId()"
            [objectId]="objectId()"
          ></gilles-nx-portfolio-item-attachments>
        </section>
      </article>
    </main>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioItemComponent implements OnInit {
  pageId = PageIdSlugEnum.portfolio;

  private readonly route = inject(ActivatedRoute);
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);

  portfolioHits = signal<Hit<PortfolioHit>[]>([]);

  category = signal<string | null>(null);
  categoryComputed = computed(() => {
    if (this.category() === 'web') {
      return 'dev';
    }

    return this.category();
  });

  objectId = signal<string | null>(null);
  itemId = computed<number | null>(() => {
    const objectId = this.objectId();
    if (objectId) {
      const itemId = objectId.split('-').shift();
      if (itemId) {
        return parseInt(itemId);
      }
    }
    return null;
  });

  facetFilter = computed(() => {
    const category = this.categoryComputed();
    if (category) {
      return `taxonomies.category:${category}`;
    }

    return [['taxonomies.category:dev', 'taxonomies.category:design']];
  });

  title = signal<string>('');
  titleComputed = computed(() => this.title());

  // name = computed(() => {
  //   const name = this.title();
  //   return name ? name.toLocaleLowerCase().replace(/ /g, '-') : Math.random().toString(36);
  // });
  subtitle = signal<string>('');
  subtitleComputed = computed(() => this.subtitle());

  items = signal<PortfolioHit[]>([]);
  itemsComputed = computed(() => {
    return this.items()
      .map((item) => {
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
      })
      .filter((item) => {
        return item.images.thumbnail?.url;
      });
  });

  public searchService = inject(InstantSearchService);

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const paramCategory = this.route.snapshot.paramMap.get('category');
    const paramObjectId = this.route.snapshot.paramMap.get('objectId');
    console.log('paramMap', paramCategory, paramObjectId);
    this.category.set(paramCategory);

    if (paramObjectId) {
      this.objectId.set(paramObjectId);
    }

    this.route.paramMap.subscribe(() => {
      // const paramCategory = params.get('category');
      // const paramItem = params.get('item');

      this.searchService.requests(this.facetFilter(), this.objectId()).then((res) => {
        this.items.set(res.results[0].hits as Hit<PortfolioHit>[]);
      });
    });
  }
}
