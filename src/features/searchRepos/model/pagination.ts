import { createEvent, createStore, sample } from 'effector';

import { searchRepos } from '../api';
import { $searchReposParams } from './searchReposParams';

const setPage = createEvent<number>();

const $page = createStore<number>(1);
const $perPage = createStore<number>(21);
const $totalPages = createStore<number>(1);

sample({
  clock: searchRepos.$data,
  source: {
    perPage: $perPage,
  },
  fn: ({ perPage }, data) =>
    Math.ceil(
      ((data?.total_count ?? 0) <= 1000 ? data?.total_count ?? 0 : 1000) /
        perPage,
    ),
  target: $totalPages,
});

sample({
  clock: setPage,
  source: {
    page: $page,
    totalPages: $totalPages,
  },
  filter: ({ totalPages }, newPage) => newPage >= 1 && newPage <= totalPages,
  fn: (_, newPage) => newPage,
  target: $page,
});

sample({
  clock: [setPage],
  source: {
    page: $page,
    searchReposParams: $searchReposParams,
  },
  fn: ({ page, searchReposParams }) => ({
    ...searchReposParams,
    page,
  }),
  target: $searchReposParams,
});

export { $page, $perPage, $totalPages, setPage };
