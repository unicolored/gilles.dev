import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { JekyllPost } from './jekyll.interface';

@Injectable()
export class UnicoloredService {
  private http = inject(HttpService);

  getAll(json: string) {
    const endpoint = `/api/${json}`;

    return this.http.get<JekyllPost[]>(endpoint);
  }
}
