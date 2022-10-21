import { createEvent, sample } from 'effector';

import { TSearchReposFormInputs } from './models';
import { searchReposParams } from './searchReposParams';

const searchReposFormSubmitted = createEvent<TSearchReposFormInputs>();

sample({
  clock: searchReposFormSubmitted,
  fn: (data) => data.q ?? '',
  target: searchReposParams.$query,
});

export { searchReposFormSubmitted };
