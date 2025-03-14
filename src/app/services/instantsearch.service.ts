import { inject, Injectable, signal } from '@angular/core';
import { liteClient as algoliasearch, SearchQuery, SearchResponse } from 'algoliasearch/lite';
import InstantSearch from 'instantsearch.js/es/lib/InstantSearch';
import type { IndexWidget, UiState, Widget } from 'instantsearch.js';
import { Router } from '@angular/router';
import history from 'instantsearch.js/es/lib/routers/history';
import { SearchIndexes } from './search.interface';
import { BaseRecommendSearchParams, SearchPagination } from 'algoliasearch/dist/lite/node';

const searchClient = algoliasearch('SUXVC6B2YE', 'c6b499da6c9903652a2b4cc7a281d7b9');

@Injectable({
  providedIn: 'root',
})
export class InstantSearchService {
  public instantSearchInstance!: InstantSearch;
  public instantSearchMediasInstance!: InstantSearch;
  private router = inject(Router);

  public query = signal('');

  constructor() {
    this.instantSearchInstance = new InstantSearch({
      searchClient,
      indexName: SearchIndexes.posts,
      future: { preserveSharedStateOnUnmount: true },
      stalledSearchDelay: 2000,
      routing: {
        router: history({
          getLocation: () => {
            if (typeof window === 'undefined') {
              // no other way to get this in constructor
              return new URL(this.router['location']._locationStrategy._platformLocation.href) as unknown as Location;
            }
            return window.location;
          },
        }),
      },
    });
    this.instantSearchMediasInstance = new InstantSearch({
      searchClient,
      indexName: SearchIndexes.medias,
      future: { preserveSharedStateOnUnmount: true },
      stalledSearchDelay: 2000,
      routing: {
        router: history({
          getLocation: () => {
            if (typeof window === 'undefined') {
              // no other way to get this in constructor
              return new URL(this.router['location']._locationStrategy._platformLocation.href) as unknown as Location;
            }
            return window.location;
          },
        }),
      },
    });
  }

  start() {
    this.instantSearchInstance.start();
    this.instantSearchMediasInstance.start();
  }

  addWidgets(widgets: Array<IndexWidget | Widget>) {
    this.instantSearchInstance.addWidgets(widgets);
    this.instantSearchMediasInstance.addWidgets(widgets);
  }

  removeWidgets(widgets: Array<IndexWidget | Widget>) {
    this.instantSearchInstance.removeWidgets(widgets);
    this.instantSearchMediasInstance.removeWidgets(widgets);
  }

  createInstance(indexName: SearchIndexes): InstantSearch<UiState, UiState> {
    return new InstantSearch({
      searchClient,
      indexName: indexName,
      future: { preserveSharedStateOnUnmount: true },
      stalledSearchDelay: 2000,
    });
  }

  async requests<T>(
    facetFilters: string | string[] | string[][] = [],
    objectId: string | null = null,
  ): Promise<{ results: SearchResponse<T>[] }> {
    const indexPosts: SearchQuery & SearchPagination & BaseRecommendSearchParams = {
      indexName: SearchIndexes.posts,
      hitsPerPage: 33,
      // attributesToRetrieve: ['post_id', 'post_title', 'images']
    };

    if (objectId) {
      // indexPosts.facetFilters = facetFilters;
      indexPosts.filters = `objectID:${objectId}`;
      // indexPosts.filters = 'post_id:7453';
    } else if (facetFilters) {
      // indexPosts.facetFilters = facetFilters;
      indexPosts.facetFilters = facetFilters;
    }

    return await searchClient.searchForHits({
      // requests: [{ indexName: SearchIndexes.posts, hitsPerPage:6, facets: ['taxonomies.category']  }, { indexName: SearchIndexes.medias }],
      // requests: [{ indexName: SearchIndexes.posts, hitsPerPage:6, facets: ['taxonomies.category']  }],
      // requests: [{ indexName: SearchIndexes.posts, hitsPerPage:6, facetQuery: '', facet: 'design', type: 'facet'  }],
      // requests: [{ indexName: SearchIndexes.posts, facetFilters  }],
      // requests: [indexPosts],
      requests: [indexPosts],
    });
  }
}
