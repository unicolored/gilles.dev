import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Post, PostCollection, PostList } from '../interfaces/post';
import { catchError, of, forkJoin, lastValueFrom, map } from 'rxjs';
import { PortfolioListSlug } from '../app.global';
import { HttpHeaders } from '@angular/common/http';
import { SseClient } from 'ngx-sse-client';

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
      return [{ slug: 'default' }];
    }
  }

  async connectRemote(pin: number, action: string = 'connect', slug?: string): Promise<Observable<unknown>> {
    const token = await this.generateSubscriberJwt(); // Generate JWT
    const endpoint = `${environment.endpoints.backend}/publish`;
    const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('Content-Type', 'application/json');
    console.log(endpoint, pin, action, slug);
    return this.http.post(endpoint, { pin, action, slug }, headers);
  }

  public sseEvent(endpoint: string) {
    const token = environment.topic.jwt; // Generate JWT
    endpoint = `${endpoint}&authorization=${token}`;
    //endpoint = `${endpoint}`;
    console.log(endpoint);
    return new Observable((observer) => {
      const eventSource = new EventSource(endpoint, { withCredentials: true });

      eventSource.onmessage = (event: MessageEvent) => {
        console.log('⭐️ yeah message');
        observer.next(event);
      };

      eventSource.onerror = (error: Event) => {
        observer.error(error);
      };

      eventSource.onopen = () => {
        console.log('SSE connection opened');
      };

      return () => {
        eventSource.close();
        console.log('SSE connection closed');
      };
    });
  }

  // Helper: URL-safe Base64 encoding (without padding)
  private base64url(source: Uint8Array): string {
    let encoded = btoa(String.fromCharCode(...source));
    encoded = encoded.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    return encoded;
  }

  // Generate subscriber JWT using HS256 and Web Crypto API (async)
  private async generateSubscriberJwt(): Promise<string> {
    // const secret = environment.topic.secret;  // Your shared subscriber key
    // const header = { alg: 'HS256', typ: 'JWT' };
    // const payload = { mercure: { publish: ['*'], subscribe: ['*'] } };  // Or ['https://remote.com/portfolio/*'] for specific topics
    //
    // const encodedHeader = this.base64url(new TextEncoder().encode(JSON.stringify(header)));
    // const encodedPayload = this.base64url(new TextEncoder().encode(JSON.stringify(payload)));
    //
    // // HMAC-SHA256 signature
    // const encoder = new TextEncoder();
    // const keyData = encoder.encode(secret);
    // const message = `${encodedHeader}.${encodedPayload}`;
    // const data = encoder.encode(message);
    //
    // const key = await crypto.subtle.importKey(
    //   'raw',
    //   keyData,
    //   { name: 'HMAC', hash: 'SHA-256' },
    //   false,
    //   ['sign']
    // );
    //
    // const signature = await crypto.subtle.sign('HMAC', key, data);
    // const encodedSignature = this.base64url(new Uint8Array(signature));
    //
    // const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
    console.log('jwt env', environment.topic.jwt);
    return environment.topic.jwt;
  }

  private getSubscriberJwt(): Observable<string> {
    const endpoint = `${environment.endpoints.backend}/mercure-jwt`; // Matches your Symfony route
    return this.http.get<{ jwt: string }>(endpoint).pipe(map((response) => response.jwt));
  }
}
