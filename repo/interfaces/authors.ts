import type { Response } from '../repo';
import type { Base } from './base';
import type { Article } from './articles';

export interface Author extends Base {
  name: string
  articles?: Response<Article>
}
