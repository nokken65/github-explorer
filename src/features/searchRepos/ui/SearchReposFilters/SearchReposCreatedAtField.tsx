import { reflect } from '@effector/reflect';
import { memo } from 'react';
import { DatePicker, Form, InputGroup, SelectPicker } from 'rsuite';

import { searchReposForm } from '../../model';
import {
  SEARCH_REPOS_OPERATORS,
  TSearchReposFormInputs,
} from '../../model/models';

const SELECT_DATA = SEARCH_REPOS_OPERATORS.map((item) => ({
  label: item,
  value: item,
}));

type TSearchReposCreatedAtFieldProps = {
  operator: TSearchReposFormInputs['createdAt']['operator'];
};

const SearchReposCreatedAtFieldView = ({
  operator,
}: TSearchReposCreatedAtFieldProps) => {
  return (
    <Form.Group controlId='createdAt'>
      <Form.ControlLabel>Created at</Form.ControlLabel>
      <InputGroup>
        {operator === '..' && (
          <Form.Control
            accepter={DatePicker}
            format='yyyy-MM-dd'
            name='createdAt.from'
            placement='rightEnd'
            style={{ width: '100%' }}
          />
        )}
        <InputGroup.Addon className='z-10 p-0'>
          <Form.Control
            accepter={SelectPicker}
            appearance='subtle'
            cleanable={false}
            data={SELECT_DATA}
            name='createdAt.operator'
            searchable={false}
          />
        </InputGroup.Addon>
        <Form.Control
          accepter={DatePicker}
          format='yyyy-MM-dd'
          name='createdAt.to'
          placement='leftEnd'
          style={{ width: '100%' }}
        />
      </InputGroup>
    </Form.Group>
  );
};

export const SearchReposCreatedAtField = memo(
  reflect({
    view: SearchReposCreatedAtFieldView,
    bind: {
      operator: searchReposForm.$values.map((v) => v.createdAt.operator),
    },
  }),
);
