import { createStore, sample } from 'effector';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';

const $searchReposParams = createStore<TSearchReposParams>({
  q: '',
  per_page: 21,
  order: 'desc',
  sort: 'stars',
  page: 1,
});

sample({
  clock: $searchReposParams,
  target: searchRepos.start,
});

export { $searchReposParams };
