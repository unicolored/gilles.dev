import { Component, computed, inject, signal, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortfolioItemAttachmentsComponent } from '../../elements/portfolio/portfolio-item-attachments.component';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GillesDevCorporation, GillesDevWebSite } from '../../../environments/schema';
import { Post } from '../../interfaces/api-post';
import { PostAttachment } from '../../interfaces/common';

@Component({
  selector: 'gilles-nx-portfolio-item',
  imports: [PortfolioItemAttachmentsComponent, NgOptimizedImage],
  template: `
    <main class="page-prose">
      <article class="mb-6">
        @for (item of items(); track item.objectID) {
          <figure class="p-4">
            @if (item.images.full) {
              @if (item.images.full?.url) {
                <img
                  [ngSrc]="item.images.full.url"
                  priority
                  width="600"
                  height="300"
                  class="img-thumbnail m-auto"
                  [alt]="item.post_title"
                  [title]="item.post_title"
                  />
              }
            } @else if (item.images.thumbnail) {
              @if (item.images.thumbnail?.url) {
                <img
                  [ngSrc]="item.images.thumbnail.url"
                  priority
                  width="600"
                  height="300"
                  class="img-thumbnail m-auto"
                  [alt]="item.post_title"
                  [title]="item.post_title"
                  />
              }
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
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioItemComponent implements OnInit {
  pageId = PageIdSlugEnum.portfolio;

  private readonly route = inject(ActivatedRoute);
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);

  slug = signal<string | null>(null);
  itemId = computed<number | null>(() => {
    const slug = this.slug();
    if (slug) {
      const itemId = slug.split('-').shift();
      if (itemId) {
        return parseInt(itemId);
      }
    }
    return null;
  });
  sanitizer = inject(DomSanitizer);

  post = signal<Post | null>(null);
  postComputed = computed(() => {
    return this.post();
  });
  safeHtml = computed<SafeHtml | null>(() => {
    const markdown = this.post()?.contentMarkdown;
    if (!markdown) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustHtml(markdown);
  });
  attachmentsComputed = computed<PostAttachment[] | undefined>(() => {
    const post = this.post();
    const featured = post?.cloudinaryId;

    const attachments = post?.attachments;

    if (!attachments) {
      return;
    }

    if (attachments.member && attachments.member.length < 1) {
      return;
    }

    return attachments.member.filter((a) => a.cloudinaryId !== featured);
  });

  public apiService = inject(ApiService);

  ngOnInit() {
    const paramSlug = this.route.snapshot.paramMap.get('slug');

    if (paramSlug) {
      this.slug.set(paramSlug);
    }

    this.route.paramMap.subscribe(() => {
      const slug = this.slug();
      if (slug) {
        this.apiService.getItem(slug).subscribe((res) => {
          this.post.set(res);

          const postMetas = {
            isHome: true,
            //title: `Freelance | Graphic Designer & Developer`,
            title: `${res.title} | Gilles. Developer`,
            description: `${res.description}`,
            canonical: `/`,
            schema: {
              '@context': 'https://schema.org',
              '@graph': [GillesDevCorporation, GillesDevWebSite],
            },
          } as WebPageMetas;
          this.webPageService.setMetas(postMetas, environment.endpoints?.['_self']);
        });
      }
    });
  }
}
