import { isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { PortfolioListSlug } from '../app.global';
import { ApiService } from './api.service';
import { PostList } from '../interfaces/api-postList';

@Injectable()
export class PortfolioService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly apiService = inject(ApiService);

  getListsObs(): Observable<Partial<PostList>[]> {
    const portfolioSlugs = Object.values(PortfolioListSlug);
    let listRequests;
    if (isPlatformServer(this.platformId)) {
      listRequests = portfolioSlugs.map((slug) => this.apiService.getList(slug));
    } else {
      listRequests = portfolioSlugs.map((slug) => this.apiService.getListApi(slug));
    }
    return forkJoin(listRequests);
  }
}
