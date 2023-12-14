import type { Response } from '../repo';
import type { Article } from './articles';

export interface User {
  username: string
  email: string
  provider: string
  password: string
  resetPasswordToken: string
  confirmationToken: string
  confirmed: boolean
  blocked: boolean
  role: unknown
  favourites: Response<Article[]>
}
