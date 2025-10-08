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
import { isPlatformServer } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SharedNgComponentsModule, PortfolioHitsComponent],
  template: `
    <main class="page-prose">
      <div class="hero pt-8 pb-4">
        <div class="hero-content w-full text-left">
          <section class="w-full">
            <header class="not-prose text-center">
              <h1 class="text-4xl leading-snug font-bold uppercase">Portfolio</h1>
            </header>
          </section>
        </div>
      </div>

      @if (lists(); as lists) {
        @for (list of lists; track list.slug) {
          <section class="mt-6">
            <gilles-nx-portfolio-hits [title]="list.description" [items]="list.items"> </gilles-nx-portfolio-hits>
          </section>
        } @empty {
          <p>No lists found.</p>
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
      console.log('get lists', lists);
      this.lists.set(lists.filter((l) => l.items?.length && l.items.length > 0));
    }
  }
}
