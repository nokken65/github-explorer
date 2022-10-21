import { combine, createEvent, createStore, sample } from 'effector';
import pickBy from 'lodash.pickby';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';

const $query = createStore<TSearchReposParams['q']>('');
const $perPage = createStore<NonNullable<TSearchReposParams['per_page']>>(21);
const $order = createStore<NonNullable<TSearchReposParams['order']>>('desc');
const $sort = createStore<NonNullable<TSearchReposParams['sort']>>('stars');
const $page = createStore<NonNullable<TSearchReposParams['page']>>(1);

const setOrder = createEvent<NonNullable<TSearchReposParams['order']>>();
$order.on(setOrder, (_, payload) => payload);
const setSort = createEvent<NonNullable<TSearchReposParams['sort']>>();
$sort.on(setSort, (_, payload) => payload);

const $all = combine(
  { q: $query, per_page: $perPage, order: $order, sort: $sort, page: $page },
  (params) => params,
);

sample({
  clock: $all,
  filter: ({ q }) => q.length > 0,
  fn: (all) =>
    pickBy<TSearchReposParams>(all, (value) =>
      Boolean(value),
    ) as TSearchReposParams,
  target: searchRepos.start,
});

export const searchReposParams = {
  $query,
  $perPage,
  $order,
  $sort,
  $page,
  $all,
  setOrder,
  setSort,
};
