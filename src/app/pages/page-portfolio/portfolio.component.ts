import { Component, computed, inject, OnInit, PLATFORM_ID, signal, ViewEncapsulation } from '@angular/core';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { QRCodeComponent } from 'angularx-qrcode';
import { Store } from '../../store';
import { PostList, PostListItem } from '../../interfaces/api-postList';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SharedNgComponentsModule, PortfolioHitsComponent, QRCodeComponent],
  template: `
    <main class="portfolio--container prose dark:prose-invert lg:prose-xl max-w-none">
      <h1 class="flex gap-3">
        <svg
          [routerLink]="['/tv']"
          class="hover:fill-accent dark:hover:fill-dark-accent fill-dark-bkg dark:fill-bkg inline-block w-7 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z"
          />
        </svg>
        Portfolio
      </h1>

      @defer (when listsAreReady()) {
        @if (lists(); as lists) {
          @for (list of lists; track list['@id']; let i = $index) {
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
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  private apiService = inject(ApiService);
  private platformId = inject(PLATFORM_ID);
  private readonly store = inject(Store);

  remoteUrl = signal<string | null>(null);
  remotePin = signal<number | null>(null); // Use number for pin
  isRemoteActive = computed<boolean>(() => !!this.remotePin());
  selectedItem = signal<string | null>(null); // Track selected item ID
  private sseSub: Subscription | null = null;

  lists = signal<Partial<PostList>[]>([]);
  listsAreReady = signal<boolean>(false);
  listsHolder!: Partial<PostList>;

  async ngOnInit() {
    this.listsHolder = this.generatePlaceholderLists();

    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    this.remoteUrl.set(this.store.getRemoteUrl());

    if (isPlatformBrowser(this.platformId)) {
      this.subscribeToMercure(this.store.getRemotePin());
    }

    this.store.getPostListItemPostArray().subscribe((lists) => {
      this.lists.set(lists);
      this.listsAreReady.set(true);
    });
  }

  private async subscribeToMercure(pin: number) {
    const topic = `https://remote.com/portfolio/${pin}`;
    console.log(`Subscribing to ${topic}`);
    const endpoint = `${environment.endpoints.hub}/.well-known/mercure?topic=${encodeURIComponent(topic)}`;
    const obs$ = this.apiService.sseEvent(endpoint);
    this.sseSub = obs$.subscribe(() => {
      this.router.navigate(['tv', pin]);
    });
  }

  ngOnDestroy() {
    if (this.sseSub) this.sseSub.unsubscribe();
  }

  private generatePlaceholderLists(): Partial<PostList> {
    const item: PostListItem = {
      '@id': '',
      '@type': '',
      post: {
        title: '',
        slug: '',
        status: '',
        createdAt: '',
      },
    };

    const items: PostListItem[] = [];
    for (let i = 1; i <= 6; i++) {
      items.push(item);
    }

    return {
      name: 'name?',
      slug: 'slüg',
      description: 'loading...',
      items,
    };
  }
}
