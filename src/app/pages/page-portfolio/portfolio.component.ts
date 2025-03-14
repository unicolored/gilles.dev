import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
  Signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { PortfolioHit } from '../../services/search.interface';
import { CarouselItem } from '../../services/carousel.interface';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageService } from '@homelib/shared-ng-services';
import { WebPageMetas } from '@gilles.nx/shared-js-interface';
import { environment } from '../../../environments/environment';
import { Hit } from 'instantsearch.js/es/types/results';
import { InstantSearchService } from '../../services/instantsearch.service';
import { ModalComponent } from '../../elements/modal/modal.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SharedNgComponentsModule, PortfolioHitsComponent],
  template: `
    <!--<gilles-nx-modal #carouselModal [opened]="true" [title]="title()" [name]="name()" [items]="itemsCarousel()"></gilles-nx-modal>-->

    <main class="page-prose">
      <div class="hero pt-8 pb-4">
        <div class="hero-content text-left w-full">
          <section class="w-full">
            <header class="not-prose text-center">
              <h1 class="font-bold text-4xl leading-snug uppercase">Portfolio</h1>
            </header>
          </section>
        </div>
      </div>

      <div class="text-center">
        <div class="join">
          <button class="btn join-item" [routerLink]="['/portfolio']">All</button>
          <button class="btn join-item" [routerLink]="['/portfolio', 'category', 'design']">Design</button>
          <button class="btn join-item" [routerLink]="['/portfolio', 'category', 'web']">Web</button>
        </div>
      </div>

      <section class="mt-6">
        <gilles-nx-portfolio-hits [items]="itemsComputed()" [itemId]="itemId()"></gilles-nx-portfolio-hits>
      </section>
    </main>
  `,
  styleUrls: ['../pages.common.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  pageId = PageIdSlugEnum.portfolio;

  private readonly route = inject(ActivatedRoute);
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);

  public searchService = inject(InstantSearchService);

  carouselModal: Signal<ModalComponent | undefined> = viewChild('#carouselModal');

  portfolioHits = signal<Hit<PortfolioHit>[]>([]);

  category = signal<string | null>(null);
  categoryComputed = computed(() => {
    if (this.category() === 'web') {
      return 'dev';
    }

    return this.category();
  });

  itemId = signal<string | null>(null);

  facetFilter = computed(() => {
    const category = this.categoryComputed();
    if (category) {
      return `taxonomies.category:${category}`;
    }

    return [['taxonomies.category:dev', 'taxonomies.category:design']];
  });

  title = input<string>();
  name = computed(() => {
    const name = this.title();
    return name ? name.toLocaleLowerCase().replace(/ /g, '-') : Math.random().toString(36);
  });
  subtitle = input<string>();
  items = signal<PortfolioHit[]>([]);
  itemsComputed = computed(() =>
    this.items().filter((item) => {
      return item.images.thumbnail?.url;
    }),
  );
  itemsCarousel: Signal<CarouselItem[]> = computed(() => {
    const carouselItems: CarouselItem[] = [];
    this.itemsComputed().forEach((c) => {
      if (c.images.full?.url) {
        carouselItems.push({
          objectID: c.objectID,
          id: c.post_id,
          image: c.images.full.url,
          title: c.post_title,
          subtitle: c.taxonomies.post_tag?.join(', ') ?? '',
        });
      }
    });
    return carouselItems;
  });

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const paramCategory = this.route.snapshot.paramMap.get('category');
    const paramItem = this.route.snapshot.paramMap.get('item');
    console.log('paramMap', paramCategory, paramItem);
    this.category.set(paramCategory);

    this.itemId.set(paramItem);

    this.route.paramMap.subscribe(() => {
      // const paramCategory = params.get('category');
      // const paramItem = params.get('item');

      this.searchService.requests(this.facetFilter(), this.itemId()).then((res) => {
        this.items.set(res.results[0].hits as Hit<PortfolioHit>[]);
      });
    });
  }
}
