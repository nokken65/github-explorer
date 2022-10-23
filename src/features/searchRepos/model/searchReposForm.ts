import { createEvent, sample } from 'effector';

import { TSearchReposFormInputs } from './models';
import { searchReposParams } from './searchReposParams';

const searchReposFormSubmitted = createEvent<TSearchReposFormInputs>();

sample({
  clock: searchReposFormSubmitted,
  fn: (data) => data.q ?? '',
  target: searchReposParams.$query,
});

sample({
  clock: searchReposFormSubmitted,
  fn: () => 1,
  target: searchReposParams.$page,
});

export { searchReposFormSubmitted };
