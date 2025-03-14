import { StrapiFullAttributes } from './StrapiInterface';

export interface MeiliSearchResponse<T> {
  hits: T;
  error?: string | null;
}

export interface MeiliSearchQuery {
  id: string | null;
  q: string | null;
  locale?: string;
  index: string;
  attributesToHighlight?: string[];
}

export interface MeilisearchSchema {
  id: number;
  _meilisearch_id: string;
}

export interface MeilisearchFormatted<T> {
  _formatted: T;
}

// export type MeilisearchFullHit<T> = MeilisearchSchema & T & MeilisearchFormatted<MeilisearchSchema>;

export type MeilisearchFullHit<T> = MeilisearchSchema &
  T &
  MeilisearchFormatted<StrapiFullAttributes<MeilisearchSchema & T>>;
