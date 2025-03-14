import { WordpressPostFeaturedMedia } from './wordpress.self.featuredmedia.interface';
import { Meta, Rendered } from './wordpress.self.common.interface';

export interface WordpressSelfSinglePost {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: Rendered;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Rendered;
  content: Rendered;
  excerpt: Rendered;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Partial<Meta>;
  categories: number[];
  tags: unknown[];
  _embedded: {
    'wp:featuredmedia': WordpressPostFeaturedMedia[];
  };
}
