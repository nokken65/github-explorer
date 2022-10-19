import { ResultOf, VariablesOf } from '@graphql-typed-document-node/core';

import { SearchRepositoriesDocument } from '../../types';

export type SearchRepositoriesVariables = VariablesOf<
  typeof SearchRepositoriesDocument
>;

export type SearchRepositoriesResult = ResultOf<
  typeof SearchRepositoriesDocument
>;
