import { createEvent, createStore, sample } from 'effector';

import { searchRepos } from '../api';
import { searchReposParams } from './searchReposParams';

const setPage = createEvent<number>();

const $totalPages = createStore<number>(1);

sample({
  clock: searchRepos.$data,
  source: {
    perPage: searchReposParams.$perPage,
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
    page: searchReposParams.$page,
    totalPages: $totalPages,
  },
  filter: ({ totalPages }, newPage) => newPage >= 1 && newPage <= totalPages,
  fn: (_, newPage) => newPage,
  target: searchReposParams.$page,
});

sample({
  clock: searchReposParams.$page,
  target: searchReposParams.$page,
});

export { $totalPages, setPage };
