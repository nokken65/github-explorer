import { combine, createEvent, createStore } from 'effector';
import { spread } from 'patronum';

import { TSearchReposFormInputs } from './models';
import { searchReposFilters } from './searchReposFilters';

const formSubmitted = createEvent();

const queryResetted = createEvent();
const $query =
  createStore<TSearchReposFormInputs['query']>('').reset(queryResetted);

const $hasCancelButton = $query.map((query) => query.length > 0);

const valuesSetted = createEvent<TSearchReposFormInputs>();
const $values = combine(
  {
    query: $query,
    sort: searchReposFilters.$sort,
    order: searchReposFilters.$order,
    langs: searchReposFilters.$langs,
    owners: searchReposFilters.$owners,
    stars: searchReposFilters.$stars,
    forks: searchReposFilters.$forks,
  },
  (all) => all,
);

spread({
  source: valuesSetted,
  targets: {
    query: $query,
    sort: searchReposFilters.$sort,
    order: searchReposFilters.$order,
    langs: searchReposFilters.$langs,
    owners: searchReposFilters.$owners,
    stars: searchReposFilters.$stars,
    forks: searchReposFilters.$forks,
  },
});

export const searchReposForm = {
  $query,
  $values,
  $hasCancelButton,
  formSubmitted,
  valuesSetted,
  queryResetted,
};
