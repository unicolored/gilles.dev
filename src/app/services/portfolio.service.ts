import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { forkJoin, lastValueFrom } from 'rxjs';
import { PortfolioListSlug } from '../app.global';
import { ApiService } from './api.service';

@Injectable()
export class PortfolioService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly apiService = inject(ApiService);

  async getLists() {
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

    return lists.filter((l) => l.items?.length && l.items.length > 0);
  }

  stripTags(text: string): string {
    if (isPlatformBrowser(this.platformId)) {
      const doc = new DOMParser().parseFromString(text, 'text/html');
      return doc.body.textContent || '';
    } else {
      return text.replace(/<[^>]*>/g, '').trim();
    }
  }
}
