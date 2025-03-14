import { MeilisearchSchema } from '../MeilisearchInterface';
import { StrapiSchema } from '../StrapiInterface';

export interface EventSaint {
  start: string;
  label: string;
}

export type EtOrateSaintCreateAttributes = Pick<
  EtOrateSaintCommonAttributes,
  'locale' | 'fullnameUnique' | 'fullname' | 'calendarId' | 'fete'
>;

export interface EtOrateSaintCommonAttributes {
  _meilisearch_id: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  fullnameUnique: string;
  fullname: string;
  calendarId?: string;
  fete: EventSaint[];
}

export interface EtOrateSaintAttributesLocalizations {
  localizations: EtOrateSaintCommonAttributes[];
}

export interface EtOrateSaintAttributesFormatted {
  _formatted: EtOrateSaintMeiliHitBase;
}

export type EtOrateSaintAttributes = EtOrateSaintCommonAttributes & EtOrateSaintAttributesLocalizations;

export type EtOrateSaintMeiliHitBase = MeilisearchSchema & EtOrateSaintAttributes;
export type EtOrateSaintMeiliHit = EtOrateSaintMeiliHitBase & EtOrateSaintAttributesFormatted;

export type BaseItemStrapiSaint = StrapiSchema<EtOrateSaintAttributes>;
