export enum SearchIndexes {
  posts = 'GHCOMsearchable_posts',
  medias = 'GHCOMposts_attachment',
}

export interface PortfolioHit {
  post_id: number;
  post_type: string;
  post_type_label: string;
  post_title: string;
  post_excerpt: string;
  post_date: number;
  post_date_formatted: string;
  post_modified: number;
  comment_count: number;
  menu_order: number;
  post_author: PostAuthor;
  images: Images;
  permalink: string;
  post_mime_type: string;
  taxonomies: PortfolioHitTaxonomies;
  taxonomies_hierarchical: TaxonomiesHierarchical;
  is_sticky: number;
  content: string;
  record_index: number;
  objectID: string;
  _snippetResult: SnippetResult;
  _highlightResult: HighlightResult;
  __position: number;
}

export interface HighlightResult {
  post_title: ContentElement;
  taxonomies: HighlightResultTaxonomies;
  content: ContentElement;
}

export interface ContentElement {
  value: string;
  matchLevel: string;
  matchedWords: unknown[];
}

export interface HighlightResultTaxonomies {
  category: ContentElement[];
  post_tag: ContentElement[];
}

export interface SnippetResult {
  post_title: SnippetResultContent;
  content: SnippetResultContent;
}

export interface SnippetResultContent {
  value: string;
  matchLevel: string;
}

export interface Images {
  thumbnail: Thumbnail;
  full: { url: string };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface PostAuthor {
  user_id: number;
  display_name: string;
  user_url: string;
  user_login: string;
}

export interface PortfolioHitTaxonomies {
  category: string[];
  post_tag: string[];
}

export interface TaxonomiesHierarchical {
  category: { [key: string]: string[] };
}
