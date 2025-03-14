export interface WordpressPublicPosts {
  found: number;
  posts: WordpressPublicSinglePost[];
}

export interface WordpressPublicSinglePost {
  ID: number;
  site_ID: number;
  author: WordpressPublicAuthor;
  date: Date;
  modified: Date;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  discussion: WordpressPublicDiscussion;
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: number;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image: string;
  post_thumbnail: null;
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: unknown[];
  terms: unknown;
  tags: WordpressPublicTags;
  categories: unknown;
  attachments: unknown;
  attachment_count: number;
  metadata: unknown[];
  meta: WordpressPublicMeta;
  capabilities: WordpressPublicCapabilities;
  other_URLs: unknown;
}

export interface WordpressPublicAuthor {
  ID: number;
  login: string;
  email: boolean;
  name: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
  site_ID: number;
}

export interface WordpressPublicCapabilities {
  publish_post: boolean;
  delete_post: boolean;
  edit_post: boolean;
}

export interface WordpressPublicDiscussion {
  comments_open: boolean;
  comment_status: string;
  pings_open: boolean;
  ping_status: string;
  comment_count: number;
}

export interface WordpressPublicMeta {
  links: WordpressPublicLinks;
}

export interface WordpressPublicLinks {
  self: string;
  help: string;
  site: string;
  replies: string;
  likes: string;
}

export interface WordpressPublicTag {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: {
    links: WordpressPublicLinks;
  };
}

export interface WordpressPublicTags {
  [k: string]: WordpressPublicTag;
}
