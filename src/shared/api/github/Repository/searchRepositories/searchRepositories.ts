import { client } from '../../base';
import { SearchRepositoriesDocument } from '../../types';
import type {
  SearchRepositoriesResult,
  SearchRepositoriesVariables,
} from './models';

export const searchRepositories = async (
  params: SearchRepositoriesVariables,
) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v != null),
  );
  const res = await client
    .query<SearchRepositoriesResult, SearchRepositoriesVariables>(
      SearchRepositoriesDocument,
      filteredParams as SearchRepositoriesVariables,
    )
    .toPromise();

  if (res.error) {
    return Promise.reject(new Error(res.error.message));
  }

  if (!res.data) {
    return Promise.reject(new Error('Data is undefined!'));
  } else {
    return Promise.resolve(res.data);
  }
};
