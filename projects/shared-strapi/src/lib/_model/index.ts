/**
 * Example of interfaces for a "DummyEntity" and Strapi and Meilisearch derived interfaces
 */

import { MeilisearchFullHit } from '../MeilisearchInterface';
import { CommonLocale, StrapiFullAttributes, StrapiSchema } from '../StrapiInterface';

/** Entity specific schema of properties set in strapi. Available in schema.json **/
export interface DummyEntitySchema {
  locale: CommonLocale;
  name: string;
  title: string;
}

// export type HolyDayContentType = StrapiSchema<HolyDayAttributesOnly>;
// export type DummyEntityStrapiCollectionItem = StrapiSchema<DummyEntitySchema>;

export type DummyEntitySchemaMeilisearchHit = MeilisearchFullHit<DummyEntitySchema>;

export type DummyEntityStrapiCollectionItem = StrapiFullAttributes<StrapiSchema<DummyEntitySchema>>;
