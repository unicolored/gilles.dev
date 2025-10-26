import { Component, inject, signal } from '@angular/core';
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
  searchResults = signal<Hits<MeiliPost | MeiliAttachment>>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);
  private meilisearchService = inject(MeilisearchService);
  portfolioService = inject(PortfolioService);

  performSearch(query: string) {
    this.searchResults.set([]);
    console.log('performSearch query', query);
    if (!query.trim()) return;

    this.isLoading.set(true);
    this.error.set(null);

    this.meilisearchService
      .search(query)
      .then((response) => {
        // Assuming response.results is an array of search results
        //const hits = response.results[0]?.hits as Hits<MeiliPost | MeiliAttachment>;
        const hits = response.hits as Hits<MeiliPost | MeiliAttachment>;

        const cloudinaryPostIds = hits
          .map((h) => {
            return h.type === 'post' ? h.cloudinaryId : null;
          })
          .filter((h) => h);
        console.log(cloudinaryPostIds);

        //const filtered = hits.filter(h => h.type === 'post' && !cloudinaryPostIds.includes(h.cloudinaryId));
        const filtered: Hits<MeiliPost | MeiliAttachment> = [];
        hits.forEach((h) => {
          if (h.type === 'post') {
            filtered.push(h);
          } else if (!cloudinaryPostIds.includes(h.cloudinaryId)) {
            filtered.push(h);
          }
        });

        console.log(filtered);
        if (filtered) {
          console.log('set...');
          this.searchResults.set(filtered);
        }
      })
      .catch((error) => {
        this.error.set('An error occurred while searching. Please try again.');
        console.error('Search error:', error);
      })
      .finally(() => {
        this.isLoading.set(false);
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
