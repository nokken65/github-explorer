import { createJsonQuery, declareParams } from '@farfetched/core';

import { githubApi } from '@/shared/api';

import {
  TSearchReposParams,
  TSearchReposResultData,
  TSearchReposResultError,
} from '../model/models';

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const searchRepos = createJsonQuery({
  params: declareParams<TSearchReposParams>(),
  request: {
    url: (params) =>
      githubApi.createUrl({ path: '/search/repositories', params }),
    method: 'GET',
    headers: {
      authorization: token,
    },
  },
  response: {
    contract: {
      isData: (data): data is TSearchReposResultData =>
        data !== null && typeof data === 'object' && 'items' in data,
      getErrorMessages: (data) => {
        return [(data as TSearchReposResultError).message ?? ''];
      },
    },
  },
});
