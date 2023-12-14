import type { Author } from './interfaces/authors';
import type { Repo, Response, RequestParams } from './repo';
import type { Article, ArticleType } from './interfaces/articles';
import type { UrlGenerator } from './url-generator';
import { FakeAuthors } from '~/fixtures/authors';
import { respondMockResult } from '~/utils/respond-mock-result';

export class HttpRepo implements Repo {
  constructor(
    private urlGenerator: UrlGenerator
  ) {}

  async getAuthors(): Promise<Response<Author>> {
    const response = await respondMockResult(FakeAuthors);

    return response;
  }

  async getArticle(id: number): Promise<Response<Article>> {
    const response: Response<Article> = await $fetch(this.urlGenerator.articleById(id));

    return response;
  }

  async getArticles(params?: RequestParams, type?: ArticleType): Promise<Response<Article[]>> {
    const response: Response<Article[]> = await $fetch(this.urlGenerator.articles(type, params?.page));

    return response;
  }
}
