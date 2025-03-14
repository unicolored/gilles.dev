import { DateLabel, EmailLabel, UrlLabel } from '../Components/Shared';
import { MeilisearchFullHit } from '../MeilisearchInterface';
import { CommonLocale, StrapiFullAttributes, StrapiSchema } from '../StrapiInterface';

// export type EtOrateSaintCreateAttributes = Pick<
//   EtOrateSaintCommonAttributes,
//   'locale' | 'fullnameUnique' | 'fullname' | 'calendarId' | 'fete'
// >;

export interface HolyDaySchema {
  locale: CommonLocale;
  name: string;
  title: string;
  dates: DateLabel[];
  calendar: string;
  uniqueFilename: string;
  names?: string[];
  tags?: string[];
  information?: string;
  calendarUrls?: UrlLabel[];
  calendarIds?: EmailLabel[];
}

export type MeilisearchHolyDayHit = MeilisearchFullHit<HolyDaySchema>;

export type HolyDayAttributesOnly = StrapiFullAttributes<HolyDaySchema>;
export type HolyDayContentType = StrapiSchema<HolyDayAttributesOnly>;
