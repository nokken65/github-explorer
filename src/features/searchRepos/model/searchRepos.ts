import { sample } from 'effector';
import { debounce } from 'patronum';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';
import { searchReposForm } from './searchReposForm';

const $searchedRepos = searchRepos.$data.map((data) => data?.items ?? []);

const $searchedReposIsEmpty = searchRepos.$data.map((data) =>
  data !== null ? data.items.length === 0 : true,
);

const $searchedReposIsLoading = searchRepos.$pending;

sample({
  clock: [
    debounce({ source: searchReposForm.$values, timeout: 500 }),
    searchReposForm.formSubmitted,
  ],
  source: searchReposForm.$values,
  fn: (values) => {
    const params: TSearchReposParams = { q: '' };

    params.page = 1;
    params.per_page = 21;
    params.sort = values.sort;
    params.order = values.order;

    const queryLangs = Boolean(values.langs.length)
      ? values.langs.reduce((q, lang) => `${q} language:"${lang}"`, '')
      : '';

    const queryOwners = Boolean(values.owners.length)
      ? values.owners.reduce((q, owner) => `${q} user:"${owner}"`, '')
      : '';

    const queryStars = Boolean(values.stars.to)
      ? ` stars:${values.stars.operator === '..' ? values.stars.from : ''}${
          values.stars.operator
        }${values.stars.to}`
      : '';

    const queryForks = Boolean(values.forks.to)
      ? ` forks:${values.forks.operator === '..' ? values.forks.from : ''}${
          values.forks.operator
        }${values.forks.to}`
      : '';

    params.q =
      values.query + queryLangs + queryOwners + queryStars + queryForks;

    return params;
  },
  target: searchRepos.start,
});

export { $searchedRepos, $searchedReposIsEmpty, $searchedReposIsLoading };
