import { Graph } from 'schema-dts';

export type WebPageMetas = {
  isHome?: boolean;
  title: string;
  description?: string | null;
  canonical?: string | null;
  schema?: Graph;
  imageOpenGraphUrl?: string | null;
  imageTwitterUrl?: string | null;
};

// Create a type for the titles object
export type WebPageMap = {
  [key: string]: WebPageMetas;
};
