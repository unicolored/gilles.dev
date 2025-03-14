export type CommonLocale = 'en' | 'fr' | 'it' | 'fr-MF';
export enum CommonLocaleCodeEnum {
  english = 'en',
  french = 'fr',
  italian = 'it',
  latin = 'fr-MF',
}
export interface StrapiResponse<T> {
  data: T;
  error?: string | null;
}
export type StrapiSchema<T> = {
  // _meilisearch_id: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  // locale: CommonLocale;
  attributes: T;
};

export interface StrapiLocalizations<T> {
  localizations: T[];
}

export type StrapiFullAttributes<T> = T & StrapiLocalizations<T>;
