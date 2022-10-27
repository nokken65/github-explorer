import { Schema } from 'rsuite';

import { Paths } from '@/shared/types';

import {
  SEARCH_REPOS_OPERATORS,
  SEARCH_REPOS_SORT,
  SEARCH_REPOS_SORT_ORDER,
  TSearchReposFormInputs,
} from '../model/models';

export const searchReposSchemaModel = Schema.Model<
  Record<Paths<TSearchReposFormInputs>, unknown>
>({
  query: Schema.Types.StringType().maxLength(10, 'Too long query!'),

  sort: Schema.Types.StringType().isOneOf([...SEARCH_REPOS_SORT]),

  order: Schema.Types.StringType().isOneOf([...SEARCH_REPOS_SORT_ORDER]),

  langs: Schema.Types.ArrayType().of(
    Schema.Types.StringType().maxLength(30, 'Too long language name!'),
  ),

  owners: Schema.Types.ArrayType().of(
    Schema.Types.StringType().maxLength(30, 'Too long owner name!'),
  ),

  stars: Schema.Types.ObjectType(),
  'stars.operator': Schema.Types.StringType().isOneOf([
    ...SEARCH_REPOS_OPERATORS,
  ]),
  'stars.from': Schema.Types.NumberType().isInteger().min(0, 'Must be > 0!'),
  'stars.to': Schema.Types.NumberType().isInteger().min(0, 'Must be > 0!'),

  forks: Schema.Types.ObjectType(),
  'forks.operator': Schema.Types.StringType().isOneOf([
    ...SEARCH_REPOS_OPERATORS,
  ]),
  'forks.from': Schema.Types.NumberType().isInteger().min(0, 'Must be > 0!'),
  'forks.to': Schema.Types.NumberType().isInteger().min(0, 'Must be > 0!'),

  pushedTo: Schema.Types.ObjectType(),
  'pushedTo.operator': Schema.Types.StringType().isOneOf([
    ...SEARCH_REPOS_OPERATORS,
  ]),
  'pushedTo.from': Schema.Types.DateType(),
  'pushedTo.to': Schema.Types.DateType(),

  createdAt: Schema.Types.ObjectType(),
  'createdAt.operator': Schema.Types.StringType().isOneOf([
    ...SEARCH_REPOS_OPERATORS,
  ]),
  'createdAt.from': Schema.Types.DateType(),
  'createdAt.to': Schema.Types.DateType(),
});
