import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { WordpressSelfSinglePost } from '@gilles.nx/shared-js-interface';
import { CarouselLightboxComponent } from '../carousel/carousel-lightbox.component';

@Component({
  selector: 'gilles-nx-portfolio-items',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, CarouselLightboxComponent],
  template: `
    <!--      @defer (on timer(1s); prefetch on viewport) {-->
    @defer (on viewport; prefetch on idle) {
      <div class="portfolio-items">
        @for (item of itemsComputed(); track item.slug) {
          <!--          {{ item._embedded['wp:featuredmedia'] }}-->
          @for (media of item._embedded['wp:featuredmedia']; track media.id) {
            <!--<div class="item" [style.background-image]="'url(' + media.media_details.sizes.medium.source_url + ')'"></div>-->
            <div class="item">
              <img [ngSrc]="media.media_details.sizes.thumbnail.file" fill priority [alt]="item.title.rendered" />
            </div>
          }
        }
      </div>

      <gilles-nx-carousel-lightbox [items]="itemsCarousel()"></gilles-nx-carousel-lightbox>
    } @placeholder (minimum 1s) {
      <div class="portfolio-items">
        @for (i of [1, 2, 3, 4, 5, 6]; track i) {
          <div class="item placeholder">
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
export class PortfolioPostsComponent {
  items = input<WordpressSelfSinglePost[]>([]);
  itemsComputed = computed(() =>
    this.items().map((item) => {
      console.log(item._embedded['wp:featuredmedia'][0].media_details);
      const currentUrl = item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.file;

      if (!currentUrl) {
        item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.file = 'missing.jpg';
      } else {
        const publicId = this.extractText(currentUrl);

        if (!publicId) {
          item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.file = 'missing.jpg';
        } else {
          item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.file =
            `f_webp,q_auto,w_600,c_fill,ar_16:9/${publicId}.webp`;
          item._embedded['wp:featuredmedia'][0].media_details.sizes.full.file =
            `q_auto:best,w_1280,c_fit,ar_16:9/${publicId}.webp`;
        }
      }
      console.log(item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.file);
      return item;
    }),
  );
  itemsCarousel = computed(() => {
    const carouselItems: { id: number; image: string }[] = [];
    this.itemsComputed().forEach((c) => {
      carouselItems.push({ id: c.id, image: c._embedded['wp:featuredmedia'][0].media_details.sizes.full.file });
    });
    return carouselItems;
  });

  extractText(inputUrl: string): string | null {
    // const match = inputUrl.match(/^[^-]+(?:-[^-]+)*?(?=-\d+x\d+\.[a-z]{3,4}$)/i);
    return inputUrl.replace(/-\d+x\d+\.(jpg|png)$/i, '');
  }
}
