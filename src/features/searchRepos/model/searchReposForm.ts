import { createEvent, sample } from 'effector';

import { TSearchReposFormInputs } from './models';
import { $searchReposParams } from './searchReposParams';

const searchReposFormSubmitted = createEvent<TSearchReposFormInputs>();

sample({
  clock: searchReposFormSubmitted,
  source: {
    searchReposParams: $searchReposParams,
  },
  fn: ({ searchReposParams }, data) => ({
    ...searchReposParams,
    q: data.q,
    page: 1,
  }),
  target: $searchReposParams,
});

export { searchReposFormSubmitted };
