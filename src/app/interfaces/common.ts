export interface ApiItem {
  '@id': string;
  '@type': string;
}

export interface BasePost {
  title: string;
  slug: string;
  status: string;
  mainCategory?: PostMainCategory | null;
  description?: string;
  contentMarkdown?: string;
  createdAt: string;
  cloudinaryId?: string;
}

export interface PostMainCategory extends ApiItem {
  name: string;
  slug: string;
  '@context'?: string;
}

export interface PostAttachment extends ApiItem {
  cloudinaryId: string;
  name: string;
  slug: string;
  '@context'?: string;
}

export interface Slug {
  slug: string;
}

export type Slugs = Slug[];
