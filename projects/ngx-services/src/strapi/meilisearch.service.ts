import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Observable, retry } from 'rxjs';
import { MeiliSearchQuery } from 'shared-strapi';
import { MEILISEARCH_ENDPOINT, WRKNG_API_ENDPOINT } from '../public-api';
import { Hit, SearchResponse } from 'meilisearch';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MeiliSearchService {
  constructor(
    @Inject(WRKNG_API_ENDPOINT) private readonly wrkngApiEndpoint: string,
    @Inject(MEILISEARCH_ENDPOINT) private readonly meilisearchEndpoint: string,
    private readonly http: HttpService,
  ) {}

  fetch<T>(
    index: string,
    query: string | null = null,
    headers: HttpHeaders = new HttpHeaders(),
  ): Observable<SearchResponse<T>> {
    const wrkng = this.meilisearchEndpoint.replace(/\/$/, '');
    const endpoint = `${wrkng}/indexes/${index}/search`;

    const body: Partial<MeiliSearchQuery> = {
      q: query,
      // locale: 'fr',
      // index,
      attributesToHighlight: ['name', 'title', 'subtitle', 'shortInline', 'author_name'],
    };

    console.log('👋 MeiliSearchService this.http.post', endpoint, body);

    return this.http
      .post<SearchResponse<T>>(endpoint, body, headers)
      .pipe(retry({ count: 1, delay: 500, resetOnSuccess: true }));
  }

  one<T>(index: string, id: string): Observable<Hit<T>> {
    const wrkng = this.wrkngApiEndpoint.replace(/\/$/, '');
    const endpoint = `${wrkng}/meilisearch/document`;

    const body: Partial<MeiliSearchQuery> = { id: id, locale: 'fr', index };
    console.log('👋 MeiliSearchService this.http.post', endpoint, body);

    return this.http.post<Hit<T>>(endpoint, body).pipe(retry({ count: 1, delay: 500, resetOnSuccess: true }));
  }
}
