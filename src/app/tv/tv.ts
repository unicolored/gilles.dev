import { Component, computed, inject, OnInit, OnDestroy, signal, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Post, PostList } from '../interfaces/post';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { SseErrorEvent } from 'ngx-sse-client';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-component',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: `tv.html`,
  encapsulation: ViewEncapsulation.None,
})
export class TvComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  remotePin = signal<number | null>(null); // Use number for pin
  lists = signal<Partial<PostList>[]>([]);
  slug = signal<string | null>(null);
  items = computed<Post[]>(() => {
    const lists = this.lists();
    const slug = this.slug();
    const items: Post[] = [];
    if (lists) {
      lists.forEach((l) => {
        if (l.items) {
          l.items.forEach((i) => {
            items.push(i.post);
          });
        }
      });
    }
    if (slug) {
      return items.filter((i) => i.slug === slug);
    }
    return items;
  });
  currentIndex = signal(0);
  private autoSlideInterval!: NodeJS.Timeout;
  public readonly portfolioService = inject(PortfolioService);
  private readonly apiService = inject(ApiService);
  private platformId = inject(PLATFORM_ID);
  private sseSub: Subscription | null = null;

  async ngOnInit(): Promise<void> {
    const lists = await this.portfolioService.getLists();
    if (lists) {
      this.lists.set(lists);
    }

    const remotePinParam = this.route.snapshot.paramMap.get('pin');
    const remotePin = remotePinParam ? parseInt(remotePinParam, 10) : null;
    if (remotePin && !isNaN(remotePin)) {
      this.remotePin.set(remotePin);
      // this.apiService.connectRemote(remotePin, 'connect').subscribe({
      //   next: () => console.log('Remote connected'),
      //   error: (err) => console.error('Connect error:', err),
      // });
      if (isPlatformBrowser(this.platformId)) {
        this.subscribeToMercure(remotePin);
      }
    } else {
      //this.remotePin.set(localPin);  // Set local pin if no remote
    }

    // Start auto-looping every 5 seconds (adjust as needed)
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
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
        const data = JSON.parse(messageEvent.data) as { action: string; slug: string };
        console.log(data.slug);
        if (data.slug) {
          console.log('slug', data.slug);
          this.slug.set(data.slug);
        }
      }
    });
  }

  next() {
    this.currentIndex.update((i) => (i + 1) % this.items().length);
  }

  prev() {
    this.currentIndex.update((i) => (i - 1 + this.items().length) % this.items().length);
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
