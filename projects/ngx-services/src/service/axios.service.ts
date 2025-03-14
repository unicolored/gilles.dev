import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import axios from 'axios';

@Injectable()
export class AxiosService {
  get<T>(endpoint: string): Observable<T> {
    return from(axios.get<T>(endpoint)).pipe(map((res) => res.data));
  }

  post<T>(endpoint: string, body: unknown = {}): Observable<T> {
    return from(axios.post<T>(endpoint, body)).pipe(map((res) => res.data));
  }
}
