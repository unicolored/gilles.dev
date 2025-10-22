import { Component, computed, inject, OnInit, PLATFORM_ID, signal, ViewEncapsulation } from '@angular/core';
import { PageIdSlugEnum, PortfolioListSlug } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { PostList } from '../../interfaces/post';
import { ApiService } from '../../services/api.service';
import { lastValueFrom, forkJoin, Subscription } from 'rxjs';
import { QRCodeComponent } from 'angularx-qrcode';
import { EventSourceService } from '../../event-source.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SharedNgComponentsModule, PortfolioHitsComponent, QRCodeComponent],
  template: `
    <main class="portfolio--container prose dark:prose-invert lg:prose-xl max-w-none">
      <h1>Portfolio</h1>
      {{ remotePin() }}
      {{ isRemoteActive() }}
      @if (!isRemoteActive()) {
        @if (remoteUrl(); as url) {
          {{ url }}
          <qrcode [qrdata]="url" [width]="256" [errorCorrectionLevel]="'M'"> </qrcode>
        }
      }

      @if (lists(); as lists) {
        @for (list of lists; track list.slug; let i = $index) {
          <section>
            <gilles-nx-portfolio-hits
              [title]="list.description"
              [items]="list.items"
              [priority]="i === 0"
              [isRemoteActive]="isRemoteActive()"
              [selectedItem]="selectedItem()"
              (itemSelected)="onItemSelected($event)"
            >
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
  private sseService = inject(EventSourceService);
  private platformId = inject(PLATFORM_ID);

  remoteUrl = signal<string | null>(null);
  remotePin = signal<number | null>(null); // Use number for pin
  isRemoteActive = computed<boolean>(() => !!this.remotePin());
  selectedItem = signal<string | null>(null); // Track selected item ID
  private sseSub: Subscription | null = null;

  lists = signal<Partial<PostList>[]>([]);

  async ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }

    const randomNum = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    const localPin = randomNum;
    this.remoteUrl.set(`${environment.endpoints._self}/portfolio?remote=${localPin}`);

    const remotePinParam = this.route.snapshot.queryParamMap.get('remote');
    const remotePin = remotePinParam ? parseInt(remotePinParam, 10) : null;
    if (remotePin && !isNaN(remotePin)) {
      this.remotePin.set(remotePin);
      this.apiService.connectRemote(remotePin, 'connect').subscribe({
        next: () => console.log('Remote connected'),
        error: (err) => console.error('Connect error:', err),
      });
    } else {
      //this.remotePin.set(localPin);  // Set local pin if no remote
    }
    if (isPlatformBrowser(this.platformId)) {
      this.subscribeToMercure();
    }

    const portfolioSlugs = Object.values(PortfolioListSlug);
    let listRequests;
    if (isPlatformServer(this.platformId)) {
      listRequests = portfolioSlugs.map((slug) => this.apiService.getList(slug));
    } else {
      listRequests = portfolioSlugs.map((slug) => this.apiService.getListApi(slug));
    }
    const combined$ = forkJoin(listRequests);

    // Fetch the data
    const lists = await lastValueFrom(combined$);
    if (lists) {
      this.lists.set(lists.filter((l) => l.items?.length && l.items.length > 0));
    }
  }

  // async connectRemote(pin: string) {
  //   (await this.apiService.connectRemote(pin)).subscribe();
  // }

  private subscribeToMercure() {
    const pin = this.remotePin();
    if (!pin) return;

    const topic = `https://remote.com/portfolio/${pin}`;
    const endpoint = `${environment.endpoints.hub}?topic=${encodeURIComponent(topic)}`;
    this.sseSub = this.sseService.connectToServerSentEvents(endpoint, {}, ['message']).subscribe({
      next: (event: unknown) => {
        const ev = event as { data: string };
        const data = JSON.parse(ev.data);
        if (data.action === 'selectItem') {
          this.selectedItem.set(data.data); // Update view
          console.log('Received selection:', data.data);
          // Add logic: scroll to item, highlight, etc.
        }
      },
      error: (err) => console.error('SSE error:', err),
    });
  }
  onItemSelected(itemId: string) {
    const pin = this.remotePin();
    console.log('SELECTED', itemId);
    if (pin && this.isRemoteActive()) {
      // Only publish if remote (screen2)
      this.apiService.connectRemote(pin, 'selectItem', itemId).subscribe({
        next: () => console.log('Published selection:', itemId),
        error: (err) => console.error('Publish error:', err),
      });
    }
  }

  ngOnDestroy() {
    this.sseService.close();
    if (this.sseSub) this.sseSub.unsubscribe();
  }
}
