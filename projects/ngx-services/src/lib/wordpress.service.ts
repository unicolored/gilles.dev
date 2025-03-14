import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { catchError, first, Observable, shareReplay } from 'rxjs';
import { WordpressPublicRequestParams, WordpressSelfRequestParams } from 'shared-wordpress';
import { HttpErrorResponse } from '@angular/common/http';
import { WordpressSelfSinglePostMedia } from './wordpress.self.media.interface';
import { WordpressSelfSinglePost } from './wordpress.self.interface';
import { WordpressPublicPosts, WordpressPublicSinglePost } from './wordpress.interface';

@Injectable()
export class WordpressService {
  private wordpressPublicApi = `https://public-api.wordpress.com/rest/v1.1/sites`;

  private http = inject(HttpService);

  fetchPublicSinglePost(site: string, postId: number | string): Observable<WordpressPublicSinglePost> {
    const isPostIdNumber = parseFloat(postId as string) > 0;
    const postIdParam = isPostIdNumber ? postId : `slug:${postId}`;
    const endpoint = `${this.wordpressPublicApi}/${site}/posts/${postIdParam}`;

    console.log('👋 WordpressService endpoint', endpoint);
    console.log('👋 WordpressService fetchPublicSinglePost(site: string, postId: number | string)', site, postId);

    return this.http.get<WordpressPublicSinglePost>(endpoint);
  }

  fetchPublicPosts(site: string, params: WordpressPublicRequestParams) {
    const category = params.category ? `&category=${params.category}` : '';
    const order = params.order ? `&order=${params.order}` : '';
    const number = params.limit ? `&number=${params.limit}` : '';
    const endpoint = `${this.wordpressPublicApi}/${site}/posts/?pretty=false${number}${order}${category}`;

    console.log('👋 WordpressService endpoint', endpoint);
    console.log('👋 WordpressService fetchPublicPosts(site: string, params: {})', site, params);

    return this.http.get<WordpressPublicPosts>(endpoint);
  }

  fetchSinglePost(postId: number, wpUrl: string): Observable<WordpressSelfSinglePost> {
    const endpoint = `${wpUrl}/wp-json/wp/v2/posts/${postId}`;

    console.log('👋 WordpressService endpoint', endpoint);
    console.log('👋 WordpressService fetchSinglePost(postId: number, wpUrl: string)', postId);

    return this.http.get<WordpressSelfSinglePost>(endpoint);
  }

  fetchSinglePostMedias(postId: number, wpUrl: string): Observable<WordpressSelfSinglePostMedia[]> {
    const endpoint = `${wpUrl}/wp-json/wp/v2/media?parent=${postId}`;

    console.log('👋 WordpressService endpoint', endpoint);
    console.log('👋 WordpressService fetchSinglePost(postId: number, wpUrl: string)', postId);

    return this.http.get<WordpressSelfSinglePostMedia[]>(endpoint).pipe(
      first(),
      shareReplay(),
      catchError((err) => {
        const error = err as HttpErrorResponse;
        console.error('🛑 ERROR loadPageService', error.name);
        throw new Error(`🛑 ERROR loadPageService ${error.name}`);
      }),
    );
  }

  fetchPosts(params: WordpressSelfRequestParams, wpUrl: string) {
    const categories = params.categories ? `&categories=${params.categories}` : '';
    const order = params.order ? `&order=${params.order}` : '';
    const number = params.limit ? `&number=${params.limit}` : '';
    const endpoint = `${wpUrl}/wp-json/wp/v2/posts?_embed&pretty=false${number}${order}${categories}`;

    console.log('👋 WordpressService endpoint', endpoint);
    console.log('👋 WordpressService fetchPosts(params: {}, wpUrl: string)', params, wpUrl);

    return this.http.get<WordpressSelfSinglePost[]>(endpoint);
  }
}
