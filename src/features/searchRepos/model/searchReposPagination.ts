import { createEvent, createStore, sample } from 'effector';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';

const $perPage = createStore<NonNullable<TSearchReposParams['per_page']>>(21);
const $total = createStore<number>(0);

const pageSetted = createEvent<NonNullable<TSearchReposParams['page']>>();
const $page = createStore<NonNullable<TSearchReposParams['page']>>(1);
$page.on(pageSetted, (_, payload) => payload);

sample({
  clock: searchRepos.$data,
  filter: Boolean,
  fn: (data) => (data.total_count <= 1000 ? data.total_count : 1000),
  target: $total,
});

export const searchReposPagination = {
  $perPage,
  $page,
  $total,
  pageSetted,
};
