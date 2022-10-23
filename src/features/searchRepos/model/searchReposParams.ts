import { combine, createEvent, createStore, sample } from 'effector';
import pickBy from 'lodash.pickby';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';

const $query = createStore<TSearchReposParams['q']>('');
const $perPage = createStore<NonNullable<TSearchReposParams['per_page']>>(21);
const $order = createStore<NonNullable<TSearchReposParams['order']>>('desc');
const $sort = createStore<NonNullable<TSearchReposParams['sort']>>('stars');
const $page = createStore<NonNullable<TSearchReposParams['page']>>(1);
const $langs = createStore<string[]>([]);

const toggleOrder = createEvent();
$order.on(toggleOrder, (state) => (state === 'asc' ? 'desc' : 'asc'));

const setSort = createEvent<NonNullable<TSearchReposParams['sort']>>();
$sort.on(setSort, (_, payload) => payload);

const addLang = createEvent<string>();
const removeLang = createEvent<string>();
$langs.on(addLang, (state, payload) => [...new Set([...state, payload])]);
$langs.on(removeLang, (state, payload) =>
  state.filter((item) => item !== payload),
);

const $all = combine(
  {
    q: $query,
    per_page: $perPage,
    order: $order,
    sort: $sort,
    page: $page,
    langs: $langs,
  },
  (params) => params,
);

sample({
  clock: $all,
  filter: ({ q }) => q.length > 0,
  fn: (all) => {
    const params: Partial<TSearchReposParams> = {};

    params.order = all.order;
    params.page = all.page;
    params.per_page = all.per_page;
    params.sort = all.sort;
    const queryLangs =
      all.langs.length === 0
        ? ''
        : all.langs.reduce((q, lang) => `${q} language:"${lang}"`, '');
    params.q = all.q + queryLangs;

    const filteredParams = pickBy<TSearchReposParams>(params, (value) =>
      Boolean(value),
    ) as TSearchReposParams;

    return filteredParams;
  },
  target: searchRepos.start,
});

export const searchReposParams = {
  $query,
  $perPage,
  $order,
  $sort,
  $page,
  $langs,
  $all,
  toggleOrder,
  setSort,
  addLang,
  removeLang,
};
