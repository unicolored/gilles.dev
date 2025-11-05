import { PostList } from './api-postList';
import { ApiItem, PostAttachment, PostMainCategory } from './common';

export interface Post {
  title: string;
  slug: string;
  status: string;
  mainCategory: PostMainCategory;
  listItems: ListItems;
  description: string;
  attachments: PostAttachments;
  createdAt: Date;
  cloudinaryId: string;
}

interface PostAttachments extends ApiItem {
  "@context": string;
  totalItems: number;
  member: PostAttachment[];
  search: Search;
}

interface Search {
  "@type": string;
  template: string;
  variableRepresentation: string;
  mapping: Mapping[];
}

interface Mapping {
  "@type": string;
  variable: string;
  property: string;
  required: boolean;
}

interface ListItems extends ApiItem {
  "@context": string;
  totalItems: number;
  member: ListItem[];
  search: Search;
}

//export type SlimPostList = Omit<PostList, "description" | "items">;
export type SlimPostList = ApiItem & Pick<PostList, "@context" | "name" | "slug">;

interface ListItem extends ApiItem {
  postList: SlimPostList;
}

