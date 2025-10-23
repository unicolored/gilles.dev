import { Component, computed, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { Post, PostList } from '../interfaces/post';
import { PortfolioService } from '../services/portfolio.service';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-tv-component',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: `tv.html`,
})
export class TvComponent implements OnInit, OnDestroy {
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
  currentIndex = signal(0);
  private autoSlideInterval!: NodeJS.Timeout;
  public readonly portfolioService = inject(PortfolioService);

  async ngOnInit(): Promise<void> {
    const lists = await this.portfolioService.getLists();
    if (lists) {
      this.lists.set(lists);
    }
    // Start auto-looping every 5 seconds (adjust as needed)
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
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
