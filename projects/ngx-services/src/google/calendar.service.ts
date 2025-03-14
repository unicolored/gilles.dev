import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Observable, retry } from 'rxjs';
import { CalendarQuery } from 'shared-strapi';
import { WRKNG_API_ENDPOINT } from '../public-api';

@Injectable()
export class CalendarService {
  constructor(
    @Inject(WRKNG_API_ENDPOINT) private readonly wrkngApiEndpoint: string,
    private readonly http: HttpService,
  ) {}

  fetch<T>(calendarId: string, numberOfDays: number): Observable<T> {
    const wrkng = this.wrkngApiEndpoint.replace(/\/$/, '');
    const endpoint = `${wrkng}/calendar/list`;

    const body: Partial<CalendarQuery> = { calendarId, numberOfDays };
    // console.log('👋 CalendarService this.http.post', endpoint, body);

    return this.http.post<T>(endpoint, body).pipe(retry({ count: 1, delay: 500, resetOnSuccess: true }));
  }
}
