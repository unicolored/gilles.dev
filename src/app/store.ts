import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { PortfolioService } from './services/portfolio.service';
import { Post } from './interfaces/post';

// Define the data type (replace with your actual data structure)
export interface YourDataType {
  id: number;
  name: string;
  // Add other fields as needed
}

@Injectable({
  providedIn: 'root', // Singleton service, persists cache app-wide
})
export class Store {
  private cachedData$?: Observable<Partial<Post>[]>; // Cache holder
  private http = inject(HttpClient);
  private portfolioService = inject(PortfolioService);

  getPortfolioService(): Observable<Partial<Post>[]> {
    // Return cached data if it exists, avoiding new HTTP request
    if (!this.cachedData$) {
      this.cachedData$ = this.portfolioService.getListsObs().pipe(
        shareReplay(1), // Cache the last emission indefinitely
        //tap(data => console.log('Data fetched and cached')) // Optional: Debugging
      );
    }
    return this.cachedData$;
  }

  // Optional: Clear cache to force a new HTTP request
  clearCache(): void {
    this.cachedData$ = undefined;
  }
}
