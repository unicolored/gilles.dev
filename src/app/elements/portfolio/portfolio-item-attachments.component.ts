import { Component, computed, effect, inject, input, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioHit } from '../../services/search.interface';
import { extractText } from '../../app.helpers';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../../app.service';
import { WordpressSelfSinglePostMedia, WordpressService } from 'ngx-services';

@Component({
  selector: 'gilles-nx-portfolio-item-attachments',
  imports: [CommonModule],
  providers: [AppService, WordpressService],
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

    @defer (on timer(200ms); prefetch on idle) {
      @if (attachments().length > 1) {
        <div class="portfolio-attachments">
          @for (media of attachments(); track media.id) {
            <div class="attachment">
              <img [src]="media.media_details.sizes.large.source_url" fill [alt]="media.alt_text" />
            </div>
          }
        </div>
      }
    }
  `,
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioItemAttachmentsComponent {
  title = input<string>();
  name = computed(() => {
    const name = this.title();
    return name ? name.toLocaleLowerCase().replace(/ /g, '-') : Math.random().toString(36);
  });
  subtitle = input<string>();

  itemId = input<number | null>(null);
  objectId = input<string | null>(null);

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

  attachments = signal<WordpressSelfSinglePostMedia[]>([]);

  private appService = inject(AppService);

  constructor() {
    effect(async () => {
      const postId = this.itemId();
      if (postId) {
        const medias = await lastValueFrom(this.appService.getPortfolioPostMedias(postId));
        this.attachments.set(medias);
      }
    });
  }
}
