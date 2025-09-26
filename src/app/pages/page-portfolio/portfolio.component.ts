import { Component, computed, inject, input, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { PortfolioHit, SearchIndexes } from '../../services/search.interface';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { Hit } from 'instantsearch.js/es/types/results';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { InstantSearchService } from '../../services/instantsearch.service';
import connectConfigure from 'instantsearch.js/es/connectors/configure/connectConfigure';
import connectHits from 'instantsearch.js/es/connectors/hits/connectHits';

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

      <section class="mt-12">
        <gilles-nx-portfolio-hits
          title="Full-stack Development | PHP / JS / API |&nbsp;Devops"
          subtitle="Symfony, Angular, Kubernetes, Ansible, Neovim"
          [items]="portfolioDevHits()"
        >
        </gilles-nx-portfolio-hits>
      </section>

      <section class="mt-6">
        <gilles-nx-portfolio-hits
          title="Visual Identity |&nbsp;UX&nbsp;Design"
          subtitle="Photoshop, Illustrator, Figma, Blender&nbsp;3D"
          [items]="portfolioDesignHits()"
        >
        </gilles-nx-portfolio-hits>
      </section>
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

  public searchService = inject(InstantSearchService);
  portfolioHits = signal<Hit<PortfolioHit>[]>([]);
  portfolioDesignHits = signal<Hit<PortfolioHit>[]>([]);
  portfolioDevHits = signal<Hit<PortfolioHit>[]>([]);

  category = signal<string | null>(null);
  categoryComputed = computed(() => {
    if (this.category() === 'web') {
      return 'dev';
    }

    return this.category();
  });

  itemId = signal<string | null>(null);

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

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const paramCategory = this.route.snapshot.paramMap.get('category');
    const paramItem = this.route.snapshot.paramMap.get('item');
    console.log('paramMap', paramCategory, paramItem);
    this.category.set(paramCategory);

    this.itemId.set(paramItem);

    // const renderConfigure = (renderOptions: unknown, isFirstRender: boolean) => { };
    const renderConfigure = () => {};

    const searchDesignInstance = this.searchService.createInstance(SearchIndexes.posts);
    searchDesignInstance
      .addWidgets([
        connectConfigure(renderConfigure)({
          searchParameters: {
            hitsPerPage: 6,
            facetsRefinements: {
              'taxonomies.category': ['design'],
            },
          },
        }),
        connectHits(({ hits }) => {
          this.portfolioDesignHits.set(hits as Hit<PortfolioHit>[]);
        })({}),
      ])
      .start();
    const searchDevInstance = this.searchService.createInstance(SearchIndexes.posts);
    searchDevInstance
      .addWidgets([
        connectConfigure(renderConfigure)({
          searchParameters: {
            hitsPerPage: 6,
            facetsRefinements: {
              'taxonomies.category': ['dev'],
            },
          },
        }),
        connectHits(({ hits }) => {
          this.portfolioDevHits.set(hits as Hit<PortfolioHit>[]);
        })({}),
      ])
      .start();
  }
}
