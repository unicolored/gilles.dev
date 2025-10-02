import { inject, Injectable } from '@angular/core';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Post, PostList } from '../interfaces/post';

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
    const lists = ['gilles-dev-development', 'gilles-dev-visual-identity'];
    const slugs: Record<string, string>[] = [];
    lists.forEach((l: string) => {
      this.getList(l).subscribe(list => {
        list.items.forEach(i => {
          slugs.push({ slug: i.post.slug });
        });
      });
    });
    return slugs;
  }
}
