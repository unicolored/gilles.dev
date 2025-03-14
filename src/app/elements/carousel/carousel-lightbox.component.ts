import { Component, computed, EventEmitter, inject, input, Output, viewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { CarouselItem } from '../../services/carousel.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'gilles-nx-carousel-lightbox',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, NgbCarouselModule],
  providers: [NgbCarouselConfig, NgbCarousel],
  template: `
    <ngb-carousel
      #carousel
      [activeId]="slideId()"
      (slid)="afterSlideChange($event)"
      (slide)="beforeSlideChange($event)"
      class="mycarousel"
    >
      @for (i of items(); track i.id) {
        @if (i.image) {
          <ng-template ngbSlide id="{{ $index }}">
            <div class="mygrid">
              <div class="picsum-img-wrapper">
                <img [ngSrc]="i.image" [alt]="i.title" fill [priority]="slideId() === $index + ''" />
                <!--                <span>TEST</span>-->
              </div>
              <div class="carousel-caption">
                <!--<h2
                  class="cursor-pointer text-xl"
                  [routerLink]="['/portfolio', 'item', i.id]"
                  [innerHTML]="i.title"
                ></h2>-->
                <h2 class="cursor-pointer text-xl" [innerHTML]="i.title"></h2>
                <p class="uppercase text-md">{{ i.subtitle }}</p>
              </div>
            </div>
          </ng-template>
        }
      }
    </ngb-carousel>
  `,
  styleUrls: ['./carousel-lightbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselLightboxComponent {
  slide = input<number>(0);
  slideId = computed(() => {
    return `${this.slide()}`;
  });
  items = input<CarouselItem[]>([]);
  config = inject(NgbCarouselConfig);

  @Output() slideChange = new EventEmitter<number>();
  carouselEl = viewChild<NgbCarousel>('carousel');
  carousel = computed<NgbCarousel | undefined>(() => {
    return this.carouselEl();
  });

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.animation = true;
    config.pauseOnFocus = true;
    config.pauseOnHover = true;
  }

  previous() {
    this.carousel()?.prev();
    console.log(this.carousel(), 'previous');
  }

  next() {
    this.carousel()?.arrowRight();
    console.log(this.carousel(), 'next');
  }

  beforeSlideChange($event: NgbSlideEvent) {
    const items: CarouselItem[] = this.items();
    const item = items[parseInt($event.current)];
    this.slideChange.emit(item.id);
  }

  afterSlideChange($event: NgbSlideEvent) {
    console.log(`current slide ${$event.current}`);
  }
}
