import { Component, computed, inject, input, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { PortfolioHit } from '../../services/search.interface';
import { PageIdSlugEnum, PortfolioListSlug } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { ApiService } from '../../services/api.service';
import { PostList } from '../../interfaces/post';
import { forkJoin, lastValueFrom } from 'rxjs';

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

      @if (lists) {
        @for (list of lists; track list.name) {
          <section class="mt-6">
            <gilles-nx-portfolio-hits [title]="list.description" [items]="list.items"> </gilles-nx-portfolio-hits>
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

  itemId = signal<string | null>(null);

  title = input<string>();
  name = computed(() => {
    const name = this.title();
    return name ? name.toLocaleLowerCase().replace(/ /g, '-') : Math.random().toString(36);
  });
  subtitle = input<string>();
  items = signal<PortfolioHit[]>([]);
  private apiService = inject(ApiService);
  lists: PostList[] = [];

  async ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const portfolioSlugs = Object.values(PortfolioListSlug);
    const listRequests = portfolioSlugs.map((slug) => this.apiService.getList(slug));
    const combined$ = forkJoin(listRequests);

    // Convert observable to promise and await it
    this.lists = await lastValueFrom(combined$);

    const paramItem = this.route.snapshot.paramMap.get('item');

    this.itemId.set(paramItem);
  }
}
