import { ApiItem, PostAttachment, PostMainCategory } from './common';

export interface PostList extends ApiItem {
  "@context": string;
  name: string;
  slug: string;
  description: string;
  items: Item[];
}

interface Item extends ApiItem {
  post: PostListItemPost;
}

export interface PostListItemPost {
  title: string;
  slug: string;
  status: string;
  mainCategory: PostMainCategory;
  description: string;
  attachments: PostAttachment[];
  createdAt: Date;
  cloudinaryId: string;
  contentMarkdown?: string;
}


