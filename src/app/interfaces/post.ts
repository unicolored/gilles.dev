import { ApiItem } from './common';

export interface Category extends ApiItem {
  name: string;
  description: string;
  slug: string;
}

export interface Post extends ApiItem {
  title: string;
  status: string;
  slug: string;
  cloudinaryId?: string;
  mainCategory: Category;
  listItems: PostListItemRef[];
  createdAt: string;
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
