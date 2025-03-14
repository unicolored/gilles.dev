import { inject, Injectable } from '@angular/core';
import { WordpressService } from 'ngx-services';
import { WordpressSelfSinglePost } from 'js-interface';
import { catchError, map, Observable, shareReplay } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { WordpressSelfSinglePostMedia } from 'js-interface';

@Injectable()
export class AppService {
  private readonly wordpressService = inject(WordpressService);

  getPortfolioPostMedias(id: number): Observable<WordpressSelfSinglePostMedia[]> {
    return this.wordpressService.fetchSinglePostMedias(id, 'https://www.gilleshoarau.com').pipe(
      map((res) => {
        if (!res) {
          throw new Error(`Invalid response from the App Service`);
        }

        return res;
      }),
    );
  }

  getPortfolioPosts(category: string): Observable<WordpressSelfSinglePost[]> {
    return this.wordpressService.fetchPosts({ categories: category }, 'https://www.gilleshoarau.com').pipe(
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
