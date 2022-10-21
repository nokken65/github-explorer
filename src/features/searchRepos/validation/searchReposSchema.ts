import { object, string } from 'zod';

export const searchReposSchema = object({
  q: string().max(40, 'Too long query!'),
});
