import { githubApi } from '@/shared/api';

export type TSearchReposFormInputs = {
  query: string;
  sort: typeof SEARCH_REPOS_SORT[number];
  order: typeof SEARCH_REPOS_SORT_ORDER[number];
  langs: string[];
  owners: string[];
  stars: {
    operator: typeof SEARCH_REPOS_OPERATORS[number];
    from?: number;
    to?: number;
  };
  forks: {
    operator: typeof SEARCH_REPOS_OPERATORS[number];
    from?: number;
    to?: number;
  };
};

export const SEARCH_REPOS_OPERATORS = ['=', '<', '>', '..'] as const;

export const SEARCH_REPOS_SORT: Readonly<
  Exclude<
    githubApi.schema.operations['search/repos']['parameters']['query']['sort'],
    undefined
  >[]
> = ['stars', 'forks', 'updated', 'help-wanted-issues'] as const;

export const SEARCH_REPOS_SORT_ORDER: Readonly<
  Exclude<
    githubApi.schema.operations['search/repos']['parameters']['query']['order'],
    undefined
  >[]
> = ['asc', 'desc'] as const;

export type TSearchReposParams =
  githubApi.schema.operations['search/repos']['parameters']['query'];

export type TSearchReposResultError =
  | githubApi.schema.operations['search/repos']['responses']['422']['content']['application/json']
  | githubApi.schema.operations['search/repos']['responses']['503']['content']['application/json'];

export type TSearchReposResultData =
  githubApi.schema.operations['search/repos']['responses']['200']['content']['application/json'];
