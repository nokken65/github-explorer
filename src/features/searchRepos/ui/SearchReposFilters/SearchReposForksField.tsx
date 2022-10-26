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

type TSearchReposForksFieldProps = {
  operator: TSearchReposFormInputs['forks']['operator'];
};

const SearchReposForksFieldView = ({
  operator,
}: TSearchReposForksFieldProps) => {
  return (
    <Form.Group controlId='forks'>
      <Form.ControlLabel>Forks</Form.ControlLabel>
      <InputGroup>
        {operator === '..' && (
          <Form.Control
            accepter={InputNumber}
            min={0}
            name='forks.from'
            style={{ width: '100%' }}
          />
        )}
        <InputGroup.Addon className='p-0'>
          <Form.Control
            accepter={SelectPicker}
            appearance='subtle'
            cleanable={false}
            data={SELECT_DATA}
            name='forks.operator'
            searchable={false}
          />
        </InputGroup.Addon>
        <Form.Control
          accepter={InputNumber}
          min={0}
          name='forks.to'
          style={{ width: '100%' }}
        />
      </InputGroup>
    </Form.Group>
  );
};

export const SearchReposForksField = memo(
  reflect({
    view: SearchReposForksFieldView,
    bind: {
      operator: searchReposForm.$values.map((v) => v.forks.operator),
    },
  }),
);
