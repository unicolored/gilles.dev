import { ApiItem } from './common';

export interface MeiliPost {
  content: string;
  objectID: string;
  published_at: number;
  title: string;
  // TODO: add the properties below
  slug: string;
  cloudinaryId: string;
  description: string;
}

export type MeiliAttachment = MeiliPost;

export interface Category extends ApiItem {
  name: string;
  description: string;
  slug: string;
}

export interface Attachment extends ApiItem {
  cloudinaryId: string;
  name: string;
  slug: string;
}

export interface Post extends Partial<ApiItem> {
  title: string;
  status: string;
  slug: string;
  description: string;
  content: string;
  contentMarkdown: string;
  cloudinaryId?: string;
  mainCategory: Category;
  listItems: PostListItemRef[];
  createdAt: string;
  attachments: { member: Attachment[] };
}

export interface PostListItem<T = Post> extends Partial<ApiItem> {
  post: T;
}

export interface PostListItemRef extends ApiItem {
  postList: {
    '@id': string;
    '@type': string;
    name: string;
    slug: string;
  };
}

export interface PostList<T = Post> extends ApiItem {
  '@context': string;
  name: string;
  slug: string;
  description: string;
  items: PostListItem<T>[];
}

export interface PostCollectionView extends ApiItem {
  first?: string;
  last?: string;
  next?: string;
}

export interface PostCollection extends ApiItem {
  '@context': string;
  totalItems: number;
  member: Post[];
  view: PostCollectionView;
}
