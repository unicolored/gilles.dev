import { MediaDetails, Rendered } from './wordpress.self.common.interface';

export interface WordpressPostFeaturedMedia {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: Rendered;
  author: number;
  caption: Rendered;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
}
