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
  cloudinaryId: string;
  mainCategory: Category;
}

export interface PostListItem extends ApiItem {
  post: Post;
}
export interface PostList extends ApiItem {
  '@context': string;
  name: string;
  description: string;
  items: PostListItem[];
}
