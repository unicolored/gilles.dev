import { inject, Injectable } from '@angular/core';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Post, PostList } from '../interfaces/post';
import { forkJoin, lastValueFrom, map } from 'rxjs';

@Injectable()
export class ApiService {
  private http = inject(HttpService);

  public getList(slug: string): Observable<PostList> {
    const endpoint = environment.endpoints.api;
    return this.http.get<PostList>(`${endpoint}/post_lists/${slug}`);
  }

  public getItem(slug: string): Observable<Post> {
    const endpoint = environment.endpoints.api;
    return this.http.get<Post>(`${endpoint}/posts/${slug}`);
  }

  public async loadPortfolioItemSlugs(): Promise<Record<string, string>[]> {
    const slugs: Record<string, string>[] = [];

    // Combine the two observables using forkJoin
    const combined$ = forkJoin([
      this.getList('gilles-dev-development'),
      this.getList('gilles-dev-visual-identity'),
    ]).pipe(
      map(([list1, list2]) => {
        // Process first list
        list1.items.forEach((i) => {
          slugs.push({ slug: i.post.slug });
        });
        // Process second list
        list2.items.forEach((i) => {
          slugs.push({ slug: i.post.slug });
        });
        return slugs;
      }),
    );

    // Convert observable to promise and await it
    const result = await lastValueFrom(combined$);
    console.log('slugs completed', result);
    return result ?? [];
  }
}
