import { createEvent, sample } from 'effector';

import { SearchRepositoriesInputs } from './models';
import { $page, $perPage } from './page';
import { $queryVariables } from './searchRepositories';

const searchRepositoriesFormSubmitted = createEvent<SearchRepositoriesInputs>();

sample({
  clock: searchRepositoriesFormSubmitted,
  source: {
    perPage: $perPage,
  },
  fn: ({ perPage }, data) => ({
    query: data.query,
    first: perPage,
    last: null,
    before: null,
    after: null,
  }),
  target: $queryVariables,
});

sample({
  clock: searchRepositoriesFormSubmitted,
  fn: () => 1,
  target: $page,
});

export { searchRepositoriesFormSubmitted };
