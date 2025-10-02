import { inject, Injectable } from '@angular/core';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PostList } from '../interfaces/post';

@Injectable()
export class ApiService {
  private http = inject(HttpService);

  public getList(slug: string): Observable<PostList> {
    const endpoint = environment.endpoints.api;
    return this.http.get<PostList>(`${endpoint}/post_lists/${slug}`);
  }
}
