import { PostList } from './api-postList';
import { ApiItem, BasePost, PostAttachment } from './common';

export interface Post extends BasePost {
  listItems: ListItems;
  attachments: PostAttachments;
}

interface PostAttachments extends ApiItem {
  '@context': string;
  totalItems: number;
  member: PostAttachment[];
  search: Search;
}

interface Search {
  '@type': string;
  template: string;
  variableRepresentation: string;
  mapping: Mapping[];
}

interface Mapping {
  '@type': string;
  variable: string;
  property: string;
  required: boolean;
}

interface ListItems extends ApiItem {
  '@context': string;
  totalItems: number;
  member: ListItem[];
  search: Search;
}

//export type SlimPostList = Omit<PostList, "description" | "items">;
export type SlimPostList = ApiItem & Pick<PostList, '@context' | 'name' | 'slug'>;

interface ListItem extends ApiItem {
  postList: SlimPostList;
}
