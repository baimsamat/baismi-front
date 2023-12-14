import type { Response } from '../repo';
import type { Base } from './base';
import type { Author } from './authors';
import type { User } from './users';

export interface Magazine extends Base {
  name: string
  country: string
  site: string
  description: string
}

export interface Source extends Base {
  inosmi: string
  original: string
}

export enum ArticleType {
  economic = 'economic',
  politic = 'politic',
  science = 'science',
  social = 'social'
}

export interface Article extends Base {
  title: string
  announce: string
  text: string
  dateOfCreation: string
  type: ArticleType
  author?: Author
  source?: Response<Source>
  magazine?: Response<Magazine>
  likes?: Response<User[]>
}
