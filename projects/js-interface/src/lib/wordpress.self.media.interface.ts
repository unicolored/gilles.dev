import { Links, MediaDetails, Meta, MIMEType, Rendered } from './wordpress.self.common.interface';

export interface WordpressSelfSinglePostMedia {
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
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Partial<Meta>;
  class_list: string[];
  is_cloudinary_synced: boolean;
  source_url: string;
  description: Rendered;
  caption: Rendered;
  alt_text: string;
  media_type: string;
  mime_type: MIMEType;
  media_details: MediaDetails;
  post: number;
  _links: Links;
}
