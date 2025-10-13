import { ApiItem } from './common';

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

export interface Post extends ApiItem {
  title: string;
  status: string;
  slug: string;
  description: string;
  content: string;
  cloudinaryId?: string;
  mainCategory: Category;
  listItems: PostListItemRef[];
  createdAt: string;
  attachments: Attachment[];
}

export interface PostListItem extends ApiItem {
  post: Post;
}

export interface PostListItemRef extends ApiItem {
  postList: {
    '@id': string;
    '@type': string;
    name: string;
    slug: string;
  };
}

export interface PostList extends ApiItem {
  '@context': string;
  name: string;
  slug: string;
  description: string;
  items: PostListItem[];
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
