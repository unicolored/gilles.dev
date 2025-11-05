import { Post } from './api-post';
import { ApiItem } from './common';

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
