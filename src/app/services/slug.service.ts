import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PostList } from '../interfaces/post';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SlugService {
  private http = inject(HttpClient);

  public getList(slug: string): Observable<PostList> {
    const endpoint = environment.endpoints.api;
    return this.http.get<PostList>(`${endpoint}/post_lists/${slug}`);
  }

  public async loadPortfolioItemSlugs(): Promise<Record<string, string>[]> {
    // const lists = ['gilles-dev-development', 'gilles-dev-visual-identity'];
    const slugs: Record<string, string>[] = [];
    console.log('empty slugs', slugs);
    this.getList('gilles-dev-development').subscribe((list) => {
      list.items.forEach((i) => {
        slugs.push({ slug: i.post.slug });
      });
    });
    this.getList('gilles-dev-visual-identity').subscribe((list) => {
      list.items.forEach((i) => {
        slugs.push({ slug: i.post.slug });
      });
    });
    console.log('slugs completed', slugs);
    return slugs;
  }
}
