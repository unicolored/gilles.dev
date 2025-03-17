export interface WordpressResponse<T> {
  data: T;
  error?: string | null;
}

export enum WordpressParamsOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

interface WordpressPublicParams {
  limit: number;
  category: string;
  order: WordpressParamsOrder;
}

interface WordpressSelfParams {
  limit: number;
  categories: string;
  order: WordpressParamsOrder;
}

export type WordpressPublicRequestParams = Partial<WordpressPublicParams>;
export type WordpressSelfRequestParams = Partial<WordpressSelfParams>;
