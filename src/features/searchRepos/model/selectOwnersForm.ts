import { createEvent, sample } from 'effector';

import { TSelectOwnersFormInputs } from './models';
import { searchReposParams } from './searchReposParams';

const selectOwnersFormSubmitted = createEvent<TSelectOwnersFormInputs>();

sample({
  clock: selectOwnersFormSubmitted,
  filter: (data) => Boolean(data.owner),
  fn: (data) => data.owner,
  target: searchReposParams.addOwner,
});

export { selectOwnersFormSubmitted };
