import { Component, inject, OnInit, signal } from '@angular/core';
import { PageInterface } from '../page.interface';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { PageIdSlugEnum } from '../../app.global';
import { environment } from '../../../environments/environment';
import { Hit } from 'instantsearch.js/es/types/results';
import { PortfolioHit, SearchIndexes } from '../../services/search.interface';
import { CommonModule } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { InstantSearchService } from '../../services/instantsearch.service';
import { connectConfigure, connectHits } from 'instantsearch.js/es/connectors';

@Component({
  standalone: true,
  imports: [CommonModule, SharedNgComponentsModule, PortfolioHitsComponent],
  template: `
    <main class="page-prose">
      <div class="hero pt-8 pb-4">
        <div class="hero-content text-left w-full">
          <section class="w-full">
            <header class="not-prose text-center">
              <h1 class="font-bold text-5xl leading-snug">Gilles HOARAU</h1>
              <h2 class="font-bold font-mono text-xl leading-snug text-accent" i18n>
                Graphic Designer &amp;&nbsp;Web&nbsp;Developer
              </h2>
            </header>

            <article class="hidden">
              <h3 class="font-bold leading-snug">
                <span i18n>I've been working on creative projects for many many years 🙏</span>
              </h3>
              <p>
                <span i18n>
                  I became expert in every steps, including graphic designs, websites and web apps, online payment,
                  performant hosting. May&nbsp;I&nbsp;help&nbsp;you?
                </span>
              </p>
            </article>
          </section>
        </div>
      </div>

      <section class="mt-6">
        <gilles-nx-portfolio-hits
          title="Visual Identity |&nbsp;UX&nbsp;Design"
          subtitle="Photoshop, Illustrator, Figma, Blender&nbsp;3D"
          [items]="portfolioDesignHits()"
        >
        </gilles-nx-portfolio-hits>
      </section>

      <section class="mt-12">
        <gilles-nx-portfolio-hits
          title="Full-stack Development |&nbsp;Devops"
          subtitle="Angular, Symfony, Woocommerce, Ansible, Docker, Kubernetes"
          [items]="portfolioDevHits()"
        >
        </gilles-nx-portfolio-hits>
      </section>
    </main>
  `,
  styleUrls: ['../pages.common.scss'],
})
export class HomeComponent implements OnInit, PageInterface {
  pageId = PageIdSlugEnum.home;

  portfolioDesignHits = signal<Hit<PortfolioHit>[]>([]);
  portfolioDevHits = signal<Hit<PortfolioHit>[]>([]);

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  public searchService = inject(InstantSearchService);

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const searchDesignInstance = this.searchService.createInstance(SearchIndexes.posts);

    const renderConfigure = (renderOptions: unknown, isFirstRender: boolean) => {
      // const {
      //   refine,
      //   widgetParams,
      // } = renderOptions;

      if (isFirstRender) {
        // Do some initial rendering and bind events
      }

      // Render the widget
    };

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
  }

  ngAfterViewInit(): void {
    const searchDevInstance = this.searchService.createInstance(SearchIndexes.posts);

    const renderConfigure = (renderOptions: unknown, isFirstRender: boolean) => {
      // const {
      //   refine,
      //   widgetParams,
      // } = renderOptions;

      if (isFirstRender) {
        // Do some initial rendering and bind events
      }

      // Render the widget
    };

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
