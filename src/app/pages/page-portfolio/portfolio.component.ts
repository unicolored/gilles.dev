import { Component, computed, inject, OnInit, PLATFORM_ID, signal, ViewEncapsulation } from '@angular/core';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { Post, PostList } from '../../interfaces/post';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { QRCodeComponent } from 'angularx-qrcode';
import { PortfolioService } from '../../services/portfolio.service';
import { Store } from '../../store';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SharedNgComponentsModule, PortfolioHitsComponent, QRCodeComponent],
  template: `
    <main class="portfolio--container prose dark:prose-invert lg:prose-xl max-w-none">
      <h1>Portfolio</h1>

      @defer (when listsAreReady()) {
        @if (lists(); as lists) {
          @for (list of lists; track list.slug; let i = $index) {
            <section>
              <gilles-nx-portfolio-hits
                [title]="list.description"
                [items]="list.items"
                [priority]="i === 0"
                [isRemoteActive]="isRemoteActive()"
                [selectedItem]="selectedItem()"
              >
              </gilles-nx-portfolio-hits>
            </section>
          }
        }
      } @loading (after 500ms; minimum 1s) {
        Loading..
      } @placeholder (minimum 1s) {
        <section>
          <gilles-nx-portfolio-hits [title]="listsHolder.description" [items]="listsHolder.items">
          </gilles-nx-portfolio-hits>
        </section>
      }

      <hr />
      @if (remoteUrl(); as url) {
        <div class="m-12 flex flex-col items-center justify-center text-center">
          <qrcode
            [qrdata]="url"
            [width]="256"
            [errorCorrectionLevel]="'M'"
            [colorDark]="'#274d74ff'"
            [colorLight]="'#ffffff'"
          ></qrcode>
          {{ url }}
        </div>
      }
    </main>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  pageId = PageIdSlugEnum.portfolio;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  private apiService = inject(ApiService);
  private platformId = inject(PLATFORM_ID);
  private readonly portfolioService = inject(PortfolioService);
  private readonly store = inject(Store);

  remoteUrl = signal<string | null>(null);
  remotePin = signal<number | null>(null); // Use number for pin
  isRemoteActive = computed<boolean>(() => !!this.remotePin());
  selectedItem = signal<string | null>(null); // Track selected item ID
  private sseSub: Subscription | null = null;

  lists = signal<Partial<PostList>[]>([]);
  listsAreReady = signal<boolean>(false);
  listsHolder: Partial<PostList<Partial<Post>>> = {
    name: 'name?',
    slug: 'slüg',
    description: 'loading...',
    items: [
      {
        post: {
          title: '',
          description: '...',
          cloudinaryId: '',
        },
      },
      {
        post: {
          title: '',
          description: '...',
          cloudinaryId: '',
        },
      },
      {
        post: {
          title: '',
          description: '...',
          cloudinaryId: '',
        },
      },
      {
        post: {
          title: '',
          description: '...',
          cloudinaryId: '',
        },
      },
      {
        post: {
          title: '',
          description: '...',
          cloudinaryId: '',
        },
      },
      {
        post: {
          title: '',
          description: '...',
          cloudinaryId: '',
        },
      },
    ],
  };

  async ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const randomNum = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    const localPin = randomNum;
    this.remoteUrl.set(`${environment.endpoints._self}/remote/${localPin}`);

    if (isPlatformBrowser(this.platformId)) {
      this.subscribeToMercure(localPin);
    }

    //const lists = await this.portfolioService.getLists();
    this.store.getPortfolioService().subscribe((lists) => {
      this.lists.set(lists);
      this.listsAreReady.set(true);
    });
  }

  private async subscribeToMercure(pin: number) {
    const topic = `https://remote.com/portfolio/${pin}`;
    console.log(`Subscribing to ${topic}`);
    const endpoint = `${environment.endpoints.hub}/.well-known/mercure?topic=${encodeURIComponent(topic)}`;
    console.log('endpoint', endpoint);
    const obs$ = await this.apiService.sseEvent(endpoint);
    this.sseSub = obs$.subscribe((event) => {
      console.log(event);
      // if (event.type === 'error') {
      //   const errorEvent = event as SseErrorEvent;
      //   console.error(errorEvent.error, errorEvent.message);
      // } else {
      //   const messageEvent = event as MessageEvent;
      //   console.info(`SSE request with type "${messageEvent.type}" and data "${messageEvent.data}"`);
      //   this.router.navigate(['tv', pin]);
      // }
      this.router.navigate(['tv', pin]);
    });
  }

  // async onItemSelected(itemId: string) {
  //   const pin = this.remotePin();
  //   console.log('SELECTED', itemId);
  //   if (pin && this.isRemoteActive()) {
  //     // Only publish if remote (screen2)
  //     const obs$ = await this.apiService.connectRemote(pin, 'selectItem', itemId);
  //     obs$.subscribe({
  //       next: () => console.log('Published selection:', itemId),
  //       error: (err) => console.error('Publish error:', err),
  //     });
  //   }
  // }

  ngOnDestroy() {
    if (this.sseSub) this.sseSub.unsubscribe();
  }
}
