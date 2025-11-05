import { ApiItem, BasePost, PostAttachment } from './common';

export interface PostList extends ApiItem {
  '@context': string;
  name: string;
  slug: string;
  description: string;
  items: PostListItem[];
}

export interface PostListItem extends ApiItem {
  post: PostListItemPost;
}

export interface PostListItemPost extends BasePost {
  attachments?: PostAttachment[] | null;
}
