import { inject, Inject, Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import { lastValueFrom, Observable, retry, shareReplay, take } from 'rxjs';
import { MYADMIN_API_ENDPOINT, PrayerMember } from '../public-api';
import { MyAdminResponse } from './myadmin.interface';

@Injectable()
export class MyAdminService {
  private readonly http: HttpService = inject(HttpService);

  constructor(@Inject(MYADMIN_API_ENDPOINT) private readonly myadminApiEndpoint: string) {}

  fetch<T>(index: string, query: string | null = null): Observable<MyAdminResponse<T>> {
    const myadmin = this.myadminApiEndpoint.replace(/\/$/, '');
    const endpoint = `${myadmin}/api/prayers`;

    return this.http
      .get<MyAdminResponse<T>>(endpoint)
      .pipe(shareReplay(), take(1), retry({ count: 1, delay: 500, resetOnSuccess: true }));
  }

  one<T>(index: string, id: string): Observable<PrayerMember> {
    const myadmin = this.myadminApiEndpoint.replace(/\/$/, '');
    const endpoint = `${myadmin}/api/prayers/${id}`;

    // const body: Partial<MeiliSearchQuery> = { id: id, locale: 'fr', index };
    console.log('👋 MyAdminService one this.http.get', endpoint);

    return this.http.get<PrayerMember>(endpoint).pipe(retry({ count: 1, delay: 500, resetOnSuccess: true }));
  }

  async getSlugs() {
    const myadmin = this.myadminApiEndpoint.replace(/\/$/, '');
    // const endpoint = `${myadmin}/admin/prayers/slugs`;
    const endpoint = `https://myadmin.wrkng.io/admin/prayers/slugs`;

    // const body: Partial<MeiliSearchQuery> = { q: query, locale: 'fr', index };
    console.log('👋 MyAdminService fetch this.http.get', endpoint);

    const request$ = this.http
      .get<{ slugs: string[]; error?: null }>(endpoint)
      .pipe(take(1), retry({ count: 1, delay: 500, resetOnSuccess: true }));

    return await lastValueFrom<{ slugs: string[]; error?: null }>(request$);
  }
}
