import { Component, inject } from '@angular/core';
import { SearchInput } from '../search-input/search-input';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MeilisearchService } from '../services/meilisearch.service';
import { Hits } from 'meilisearch';
import { MeiliAttachment, MeiliPost } from '../interfaces/post';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, SearchInput, NgOptimizedImage],
  templateUrl: `search.html`,
  styles: `
    .search-page {
      padding: 20px;
    }

    .search-results {
      margin-top: 20px;
    }
  `,
})
export class Search {
  searchResults: Hits<MeiliPost | MeiliAttachment> = [];
  isLoading: boolean = false;
  error: string | null = null;
  private meilisearchService = inject(MeilisearchService);
  portfolioService = inject(PortfolioService);

  performSearch(query: string) {
    if (!query.trim()) return;

    this.isLoading = true;
    this.error = null;

    this.meilisearchService
      .search(query)
      .then((response) => {
        // Assuming response.results is an array of search results
        const hits = response.results[0]?.hits as Hits<MeiliPost | MeiliAttachment>;
        this.searchResults = hits || [];
      })
      .catch((error) => {
        this.error = 'An error occurred while searching. Please try again.';
        console.error('Search error:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  onInputChange(query: string) {
    // Handle input changes (e.g., for live search or suggestions)
    console.log('Input changed:', query);
  }

  selectItem(slug?: string) {
    if (slug) {
      console.log('TODO: selectItem', slug);
    }
  }
}
