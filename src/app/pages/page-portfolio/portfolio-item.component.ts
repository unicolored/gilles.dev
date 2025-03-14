import { Component, computed, input, signal, Signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioHit } from '../../services/search.interface';
import { CarouselItem } from '../../services/carousel.interface';
import { PortfolioItemAttachmentsComponent } from '../../elements/portfolio/portfolio-item-attachments.component';

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
  styleUrls: ['../pages.common.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioItemComponent {
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

  // ngOnInit() {
  //   if (this.webPageMetasMap.has(this.pageId)) {
  //     this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
  //   }
  //
  //   const paramCategory = this.route.snapshot.paramMap.get('category');
  //   const paramObjectId = this.route.snapshot.paramMap.get('objectId');
  //   console.log('paramMap', paramCategory, paramObjectId);
  //   this.category.set(paramCategory);
  //
  //   if (paramObjectId) {
  //     this.objectId.set(paramObjectId);
  //   }
  //
  //   this.route.paramMap.subscribe(() => {
  //     // const paramCategory = params.get('category');
  //     // const paramItem = params.get('item');
  //
  //     this.searchService.requests(this.facetFilter(), this.objectId()).then((res) => {
  //       this.items.set(res.results[0].hits as Hit<PortfolioHit>[]);
  //     });
  //   });
  // }
}
