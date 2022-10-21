import { z } from 'zod';

import { githubApi } from '@/shared/api';

import { searchReposSchema } from '../validation';

export type TSearchReposFormInputs = z.infer<typeof searchReposSchema>;

export type TSearchReposParams =
  githubApi.schema.operations['search/repos']['parameters']['query'];

export type TSearchReposResultError =
  | githubApi.schema.operations['search/repos']['responses']['422']['content']['application/json']
  | githubApi.schema.operations['search/repos']['responses']['503']['content']['application/json'];

export type TSearchReposResultData =
  githubApi.schema.operations['search/repos']['responses']['200']['content']['application/json'];
