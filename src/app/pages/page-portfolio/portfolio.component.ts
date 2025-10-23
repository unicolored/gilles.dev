import { Component, computed, inject, OnInit, PLATFORM_ID, signal, ViewEncapsulation } from '@angular/core';
import { PageIdSlugEnum } from '../../app.global';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { PortfolioHitsComponent } from '../../elements/portfolio/portfolio-hits.component';
import { PostList } from '../../interfaces/post';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { QRCodeComponent } from 'angularx-qrcode';
import { SseErrorEvent } from 'ngx-sse-client';
import { PortfolioService } from '../../services/portfolio.service';

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

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  private apiService = inject(ApiService);
  private platformId = inject(PLATFORM_ID);
  private readonly portfolioService = inject(PortfolioService);

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
    this.remoteUrl.set(`${environment.endpoints._self}/remote/${localPin}`);

    if (isPlatformBrowser(this.platformId)) {
      this.subscribeToMercure(localPin);
    }

    const lists = await this.portfolioService.getLists();
    if (lists) {
      this.lists.set(lists);
    }
  }

  private subscribeToMercure(pin: number) {
    const topic = `https://remote.com/portfolio/${pin}`;
    console.log(`Subscribing to ${topic}`);
    const endpoint = `${environment.endpoints.hub}?topic=${encodeURIComponent(topic)}`;
    console.log('endpoint', endpoint);
    this.sseSub = this.apiService.sseEvent(endpoint).subscribe((event) => {
      console.log(event);
      if (event.type === 'error') {
        const errorEvent = event as SseErrorEvent;
        console.error(errorEvent.error, errorEvent.message);
      } else {
        const messageEvent = event as MessageEvent;
        console.info(`SSE request with type "${messageEvent.type}" and data "${messageEvent.data}"`);
        this.router.navigate(['tv', pin]);
      }
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
    if (this.sseSub) this.sseSub.unsubscribe();
  }
}
