import { searchRepos } from '../api';

const $searchedRepos = searchRepos.$data.map((data) => data?.items ?? []);

const $searchedReposIsEmpty = searchRepos.$data.map((data) =>
  data !== null ? data.items.length === 0 : true,
);

const $searchedReposIsLoading = searchRepos.$pending;

export { $searchedRepos, $searchedReposIsEmpty, $searchedReposIsLoading };
