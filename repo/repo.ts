import type { Article } from './interfaces/articles';
import type { Author } from './interfaces/authors';
import type { Meta } from './interfaces/meta';

export interface RequestParams {
  page?: number
  pageSize?: number
  pageCount?: number
}

export interface Entity<T> {
  id: number
  attributes: T
}

// type Unpacked<T> = T extends (infer U)[]
//   ? Entity<U>[]
//   : T extends infer U
//   ? Entity<U>
//   : never

type Unpacked<T> = T extends (infer U)[]
  ? Entity<U>[]
  : Entity<T>

export interface Response<T> {
  data: Unpacked<T>
  meta?: Meta
}

export interface Repo {
  getAuthors?(params?: RequestParams): Promise<Response<Author>>
  getAuthor?(id: number): Promise<Response<Author>>
  getArticle(id: number): Promise<Response<Article>>
  getArticles(params?: RequestParams, type?: string): Promise<Response<Article[]>>
}
