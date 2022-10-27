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

type TSearchReposPushedToFieldProps = {
  operator: TSearchReposFormInputs['pushedTo']['operator'];
};

const SearchReposPushedToFieldView = ({
  operator,
}: TSearchReposPushedToFieldProps) => {
  return (
    <Form.Group controlId='pushedTo'>
      <Form.ControlLabel>Pushed to</Form.ControlLabel>
      <InputGroup>
        {operator === '..' && (
          <Form.Control
            accepter={DatePicker}
            format='yyyy-MM-dd'
            name='pushedTo.from'
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
            name='pushedTo.operator'
            searchable={false}
          />
        </InputGroup.Addon>
        <Form.Control
          accepter={DatePicker}
          format='yyyy-MM-dd'
          name='pushedTo.to'
          placement='leftEnd'
          style={{ width: '100%' }}
        />
      </InputGroup>
    </Form.Group>
  );
};

export const SearchReposPushedToField = memo(
  reflect({
    view: SearchReposPushedToFieldView,
    bind: {
      operator: searchReposForm.$values.map((v) => v.pushedTo.operator),
    },
  }),
);
