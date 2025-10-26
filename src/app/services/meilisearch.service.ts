import { Injectable } from '@angular/core';
import { Meilisearch } from 'meilisearch';
import { environment } from '../../environments/environment';

const client = new Meilisearch({
  host: environment.endpoints.meilisearch,
  apiKey: environment.meilisearch.search_key,
});

@Injectable({ providedIn: 'root' })
export class MeilisearchService {
  search(q: string) {
    const prefix = environment.meilisearch.indice_prefix;

    return client.multiSearch({
      federation: {
        limit: 20,
      },
      queries: [
        { indexUid: `${prefix}posts`, q: q, filter: ['status = publish'] },
        { indexUid: `${prefix}attachments`, q: q },
      ],
    });
  }
}
