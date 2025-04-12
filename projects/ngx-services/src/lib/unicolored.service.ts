import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { JekyllPost } from './jekyll.interface';
import { map } from 'rxjs';

@Injectable()
export class UnicoloredService {
  private http = inject(HttpService);

  getAll(json: string) {
    // const category = params.category ? `&category=${params.category}` : '';
    const endpoint = `/api/${json}`;

    console.log('👋 UnicoloredService endpoint', endpoint);
    console.log('👋 UnicoloredService getAll(json: string)', json);

    return this.http.get<JekyllPost[]>(endpoint).pipe(
      map((jp) =>
        jp.map((m) => {
          // return a copy of without m.previous and m.next
          const { previous, next, ...rest } = m;
          return rest as JekyllPost;
        }),
      ),
    );
  }
}
