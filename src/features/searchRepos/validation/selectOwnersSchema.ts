import { object, string } from 'zod';

export const selectOwnersSchema = object({
  owner: string().max(30, 'Too long lang name!'),
});
