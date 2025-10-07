import { ResolveFn } from '@angular/router';
import { inject, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { forkJoin, lastValueFrom } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { PortfolioListSlug } from '../../app.global';
import { PostList } from '../../interfaces/post';
import { isPlatformBrowser } from '@angular/common';

// Create a unique key for this data (use a descriptive string)
const LISTS_STATE_KEY = makeStateKey<Partial<PostList>[]>('portfolioLists');

export const portfolioResolver: ResolveFn<Partial<PostList>[]> = (route, state) => {
  const apiService = inject(ApiService);
  const transferState = inject(TransferState);
  const platformId = inject(PLATFORM_ID);

  // Check if data is already in TransferState (will be true on client if prerendered)
  if (transferState.hasKey(LISTS_STATE_KEY)) {
    const lists = transferState.get(LISTS_STATE_KEY, []); // Get cached data
    // transferState.remove(LISTS_STATE_KEY);  // Optional: Clean up after use
    return lists; // Return immediately without fetching
  }

  const portfolioSlugs = Object.values(PortfolioListSlug);
  const listRequests = portfolioSlugs.map((slug) => apiService.getList(slug));
  const combined$ = forkJoin(listRequests);

  // Fetch the data
  return lastValueFrom(combined$).then((lists) => {
    // If on server/prerender, store in TransferState for client transfer
    if (!isPlatformBrowser(platformId)) {
      transferState.set(LISTS_STATE_KEY, lists);
    }
    return lists;
  });
};
