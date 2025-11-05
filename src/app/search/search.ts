import { AfterViewInit, Component, computed, inject, signal, viewChild } from '@angular/core';
import { SearchInput } from '../search-input/search-input';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MeilisearchService } from '../services/meilisearch.service';
import { Hits } from 'meilisearch';
import { PortfolioService } from '../services/portfolio.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MeiliAttachment, MeiliPost } from '../interfaces/meili-post';

@Component({
  selector: 'app-search',
  imports: [CommonModule, SearchInput, NgOptimizedImage, RouterModule],
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
export class Search implements AfterViewInit {
  searchResults = signal<Hits<MeiliPost | MeiliAttachment>>([]);
  searchResultsFormatted = computed(() => {
    const results = this.searchResults();

    return results.map((r) => {
      console.log(r.cloudinaryId);
      r.cloudinaryId = 'cloud-coelis/prod/' + r.cloudinaryId;
      if (r.cloudinaryId.includes('Videos/')) {
        r.cloudinaryId = 'video/upload/' + r.cloudinaryId.replace('mp4', 'jpg');
      }

      return r;
    });
  });
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);
  private meilisearchService = inject(MeilisearchService);
  portfolioService = inject(PortfolioService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  searchInput = viewChild.required<SearchInput>(SearchInput);

  ngAfterViewInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const query = params['query'];
      if (query) {
        this.searchInput().searchQuery = query;
        this.doSearch(query);
      } else {
        this.searchInput().searchQuery = '';
        this.searchResults.set([]);
      }
    });
  }

  performSearch(query: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { query },
      queryParamsHandling: 'merge',
    });
  }

  private doSearch(query: string) {
    this.searchResults.set([]);
    console.log('doSearch query', query);
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

  // onInputChange(query: string) {
  //   // Handle input changes (e.g., for live search or suggestions)
  //   console.log('Input changed:', query);
  // }

  selectItem(slug?: string) {
    if (slug) {
      console.log('TODO: selectItem', slug);
    }
  }
}
