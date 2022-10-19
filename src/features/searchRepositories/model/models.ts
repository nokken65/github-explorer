import { Infer } from 'myzod';

import { searchRepositoriesSchema } from '../validation';

export type SearchRepositoriesInputs = Infer<typeof searchRepositoriesSchema>;
