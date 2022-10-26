import { memo } from 'react';
import { Form, SelectPicker } from 'rsuite';

import { SEARCH_REPOS_SORT } from '../../model/models';

const SELECT_DATA = SEARCH_REPOS_SORT.map((item) => ({
  label: item.charAt(0).toUpperCase() + item.slice(1),
  value: item,
}));

const SearchReposSortFieldView = () => {
  return (
    <Form.Group controlId='sort'>
      <Form.Control
        accepter={SelectPicker}
        cleanable={false}
        data={SELECT_DATA}
        name='sort'
        searchable={false}
      />
    </Form.Group>
  );
};

export const SearchReposSortField = memo(SearchReposSortFieldView);
