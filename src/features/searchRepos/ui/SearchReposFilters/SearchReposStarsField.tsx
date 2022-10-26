import { reflect } from '@effector/reflect';
import { memo } from 'react';
import { Form, InputGroup, InputNumber, SelectPicker } from 'rsuite';

import { searchReposForm } from '../../model';
import {
  SEARCH_REPOS_OPERATORS,
  TSearchReposFormInputs,
} from '../../model/models';

const SELECT_DATA = SEARCH_REPOS_OPERATORS.map((item) => ({
  label: item,
  value: item,
}));

type TSearchReposStarsFieldProps = {
  operator: TSearchReposFormInputs['stars']['operator'];
};

const SearchReposStarsFieldView = ({
  operator,
}: TSearchReposStarsFieldProps) => {
  return (
    <Form.Group controlId='stars'>
      <Form.ControlLabel>Stars</Form.ControlLabel>
      <InputGroup>
        {operator === '..' && (
          <Form.Control
            accepter={InputNumber}
            min={0}
            name='stars.from'
            style={{ width: '100%' }}
          />
        )}
        <InputGroup.Addon className='p-0'>
          <Form.Control
            accepter={SelectPicker}
            appearance='subtle'
            cleanable={false}
            data={SELECT_DATA}
            name='stars.operator'
            searchable={false}
          />
        </InputGroup.Addon>
        <Form.Control
          accepter={InputNumber}
          min={0}
          name='stars.to'
          style={{ width: '100%' }}
        />
      </InputGroup>
    </Form.Group>
  );
};

export const SearchReposStarsField = memo(
  reflect({
    view: SearchReposStarsFieldView,
    bind: {
      operator: searchReposForm.$values.map((v) => v.stars.operator),
    },
  }),
);
