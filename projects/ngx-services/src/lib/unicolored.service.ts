import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { JekyllPost } from './jekyll.interface';

@Injectable()
export class UnicoloredService {
  private http = inject(HttpService);

  getAll(json: string) {
    // const category = params.category ? `&category=${params.category}` : '';
    const endpoint = `/api/${json}`;

    console.log('👋 UnicoloredService endpoint', endpoint);
    console.log('👋 UnicoloredService getAll(json: string)', json);

    return this.http.get<JekyllPost[]>(endpoint);
  }
}
