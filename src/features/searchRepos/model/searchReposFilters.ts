import { createStore } from 'effector';

import { TSearchReposFormInputs } from './models';

const $sort = createStore<TSearchReposFormInputs['sort']>('stars');
const $order = createStore<TSearchReposFormInputs['order']>('desc');
const $langs = createStore<TSearchReposFormInputs['langs']>([]);
const $owners = createStore<TSearchReposFormInputs['owners']>([]);
const $stars = createStore<TSearchReposFormInputs['stars']>({ operator: '>' });
const $forks = createStore<TSearchReposFormInputs['forks']>({ operator: '>' });
const $pushedTo = createStore<TSearchReposFormInputs['pushedTo']>({
  operator: '>',
});
const $createdAt = createStore<TSearchReposFormInputs['createdAt']>({
  operator: '>',
});

export const searchReposFilters = {
  $sort,
  $order,
  $langs,
  $owners,
  $stars,
  $forks,
  $pushedTo,
  $createdAt,
};
