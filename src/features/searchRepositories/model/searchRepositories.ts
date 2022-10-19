import { createEffect, createStore, sample } from 'effector';

import { githubApi } from '@/shared/api';
import {
  RepositoryPreviewFragment,
  SearchRepositoriesResult,
  SearchRepositoriesVariables,
} from '@/shared/api/github';

const searchRepositoriesFx = createEffect<
  SearchRepositoriesVariables,
  SearchRepositoriesResult
>(async (params) => await githubApi.searchRepositories(params));

const $repositories = createStore<RepositoryPreviewFragment[]>([]).on(
  searchRepositoriesFx.doneData,
  (_, payload) =>
    (payload.search.repositories as RepositoryPreviewFragment[]) ?? [],
);

const $repositoriesIsEmpty = $repositories.map((repos) => !repos.length);
const $repositoriesIsLoading = searchRepositoriesFx.pending;

const $queryVariables = createStore<SearchRepositoriesVariables>({
  query: '',
  first: 3,
  last: null,
  before: null,
  after: null,
});

sample({
  clock: $queryVariables,
  target: searchRepositoriesFx,
});

export {
  $queryVariables,
  $repositories,
  $repositoriesIsEmpty,
  $repositoriesIsLoading,
  searchRepositoriesFx,
};
