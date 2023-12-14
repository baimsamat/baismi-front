import type { Author } from './interfaces/authors';
import type { Repo, Response, RequestParams } from './repo';
import type { Article } from './interfaces/articles';
import { fakeArticle, fakeArticles } from '~/fixtures/articles';
import { FakeAuthors } from '~/fixtures/authors';
import { respondMockResult } from '~/utils/respond-mock-result';

export class FakeRepo implements Repo {
  async getAuthors(): Promise<Response<Author>> {
    const response = await respondMockResult(FakeAuthors);

    return response;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getArticle(id: number): Promise<Response<Article>> {
    const response = await respondMockResult(fakeArticle);

    return response;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getArticles(params?: RequestParams): Promise<Response<Article[]>> {
    const response = await respondMockResult(fakeArticles);

    return response;
  }
}
