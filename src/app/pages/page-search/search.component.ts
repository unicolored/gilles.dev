import { AfterContentInit, AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { PageInterface } from '../page.interface';
import { WEB_PAGE_METAS_MAP, WebPageService } from '@homelib/shared-ng-services';
import { WebPageMetas } from '@gilles.nx/shared-js-interface';
import { environment } from '../../../environments/environment';
import { PageIdSlugEnum } from '../../app.global';
import { InstantSearchService } from '../../services/instantsearch.service';
import { Hit } from 'instantsearch.js/es/types/results';
import connectSearchBox from 'instantsearch.js/es/connectors/search-box/connectSearchBox';
import connectHits from 'instantsearch.js/es/connectors/hits/connectHits';
import { PortfolioHit, SearchQuery } from '../../services/search.interface';
import { ActivatedRoute } from '@angular/router';
import connectConfigure from 'instantsearch.js/es/connectors/configure/connectConfigure';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import {
  faArrowUpRightFromSquare as fasArrowUpRightFromSquare,
  faCalendar as fasCalendar,
  faEnvelope as fasEnvelope,
  faMobileScreenButton as fasMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, PortfolioHitsComponent],
  template: `
    <main class="page-prose">
      <section class="main search">
        <!--        <div class="hero-title pt-2 pb-5">-->
        <!--          @if (searchService.query()) {-->
        <!--            <h1>🔍 <span i18n>Search</span> </h1>-->
        <!--          } @else {-->
        <!--            <h1>🔍 <span i18n>Search</span></h1>-->
        <!--          }-->
        <!--        </div>-->

        <gilles-nx-portfolio-hits [title]="title()" [subtitle]="subtitle()" [items]="hits"> </gilles-nx-portfolio-hits>
      </section>
    </main>
  `,
  styleUrls: ['../pages.common.scss', './search.component.scss'],
})
export class SearchComponent implements OnInit, PageInterface, AfterContentInit, AfterViewInit {
  pageId = PageIdSlugEnum.search;

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);

  public searchService = inject(InstantSearchService);
  private activatedRoute = inject(ActivatedRoute);

  public refine!: (query: string) => void;

  public hits: Hit<PortfolioHit>[] = [];

  title = signal<string>('Search');
  subtitle = signal<string>('');

  library = inject(FaIconLibrary);

  ngOnInit(): void {
    this.library.addIcons(fasCalendar, fasMobileScreenButton, fasArrowUpRightFromSquare, fasEnvelope);

    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    this.searchService.addWidgets([
      connectConfigure(() => {
        console.log('searchService instance');
      })({
        searchParameters: {
          facetsRefinements: {
            'taxonomies.category': ['portfolio'],
          },
        },
      }),
      connectSearchBox(({ refine, query }) => {
        this.refine = refine;
        this.searchService.query.set(query);
        if (query) {
          this.title.set(`Search &laquo; ${query} &raquo;`);
        }
      })({
        // ...widgetParameters
      }),
      connectHits(({ hits }) => {
        this.hits = hits as Hit<PortfolioHit>[];
        this.subtitle.set(`${hits.length} results`);
      })({}),
    ]);
  }
  ngAfterViewInit(): void {
    if (this.refine) {
      this.refine(this.searchService.query());
    }

    this.activatedRoute.queryParams.subscribe((res) => {
      const queryParams = res as SearchQuery;

      this.searchService.query.set(queryParams.query);

      this.refine(this.searchService.query());
    });
  }
  ngAfterContentInit() {
    this.searchService.start();
  }

  public search(event: Event) {
    this.refine((event.target as HTMLInputElement).value);
  }
}
