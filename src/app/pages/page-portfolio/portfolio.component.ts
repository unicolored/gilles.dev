import { Component, inject, OnInit, PLATFORM_ID, signal, ViewEncapsulation } from '@angular/core';
import { PageIdSlugEnum, PortfolioListSlug } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { PostList } from '../../interfaces/post';
import { ApiService } from '../../services/api.service';
import { lastValueFrom, forkJoin } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SharedNgComponentsModule, PortfolioHitsComponent],
  template: `
    <main class="page-prose portfolio--container prose lg:prose-xl max-w-none pt-2 pb-5">
      <h1>Portfolio</h1>

      @if (lists(); as lists) {
        @for (list of lists; track list.slug; let i = $index) {
          <section class="mt-6">
            <gilles-nx-portfolio-hits [title]="list.description" [items]="list.items" [priority]="i === 0">
            </gilles-nx-portfolio-hits>
          </section>
        }
      }
    </main>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  pageId = PageIdSlugEnum.portfolio;

  private readonly route = inject(ActivatedRoute);
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  private apiService = inject(ApiService);
  private platformId = inject(PLATFORM_ID);

  lists = signal<Partial<PostList>[]>([]);

  async ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const portfolioSlugs = Object.values(PortfolioListSlug);
    const listRequests = portfolioSlugs.map((slug) => this.apiService.getList(slug));
    const combined$ = forkJoin(listRequests);

    console.log(this.platformId);

    // Fetch the data
    const lists = await lastValueFrom(combined$);
    if (lists) {
      this.lists.set(lists.filter((l) => l.items?.length && l.items.length > 0));
    }
  }
}
