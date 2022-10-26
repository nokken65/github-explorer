import { reflect } from '@effector/reflect';
import { flatten, unflatten } from 'flat';
import { memo } from 'react';
import { Form } from 'rsuite';

import { searchReposForm } from '../model';
import { TSearchReposFormInputs } from '../model/models';
import { searchReposSchemaModel } from '../validation';
import {
  SearchReposFilters,
  SearchReposQueryField,
} from './SearchReposFilters';

type TSearchReposFormProps = {
  values: TSearchReposFormInputs;
  setValues: (data: TSearchReposFormInputs) => void;
  submit: () => void;
};

const SearchReposFormView = ({
  values,
  setValues,
  submit,
}: TSearchReposFormProps) => {
  const handleSubmit = (isValid: boolean) => isValid && submit();

  return (
    <Form
      fluid
      formValue={flatten(values, { safe: true })}
      model={searchReposSchemaModel}
      onChange={(v) => {
        setValues(unflatten(v) as TSearchReposFormInputs);
      }}
      onSubmit={handleSubmit}
    >
      <SearchReposQueryField />

      <SearchReposFilters />
    </Form>
  );
};

export const SearchReposForm = memo(
  reflect({
    view: SearchReposFormView,
    bind: {
      values: searchReposForm.$values,
      setValues: searchReposForm.valuesSetted,
      submit: searchReposForm.formSubmitted,
    },
  }),
);
