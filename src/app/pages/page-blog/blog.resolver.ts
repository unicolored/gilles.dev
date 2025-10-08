import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { PostCollection } from '../../interfaces/post';

export const blogResolver: ResolveFn<Partial<PostCollection>> = (route) => {
  const apiService = inject(ApiService);
  const transferState = inject(TransferState);

  // Get page from params, default to 1
  const pageStr = route.paramMap.get('page') || '1';
  const page = parseInt(pageStr, 10);
  const effectivePage = isNaN(page) || page < 1 ? 1 : page;
  const itemsPerPage = 3; // Hardcoded as in your component

  // Per-page unique key for TransferState
  const key = makeStateKey<PostCollection>(`blogPostsPage${effectivePage}`);

  // If cached/transferred, return immediately
  if (transferState.hasKey(key)) {
    const defaultValue: Partial<PostCollection> = { member: [], totalItems: 0 };
    const data = transferState.get(key, defaultValue);
    //const data = transferState.get(key, null);
    return data;
  }

  // Fetch data
  return lastValueFrom(apiService.getBlogPosts(effectivePage, itemsPerPage)).then((data) => {
    // Set in TransferState for client transfer (on prerender) or caching (on client)
    transferState.set(key, data);
    return data;
  });
};
