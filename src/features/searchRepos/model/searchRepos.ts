import { sample } from 'effector';

import { searchRepos } from '../api';
import { TSearchReposParams } from './models';
import { searchReposFilters } from './searchReposFilters';
import { searchReposForm } from './searchReposForm';
import { searchReposPagination } from './searchReposPagination';

const $searchedRepos = searchRepos.$data.map((data) => data?.items ?? []);

const $searchedReposIsEmpty = searchRepos.$data.map((data) =>
  data !== null ? data.items.length === 0 : true,
);

const $searchedReposIsLoading = searchRepos.$pending;

sample({
  clock: [
    searchReposForm.formSubmitted,
    searchReposFilters.$sort,
    searchReposFilters.$order,
    searchReposPagination.$page,
  ],
  source: {
    values: searchReposForm.$values,
    query: searchReposForm.$query,
    page: searchReposPagination.$page,
    perPage: searchReposPagination.$perPage,
  },
  filter: ({ query }) => query.length > 0,
  fn: ({ values, page, perPage }) => {
    const params: TSearchReposParams = { q: '' };

    params.page = page;
    params.per_page = perPage;

    params.sort = values.sort;
    params.order = values.order;

    const queryLangs = Boolean(values.langs.length)
      ? values.langs.reduce((q, lang) => `${q} language:"${lang}"`, '')
      : '';

    const queryOwners = Boolean(values.owners.length)
      ? values.owners.reduce((q, owner) => `${q} user:"${owner}"`, '')
      : '';

    const queryStars = Boolean(parseInt(values.stars.to ?? '', 10))
      ? ` stars:${values.stars.operator === '..' ? values.stars.from : ''}${
          values.stars.operator
        }${values.stars.to}`
      : '';

    const queryForks = Boolean(parseInt(values.forks.to ?? '', 10))
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
