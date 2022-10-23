import { object, string } from 'zod';

export const searchReposSchema = object({
  q: string().max(10, 'Too long query!'),
});
