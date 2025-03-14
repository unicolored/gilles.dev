import { inject, Injectable } from '@angular/core';
import { WordpressSelfSinglePost, WordpressSelfSinglePostMedia, WordpressService } from 'ngx-services';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppService {
  private readonly wordpressService = inject(WordpressService);

  blogUrl = 'https://www.wrkng.io'; //'https://www.gilleshoarau.com';

  getPortfolioPostMedias(id: number): Observable<WordpressSelfSinglePostMedia[]> {
    return this.wordpressService.fetchSinglePostMedias(id, this.blogUrl).pipe(
      map((res) => {
        if (!res) {
          throw new Error(`Invalid response from the App Service`);
        }

        return res;
      }),
    );
  }

  getPortfolioPosts(category: string): Observable<WordpressSelfSinglePost[]> {
    return this.wordpressService.fetchPosts({ categories: category }, this.blogUrl).pipe(
      shareReplay(),
      catchError((err) => {
        const error = err as HttpErrorResponse;
        console.error('🛑 ERROR loadPageService', error.name);
        throw new Error(`🛑 ERROR loadPageService ${error.name}`);
      }),

      map((res) => {
        if (!res) {
          throw new Error(`Invalid response from the App Service`);
        }

        return res;
      }),
    );
  }
}
