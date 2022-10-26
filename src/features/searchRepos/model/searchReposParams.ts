import { combine, createEvent, createStore, sample } from 'effector';
import { debounce } from 'patronum/debounce';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';

const $query = createStore<TSearchReposParams['q']>('');
const setQuery = createEvent<string>();
$query.on(setQuery, (_, payload) => payload);

const $perPage = createStore<NonNullable<TSearchReposParams['per_page']>>(21);

const $page = createStore<NonNullable<TSearchReposParams['page']>>(1);
$page.reset(setQuery);

const $order = createStore<NonNullable<TSearchReposParams['order']>>('desc');
const toggleOrder = createEvent();
$order.on(toggleOrder, (state) => (state === 'asc' ? 'desc' : 'asc'));

const $sort = createStore<NonNullable<TSearchReposParams['sort']>>('stars');
const setSort = createEvent<NonNullable<TSearchReposParams['sort']>>();
$sort.on(setSort, (_, payload) => payload);

const $langs = createStore<string[]>([]);
const addLang = createEvent<string>();
const removeLang = createEvent<string>();
$langs.on(addLang, (state, payload) => [...new Set([...state, payload])]);
$langs.on(removeLang, (state, payload) =>
  state.filter((item) => item !== payload),
);

const $owners = createStore<string[]>([]);
const addOwner = createEvent<string>();
const removeOwner = createEvent<string>();
$owners.on(addOwner, (state, payload) => [...new Set([...state, payload])]);
$owners.on(removeOwner, (state, payload) =>
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
    owners: $owners,
  },
  (params) => params,
);

sample({
  clock: debounce({ source: $all, timeout: 500 }),
  fn: (all) => {
    const params: TSearchReposParams = { q: '' };

    params.page = all.page;
    params.per_page = all.per_page;
    params.sort = all.sort;
    params.order = all.order;

    const queryLangs = Boolean(all.langs.length)
      ? all.langs.reduce((q, lang) => `${q} language:"${lang}"`, '')
      : '';

    const queryOwners = Boolean(all.owners.length)
      ? all.owners.reduce((q, owner) => `${q} language:"${owner}"`, '')
      : '';

    params.q = all.q + queryLangs + queryOwners;

    return params;
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
  $owners,
  $all,
  toggleOrder,
  setSort,
  addLang,
  removeLang,
  addOwner,
  removeOwner,
  setQuery,
};
