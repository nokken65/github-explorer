import { createEvent, createStore, sample } from 'effector';

import { $queryVariables, searchRepositoriesFx } from './searchRepositories';

const prevPage = createEvent();
const nextPage = createEvent();

const $page = createStore<number>(1);

const $perPage = createStore<number>(21);

const $totalPages = createStore<number>(0).on(
  searchRepositoriesFx.doneData,
  (_, payload) => Math.trunc(payload.search.repositoryCount / 21),
);

const $startCursorPage = createStore<string>('').on(
  searchRepositoriesFx.doneData,
  (_, payload) => payload.search.pageInfo.startCursor ?? '',
);
const $endCursorPage = createStore<string>('').on(
  searchRepositoriesFx.doneData,
  (_, payload) => payload.search.pageInfo.endCursor ?? '',
);

const $hasPrevPage = createStore<boolean>(false).on(
  searchRepositoriesFx.doneData,
  (_, payload) => payload.search.pageInfo.hasPreviousPage,
);
const $hasNextPage = createStore<boolean>(false).on(
  searchRepositoriesFx.doneData,
  (_, payload) => payload.search.pageInfo.hasNextPage,
);

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

sample({
  clock: prevPage,
  source: {
    perPage: $perPage,
    queryVariables: $queryVariables,
    startCursorPage: $startCursorPage,
    hasPrevPage: $hasPrevPage,
  },
  filter: ({ hasPrevPage }) => hasPrevPage,
  fn: ({ perPage, queryVariables, startCursorPage }) => ({
    ...queryVariables,
    before: startCursorPage,
    after: undefined,
    first: null,
    last: perPage,
  }),
  target: $queryVariables,
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
  clock: nextPage,
  source: {
    perPage: $perPage,
    queryVariables: $queryVariables,
    endCursorPage: $endCursorPage,
    hasNextPage: $hasNextPage,
  },
  filter: ({ hasNextPage }) => hasNextPage,
  fn: ({ perPage, queryVariables, endCursorPage }) => ({
    ...queryVariables,
    first: perPage,
    last: null,
    before: null,
    after: endCursorPage,
  }),
  target: $queryVariables,
});

export {
  $endCursorPage,
  $hasNextPage,
  $hasPrevPage,
  $page,
  $perPage,
  $startCursorPage,
  $totalPages,
  nextPage,
  prevPage,
};
