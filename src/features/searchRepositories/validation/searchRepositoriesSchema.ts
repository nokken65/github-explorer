import { object, string } from 'myzod';

export const searchRepositoriesSchema = object({
  query: string().max(40, 'Too long query!'),
});
