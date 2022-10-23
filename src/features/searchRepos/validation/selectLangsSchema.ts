import { object, string } from 'zod';

export const selectLangsSchema = object({
  lang: string().max(30, 'Too long lang name!'),
});
