import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, retry, shareReplay, throwError } from 'rxjs';
import { handleError } from 'js-helper';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, headers: HttpHeaders | {} = {}): Observable<T> {
    return this.http.get<T>(`${endpoint}`, { headers: headers }).pipe(
      retry({ count: 2, delay: 1500, resetOnSuccess: true }),
      catchError((error) => {
        handleError(error);

        const err = new Error(`Code: ${error.status}-INT`);

        console.log('catchError err');
        // if (...) {
        //   this.error$.next(err);
        // }
        // Return an observable with a user-facing error message.
        return throwError(() => err);
      }),
    );
  }

  post<T>(endpoint: string, body: unknown = {}, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    console.log('💜 headers', headers);
    return this.http.post<T>(`${endpoint}`, body, { headers: headers }).pipe(
      shareReplay(),
      retry({ count: 1, delay: 500, resetOnSuccess: true }),
      /*catchError((error) => {
        handleError(error);

        const err = new Error(`Code: ${error.status}-INT`);

        console.log('catchError err');
        // if (...) {
        //   this.error$.next(err);
        // }
        // Return an observable with a user-facing error message.
        return throwError(() => err);
      })*/
    );
  }
}
