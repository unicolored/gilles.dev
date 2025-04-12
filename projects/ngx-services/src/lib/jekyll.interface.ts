export interface JekyllPost {
  url: string;
  name: string;
  path: string;
  relative_path: string;
  date: string;
  id: string;
  excerpt: string;
  tags: any[];
  title: string;
  categories: string[];
  output: null;
  content: string;
  collection: string;
  draft: boolean;
  layout: string;
  category: string;
  slug: string;
  ext: string;
  previous?: JekyllPost;
  next?: JekyllPost;
}
