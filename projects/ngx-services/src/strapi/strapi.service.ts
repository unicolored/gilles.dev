import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Observable } from 'rxjs';
import { StrapiResponse } from 'shared-strapi';
import { StrapiContentType } from 'js-interface';
import { WRKNG_API_ENDPOINT } from '../public-api';

@Injectable()
export class StrapiService {
  constructor(
    @Inject(WRKNG_API_ENDPOINT) private readonly wrkngApiEndpoint: string,
    private readonly http: HttpService,
  ) {}

  fetch<T>(contentType: StrapiContentType): Observable<StrapiResponse<T>> {
    const wrkng = this.wrkngApiEndpoint.replace(/\/$/, '');
    const endpoint = `${wrkng}/strapi/${contentType}`;

    console.log('👋 StrapiService endpoint', endpoint);
    console.log('👋 StrapiService fetch(contentType)', contentType);

    return this.http.post<StrapiResponse<T>>(endpoint);
  }
}
