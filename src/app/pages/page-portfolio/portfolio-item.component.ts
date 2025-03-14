import { Component, computed, input, inject, signal, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioHit } from '../../services/search.interface';
import { ActivatedRoute } from '@angular/router';
import { PortfolioItemAttachmentsComponent } from '../../elements/portfolio/portfolio-item-attachments.component';
import { PageIdSlugEnum } from '../../app.global';
import { Hit } from 'instantsearch.js/es/types/results';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'gilles-nx-portfolio-item',
  imports: [CommonModule, PortfolioItemAttachmentsComponent],
  template: `
    <main class="page-prose">
      <section class="mt-6">
        <gilles-nx-portfolio-item-attachments
          [items]="itemsComputed()"
          [itemId]="itemId()"
          [objectId]="objectId()"
        ></gilles-nx-portfolio-item-attachments>
      </section>
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

    // this.route.paramMap.subscribe(() => {
    //   // const paramCategory = params.get('category');
    //   // const paramItem = params.get('item');
    //
    //   this.searchService.requests(this.facetFilter(), this.objectId()).then((res) => {
    //     this.items.set(res.results[0].hits as Hit<PortfolioHit>[]);
    //   });
    // });
  }
}
