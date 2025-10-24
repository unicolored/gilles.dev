import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { PostList, Post } from '../interfaces/post';
import { PortfolioService } from '../services/portfolio.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-remote',
  imports: [NgOptimizedImage],
  templateUrl: `remote.component.html`,
})
export class RemoteComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  remotePin = signal<number | null>(null); // Use number for pin
  isRemoteActive = computed<boolean>(() => !!this.remotePin());
  private readonly apiService = inject(ApiService);
  public readonly portfolioService = inject(PortfolioService);
  lists = signal<Partial<PostList>[]>([]);
  items = computed<Post[]>(() => {
    const lists = this.lists();
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
    return items;
  });

  async ngOnInit() {
    const lists = await this.portfolioService.getLists();
    if (lists) {
      this.lists.set(lists);
    }

    const remotePinParam = this.route.snapshot.paramMap.get('pin');
    const remotePin = remotePinParam ? parseInt(remotePinParam, 10) : null;
    if (remotePin && !isNaN(remotePin)) {
      this.remotePin.set(remotePin);
      const obs$ = await this.apiService.connectRemote(remotePin, 'connect');
      obs$.subscribe({
        next: () => console.log('Remote connected'),
        error: (err) => console.error('Connect error:', err),
      });
    } else {
      //this.remotePin.set(localPin);  // Set local pin if no remote
    }
  }

  async selectSlug(slug: string) {
    const pin = this.remotePin();
    console.log(pin);
    if (pin) {
      const obs$ = await this.apiService.connectRemote(pin, 'selectItem', slug);
      obs$.subscribe({
        next: () => console.log('Item selected'),
        error: (err) => console.error('Connect error:', err),
      });
    }
  }
}
