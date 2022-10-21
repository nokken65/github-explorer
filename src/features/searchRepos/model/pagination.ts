import { createEvent, createStore, sample } from 'effector';

import { searchRepos } from '../api';
import { $searchReposParams } from './searchReposParams';

const prevPage = createEvent();
const nextPage = createEvent();

const $page = createStore<number>(1);
const $perPage = createStore<number>(21);
const $totalPages = createStore<number>(1);

const $hasPrevPage = createStore<boolean>(false);
const $hasNextPage = createStore<boolean>(true);

sample({
  clock: searchRepos.$data,
  source: {
    perPage: $perPage,
  },
  fn: ({ perPage }, data) => Math.ceil((data?.total_count ?? 0) / perPage),
  target: $totalPages,
});

sample({
  clock: $page,
  fn: (page) => page > 1,
  target: $hasPrevPage,
});

sample({
  clock: [$page, $totalPages],
  source: {
    page: $page,
    totalPages: $totalPages,
  },
  fn: ({ totalPages, page }) => page < totalPages,
  target: $hasNextPage,
});

// previous page
sample({
  clock: prevPage,
  source: {
    page: $page,
    hasPrevPage: $hasPrevPage,
  },
  filter: ({ hasPrevPage }) => hasPrevPage,
  fn: ({ page }) => page - 1,
  target: $page,
});

// next page
sample({
  clock: nextPage,
  source: {
    page: $page,
    totalPages: $totalPages,
    hasNextPage: $hasNextPage,
  },
  filter: ({ hasNextPage }) => hasNextPage,
  fn: ({ page }) => page + 1,
  target: $page,
});

sample({
  clock: [prevPage, nextPage],
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

export {
  $hasNextPage,
  $hasPrevPage,
  $page,
  $perPage,
  $totalPages,
  nextPage,
  prevPage,
};
