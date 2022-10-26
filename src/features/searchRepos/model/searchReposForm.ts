import { createEvent, createStore, sample } from 'effector';

import { TSearchReposFormInputs } from './models';

const formSubmitted = createEvent();

const queryResetted = createEvent();
const valuesSetted = createEvent<TSearchReposFormInputs>();

const $values = createStore<TSearchReposFormInputs>({
  query: '',
  sort: 'stars',
  order: 'desc',
  langs: [],
  owners: [],
  stars: {
    operator: '>',
  },
  forks: {
    operator: '>',
  },
});
$values.on(valuesSetted, (_, payload) => payload);

const $hasQueryFieldCancelBtn = $values.map(
  (values) => values.query.length > 0,
);

sample({
  clock: queryResetted,
  source: $values,
  fn: (values) => ({ ...values, query: '' }),
  target: $values,
});

export const searchReposForm = {
  $values,
  $hasQueryFieldCancelBtn,
  formSubmitted,
  valuesSetted,
  queryResetted,
};
