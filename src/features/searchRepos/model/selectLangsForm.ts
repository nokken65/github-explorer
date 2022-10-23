import { createEvent, sample } from 'effector';

import { TSelectLangsFormInputs } from './models';
import { searchReposParams } from './searchReposParams';

const selectLangsFormSubmitted = createEvent<TSelectLangsFormInputs>();

sample({
  clock: selectLangsFormSubmitted,
  filter: (data) => Boolean(data.lang),
  fn: (data) => data.lang,
  target: searchReposParams.addLang,
});

export { selectLangsFormSubmitted };
