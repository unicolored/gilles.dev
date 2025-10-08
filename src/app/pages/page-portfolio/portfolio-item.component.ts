import { Component, computed, inject, signal, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortfolioItemAttachmentsComponent } from '../../elements/portfolio/portfolio-item-attachments.component';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'gilles-nx-portfolio-item',
  imports: [CommonModule, PortfolioItemAttachmentsComponent, NgOptimizedImage],
  template: `
    <main class="page-prose">
      @if (postComputed(); as post) {
        <article class="mb-6">
          <figure class="flex w-full justify-around p-4 text-center">
            @if (post.cloudinaryId) {
              <img
                [ngSrc]="post.cloudinaryId"
                width="960"
                height="500"
                priority
                placeholder
                class="img-thumbnail"
                sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
                [alt]="post.title"
                [title]="post.title"
                style="object-fit: cover;"
              />
            }
          </figure>

          <header class="mb-2 flex justify-center">
            <h1 class="mb-1 text-xl font-bold">
              <span i18n [innerHTML]="post.title"></span>
            </h1>
          </header>

          <!-- <main class="flex w-full p-4">
            @if (post.content) {
              <div class="prose" [innerHTML]="post.content"></div>
            }
          </main> -->

          <section>
            <!-- <gilles-nx-portfolio-item-attachments
              [items]="itemsComputed()"
              [itemId]="itemId()"
              [objectId]="slug()"
            ></gilles-nx-portfolio-item-attachments> -->
          </section>
        </article>
      }
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

  post = signal<Post | null>(null);
  postComputed = computed(() => {
    return this.post();
  });

  public apiService = inject(ApiService);

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const paramSlug = this.route.snapshot.paramMap.get('slug');

    if (paramSlug) {
      this.slug.set(paramSlug);
    }

    this.route.paramMap.subscribe(() => {
      const slug = this.slug();
      if (slug) {
        this.apiService.getItem(slug).subscribe((res) => {
          //this.items.set(res.results[0].hits as Hit<PortfolioHit>[]);
          //console.log('⭐️the RES', res);
          this.post.set(res);
        });
      }
    });
  }
}
