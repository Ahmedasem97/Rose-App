export type Conditions = 'gt' | 'gte' | 'lt' | 'lte';
export type SortOrder = 'asc' | 'desc';
export type SortAttributes =
  | 'price'
  | 'rateAvg'
  | 'title'
  | 'quantity'
  | 'category'
  | 'createdAt'
  | 'discount';

export interface ValueCondition {
  value?: number | Date;
  condition: Conditions;
}

export interface ProductsQueryParams {
  keyword?: string;
  price?: ValueCondition[];
  category?: string;
  fields?: string[];
  limit?: number;
  sort?: SortOrder;
  sortBy?: SortAttributes;
}
