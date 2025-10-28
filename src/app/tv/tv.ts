import { Component, computed, inject, OnInit, OnDestroy, signal, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Attachment, Post, PostList } from '../interfaces/post';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import { Store } from '../store';
import { QRCodeComponent } from 'angularx-qrcode';

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
  currentItems = computed<Post[]>(() => {
    const items = this.items();
    const currentIndex = this.currentIndex();
    const slug = this.slug();

    if (items.length === 0) {
      return [];
    }

    if (slug) {
      return items.filter((i) => i.slug === slug);
    }

    return [items[currentIndex]];
  });
  itemAttachments = signal<Attachment[]>([]);
  attachments = computed(() => {
    const items = this.currentItems();
    return items[0].attachments;
  });
  currentAttachments = computed<Attachment[]>(() => {
    const attachments = this.attachments();
    if (attachments.length === 0) {
      return [];
    }
    const currentAttachmentIndex = this.currentAttachmentIndex();
    return [attachments[currentAttachmentIndex]];
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

  async ngOnInit(): Promise<void> {
    const slugParam = this.route.snapshot.paramMap.get('slug');
    const slugUrl = slugParam ?? null;
    this.slug.set(slugUrl);

    // const remotePinParam = this.route.snapshot.paramMap.get('pin');
    // const remotePin = remotePinParam ? parseInt(remotePinParam, 10) : null;
    this.remoteUrl.set(this.store.getRemoteUrl());
    if (this.store.getRemotePin()) {
      this.remotePin.set(this.store.getRemotePin());
      if (isPlatformBrowser(this.platformId)) {
        console.log('Subscribe to remote', this.store.getRemotePin());
        this.subscribeToMercure(this.store.getRemotePin());
      }
    } else {
      //this.remotePin.set(localPin);  // Set local pin if no remote
    }

    this.store.getPortfolioService().subscribe((lists) => {
      this.lists.set(lists);
    });

    // Start auto-looping every 5 seconds (adjust as needed)
    if (!slugUrl) {
      this.autoSlideInterval = setInterval(() => {
        this.next();
      }, 7000);
    } else {
      this.autoAttachmentInterval = setInterval(() => {
        this.nextAttachment();
      }, 5000);
    }
  }

  private subscribeToMercure(pin: number) {
    const topic = `https://remote.com/portfolio/${pin}`;
    console.log(`Subscribing to ${topic}`);
    const endpoint = `${environment.endpoints.hub}/.well-known/mercure?topic=${encodeURIComponent(topic)}`;
    //const endpoint2 = `https://myadmin.unicolo.red/.well-known/mercure?topic=${encodeURIComponent('https://remote.com/portfolio/4252')}`;
    console.log('endpoint', endpoint);
    this.sseSub = this.apiService.sseEvent(endpoint).subscribe({
      next: (event) => {
        console.log(event);
        const messageEvent = event as MessageEvent;
        console.info(`SSE message: type="${messageEvent.type}", data="${messageEvent.data}"`);
        const data = JSON.parse(messageEvent.data) as { action: string; slug: string };
        if (data.slug) {
          console.log('Received slug:', data.slug);
          //this.slug.set(data.slug);
          this.router.navigate(['/tv', data.slug]);
          this.slug.set(data.slug);
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

  // prev() {
  //   this.currentIndex.update((i) => (i - 1 + this.items().length) % this.items().length);
  // }
  //
  // goToSlide(index: number) {
  //   this.currentIndex.set(index);
  // }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    if (this.autoAttachmentInterval) {
      clearInterval(this.autoAttachmentInterval);
    }
    if (this.sseSub) {
      this.sseSub.unsubscribe();
    }
  }
}
