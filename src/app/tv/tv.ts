import { Component, computed, inject, OnInit, OnDestroy, signal, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import { Store } from '../store';
import { QRCodeComponent } from 'angularx-qrcode';
import { PostList, PostListItemPost } from '../interfaces/api-postList';
import { PostAttachment } from '../interfaces/common';

@Component({
  selector: 'app-tv-component',
  imports: [RouterLink, NgOptimizedImage, QRCodeComponent],
  templateUrl: `tv.html`,
  encapsulation: ViewEncapsulation.None,
})
export class TvComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  remotePin = signal<number | null>(null); // Use number for pin
  lists = signal<Partial<PostList>[]>([]);
  slug = signal<string | null>(null);
  items = computed<PostListItemPost[]>(() => {
    const lists = this.lists();
    const slug = this.slug();
    const items: PostListItemPost[] = [];
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
  currentItems = computed<PostListItemPost | null>(() => {
    const items = this.items();
    const currentIndex = this.currentIndex();
    const slug = this.slug();

    if (items.length === 0) {
      return null;
    }

    if (slug) {
      return items.filter((i) => i.slug === slug)[0];
    }

    return items[currentIndex];
  });
  itemAttachments = signal<PostAttachment[]>([]);
  attachments = computed<PostAttachment[]>(() => {
    const item = this.currentItems();
    return item?.attachments ?? [];
  });
  currentAttachments = computed<PostAttachment[]>(() => {
    const attachments = this.attachments();
    if (attachments.length === 0) {
      return [];
    }
    const currentAttachmentIndex = this.currentAttachmentIndex();
    const currentAttachment = attachments[currentAttachmentIndex] ?? attachments[0];
    return [currentAttachment];
  });
  currentIndex = signal(0);
  currentAttachmentIndex = signal(0);
  private autoSlideInterval!: NodeJS.Timeout;
  private autoAttachmentInterval!: NodeJS.Timeout;
  public readonly portfolioService = inject(PortfolioService);
  private readonly apiService = inject(ApiService);
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private sseSub: Subscription | null = null;
  remoteUrl = signal<string | null>(null);
  private readonly slideDuration: number = 7000;
  private readonly slideAttachmentDuration: number = 10000;

  async ngOnInit(): Promise<void> {
    const slugParam = this.route.snapshot.paramMap.get('slug');
    const slugUrl = slugParam ?? null;
    this.slug.set(slugUrl);

    this.remoteUrl.set(this.store.getRemoteUrl());
    if (this.store.getRemotePin()) {
      this.remotePin.set(this.store.getRemotePin());
      if (isPlatformBrowser(this.platformId)) {
        console.log('Subscribe to remote', this.store.getRemotePin());
        this.subscribeToMercure(this.store.getRemotePin());
      }
    }

    this.store.getPortfolioService().subscribe((lists) => {
      this.lists.set(lists);
    });

    // Start auto-looping
    if (!slugUrl) {
      this.restartSlideInterval();
    } else {
      this.restartAttachmentSlideInterval();
    }
  }

  private subscribeToMercure(pin: number) {
    const topic = `https://remote.com/portfolio/${pin}`;
    console.log(`Subscribing to ${topic}`);
    const endpoint = `${environment.endpoints.hub}/.well-known/mercure?topic=${encodeURIComponent(topic)}`;
    console.log('endpoint', endpoint);
    this.sseSub = this.apiService.sseEvent(endpoint).subscribe({
      next: (event) => {
        console.log(event);
        const messageEvent = event as MessageEvent;
        console.info(`SSE message: type="${messageEvent.type}", data="${messageEvent.data}"`);
        const data = JSON.parse(messageEvent.data) as { action: string; slug: string };
        if (data.slug) {
          console.log('Received slug:', data.slug);
          this.router.navigate(['/tv', data.slug]);
          this.slug.set(data.slug);
          this.restartAttachmentSlideInterval();
        }
      },
      error: (err) => console.error('SSE error:', err),
      complete: () => console.log('SSE complete'),
    });
  }

  next() {
    this.currentIndex.update((i) => (i + 1) % this.items().length);
  }

  nextAttachment() {
    this.currentAttachmentIndex.update((i) => (i + 1) % this.attachments().length);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      this.resetSlideInterval();
    }
    if (this.autoAttachmentInterval) {
      this.resetAttachmentSlideInterval();
    }
    if (this.sseSub) {
      this.sseSub.unsubscribe();
    }
  }

  resetSlideInterval() {
    clearInterval(this.autoSlideInterval);
  }

  restartSlideInterval() {
    this.resetSlideInterval();
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, this.slideDuration);
    this.currentIndex.set(0);
  }

  resetAttachmentSlideInterval() {
    clearInterval(this.autoAttachmentInterval);
  }

  restartAttachmentSlideInterval() {
    this.resetAttachmentSlideInterval();
    this.autoAttachmentInterval = setInterval(() => {
      this.nextAttachment();
    }, this.slideAttachmentDuration);
    this.currentAttachmentIndex.set(0);
  }
}
