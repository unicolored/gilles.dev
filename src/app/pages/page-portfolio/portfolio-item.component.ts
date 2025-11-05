import { Component, computed, inject, signal, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortfolioItemAttachmentsComponent } from '../../elements/portfolio/portfolio-item-attachments.component';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GillesDevCorporation, GillesDevWebSite } from '../../../environments/schema';
import { map } from 'rxjs';
import { Post } from '../../interfaces/api-post';
import { PostAttachment } from '../../interfaces/common';

@Component({
  selector: 'gilles-nx-portfolio-item',
  imports: [CommonModule, PortfolioItemAttachmentsComponent, NgOptimizedImage],
  templateUrl: `portfolio-item.component.html`,
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
    console.log(attachments);

    if (!attachments || attachments.member.length < 1) {
      return;
    }

    console.log(attachments);

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
