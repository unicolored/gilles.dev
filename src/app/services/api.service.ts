import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Post, PostCollection, PostList } from '../interfaces/post';
import { catchError, of, forkJoin, lastValueFrom, map } from 'rxjs';
import { PortfolioListSlug } from '../app.global';
import { HttpHeaders } from '@angular/common/http';
import { SseClient, SseErrorEvent } from 'ngx-sse-client';

@Injectable()
export class ApiService {
  private http = inject(HttpService);
  private platformId = inject(PLATFORM_ID);
  private sseClient = inject(SseClient);

  public getList(slug: string): Observable<Partial<PostList>> {
    const emptyList = { slug: slug, description: '', items: [] };
    // Load static data during prerendering
    return this.http
      .get<Partial<PostList>[]>('/assets/portfolio-data.json')
      .pipe(map((lists) => lists.find((list) => list.slug === slug) || emptyList));
  }

  public getListApi(slug: string): Observable<Partial<PostList>> {
    const endpoint = environment.endpoints.api;
    return this.http.get<PostList>(`${endpoint}/post_lists/${slug}`).pipe(
      catchError((error) => {
        //console.error(`Error fetching list for slug ${slug}:`, error);
        console.error(`Error fetching list for slug ${slug}`, error);
        return of({ items: [] }); // Return empty items array on error
      }),
    );
  }

  public getItem(slug: string): Observable<Post> {
    const endpoint = environment.endpoints.api;
    return this.http.get<Post>(`${endpoint}/posts/${slug}`);
  }

  public async loadPortfolioItemSlugs(): Promise<Record<string, string>[]> {
    const slugs: Record<string, string>[] = [];

    const portfolioSlugs = Object.values(PortfolioListSlug);
    const listRequests = portfolioSlugs.map((slug) => this.getList(slug));
    const combined$ = forkJoin(listRequests).pipe(
      map((lists) => {
        lists.forEach((list) => {
          list.items?.forEach((item) => {
            slugs.push({ slug: item.post.slug });
          });
        });
        return slugs;
      }),
    );

    // Convert observable to promise and await it
    const result = await lastValueFrom(combined$);
    return result ?? [];
  }

  public getBlogPosts(page: number, itemsPerPage: number, slug: string = 'blog'): Observable<PostCollection> {
    const endpoint = environment.endpoints.api;
    return this.http.get<PostCollection>(
      `${endpoint}/posts?page=${page}&itemsPerPage=${itemsPerPage}&mainCategory.slug=${slug}&status=publish`,
    );
  }

  public async loadPageNumbers(): Promise<Record<string, string>[]> {
    const itemsPerPage = 3;
    try {
      const response = await lastValueFrom(this.getBlogPosts(1, itemsPerPage));
      const totalPages = Math.ceil(response.totalItems / itemsPerPage);
      return Array.from({ length: totalPages }, (_, index) => ({
        page: `${index + 1}`,
      }));
    } catch (error) {
      console.error('Error fetching total pages for blog:', error);
      return [{ page: '1' }]; // Fallback to page 1 in case of error
    }
  }

  public async loadBlogPostSlugs(): Promise<{ slug: string }[]> {
    const itemsPerPage = 3;
    const slugs: { slug: string }[] = [];
    try {
      // Fetch first page to get totalItems
      const firstResponse = await lastValueFrom(this.getBlogPosts(1, itemsPerPage));
      const totalPages = Math.ceil(firstResponse.totalItems / itemsPerPage);
      slugs.push(...firstResponse.member.map((post) => ({ slug: post.slug })));

      // Fetch remaining pages if necessary
      if (totalPages > 1) {
        const pageRequests = Array.from({ length: totalPages - 1 }, (_, index) =>
          this.getBlogPosts(index + 2, itemsPerPage),
        );
        const responses = await lastValueFrom(forkJoin(pageRequests));
        responses.forEach((response) => {
          slugs.push(...response.member.map((post) => ({ slug: post.slug })));
        });
      }
      return slugs;
    } catch (error) {
      console.error('Error fetching blog post slugs:', error);
      return [{ slug: 'default' }]; // Fallback to a default slug
    }
  }

  connectRemote(pin: number, action: string = 'connect', data?: string): Observable<unknown> {
    const backendUrl = environment.endpoints.backend;
    return this.http.post(`${backendUrl}/publish`, { pin, action, data });
  }

  public async sseEvent(endpoint: string) {
    // If private/restricted: Generate JWT and set Bearer token (see below for generateJwt function)
    const jwt = await this.generateJwt([environment.topic.remote]); // Or '*' for all topics
    console.log(jwt);
    const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${jwt}`);
    console.log(headers);

    const requestOptions = { withCredentials: true };
    this.sseClient
      .stream(endpoint, { keepAlive: false, reconnectionDelay: 1_000, responseType: 'event' }, requestOptions)
      .subscribe((event) => {
        console.log(event);
        if (event.type === 'error') {
          const errorEvent = event as SseErrorEvent;
          console.error(errorEvent.error, errorEvent.message);
        } else {
          const messageEvent = event as MessageEvent;
          console.info(`SSE request with type "${messageEvent.type}" and data "${messageEvent.data}"`);
        }
      });
  }

  // Optional: JWT generation for private subscriptions (HS256 using Web Crypto API)
  private async generateJwt(subscribeTopics: string[]): Promise<string> {
    const encoder = new TextEncoder();

    const header = { alg: 'HS256', typ: 'JWT' };
    const payload = {
      mercure: { subscribe: subscribeTopics }, // e.g., ['https://example.com/books/1'] or ['*']
    };

    const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

    const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(environment.topic.token),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign'],
    );

    const signature = await crypto.subtle.sign('HMAC', key, data);
    const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
  }
}
