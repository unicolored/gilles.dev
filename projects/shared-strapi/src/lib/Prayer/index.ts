import { MeilisearchFullHit } from '../MeilisearchInterface';
import { CommonLocale, StrapiFullAttributes, StrapiSchema } from '../StrapiInterface';

export type EtOratePrayerCreateAttributes = Pick<
  PrayerSchema,
  'name' | 'uniqueId' | 'title' | 'subtitle' | 'content' | 'latin_reference' | 'locale' | 'authorName'
>;

export interface PrayerSchema {
  locale: CommonLocale;
  name?: string;
  title: string;
  uniqueId: string;
  subtitle?: string;
  content: string;
  latin_reference?: string;

  authorName?: string;
  author?: null;
}

export type PrayerSchemaMeilisearchHit = MeilisearchFullHit<PrayerStrapiCollectionItem>;

export type PrayerStrapiCollectionItem = StrapiFullAttributes<StrapiSchema<PrayerSchema>>;
