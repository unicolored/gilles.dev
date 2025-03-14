export interface MyAdminResponse<T> {
  '@context': string;
  '@id': string;
  '@type': string;
  totalItems: number;
  member: (Member & T)[];
}

export interface Member {
  '@id': string;
  '@type': string;
}

export type PrayerMember = Member & PrayerProps;

export interface PrayerProps {
  name: string;
  title: string;
  subtitle: string;
  content: string;
  contentHtml: string;
  contentInline: string;
  shortInline: string;
  latin_reference: string;
  author_name: string;
  slug: string;
}
