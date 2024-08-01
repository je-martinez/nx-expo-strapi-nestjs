export interface ScreenResponse<T> {
  data: ScreenResponseData<T>[];
  meta: Meta;
}

export interface ScreenResponseData<T> {
  id: number;
  attributes: Attributes<T>;
}

export interface Attributes<T> {
  path: string;
  name: string;
  description: string;
  metadata: T;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
