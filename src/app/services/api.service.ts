import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Post, PostCollection, PostList } from '../interfaces/post';
import { catchError, of, forkJoin, lastValueFrom, map, shareReplay } from 'rxjs';
import { PortfolioListSlug } from '../app.global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SseClient } from 'ngx-sse-client';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpService);
  private httpClient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private sseClient = inject(SseClient);

  public getList(slug: string): Observable<Partial<PostList>> {
    const emptyList = { slug: slug, description: '', items: [] };
    // Load static data during prerendering
    return this.http.get<Partial<PostList>[]>('/assets/portfolio-data.json').pipe(
      shareReplay(1),
      map((lists) => lists.find((list) => list.slug === slug) || emptyList),
    );
  }

  public getListApi(slug: string): Observable<Partial<PostList>> {
    const endpoint = environment.endpoints.api;
    return this.http.get<PostList>(`${endpoint}/post_lists/${slug}`).pipe(
      shareReplay(1),
      catchError((error) => {
        //console.error(`Error fetching list for slug ${slug}:`, error);
        console.error(`Error fetching list for slug ${slug}`, error);
        return of({ items: [] }); // Return empty items array on error
      }),
    );
  }

  public getItem(slug: string): Observable<Post> {
    const endpoint = environment.endpoints.api;
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    return this.httpClient.get<Post>(`${endpoint}/posts/${slug}`, { headers });
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
    const token = environment.topic.jwt;
    const endpoint = `${environment.endpoints.hub}/.well-known/mercure`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`, // Replace with your actual authorization token
    });

    const body = new HttpParams()
      .set('topic', `https://remote.com/portfolio/${pin}`)
      .set('data', `{"pin": ${pin},"action": "${action}","slug": "${slug}"}`);

    return this.httpClient.post(endpoint, body.toString(), { headers, responseType: 'text', withCredentials: true });
  }

  public sseEvent(endpoint: string) {
    const token = environment.topic.jwt; // Generate JWT
    endpoint = `${endpoint}`;
    console.log(endpoint);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'text/event-stream',
    });

    return new Observable((observer) => {
      console.log('SSE connection opened');
      const subscription = this.sseClient
        .stream(endpoint, { keepAlive: false, responseType: 'event' }, { headers, withCredentials: true })
        .subscribe({
          next: (e: unknown) => {
            const event = e as MessageEvent;
            if (event.type === 'error') {
              observer.error(event);
            } else {
              console.log('⭐️ yeah message');
              observer.next(event);
            }
          },
          error: (error) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          },
        });

      return () => {
        subscription.unsubscribe();
        console.log('SSE connection closed');
      };
    });
  }
}
