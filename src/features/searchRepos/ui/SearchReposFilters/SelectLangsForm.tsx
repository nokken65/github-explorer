import { reflect } from '@effector/reflect';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

import { langModel } from '@/entities/Lang';
import { Button, Form } from '@/shared/components';
import { ReactComponent as AddIcon } from '@/shared/icons/add-icon.svg';

import { selectLangsFormSubmitted } from '../../model';
import { TSelectLangsFormInputs } from '../../model/models';
import { selectLangsSchema } from '../../validation';

type TSelectLangsFormProps = {
  langs: string[];
  onSubmit: (data: TSelectLangsFormInputs) => void;
};

const SelectLangsFormView = ({ langs, onSubmit }: TSelectLangsFormProps) => {
  const methods = useForm<TSelectLangsFormInputs>({
    defaultValues: {
      lang: '',
    },
    resolver: zodResolver(selectLangsSchema),
    mode: 'onSubmit',
  });

  return (
    <Form
      resetOnSubmit
      methods={methods}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <Form.Input<TSelectLangsFormInputs>
        bordered
        contentRight={<Button auto flat icon={<AddIcon />} type='submit' />}
        fullWidth={false}
        list='langs'
        name='lang'
        placeholder='C++, Go, Java...'
        width='200px'
      />

      <datalist id='langs'>
        {langs.map((l) => (
          <option key={l} value={l} />
        ))}
      </datalist>
    </Form>
  );
};

export const SelectLangsForm = memo(
  reflect({
    view: SelectLangsFormView,
    bind: { langs: langModel.$langsList, onSubmit: selectLangsFormSubmitted },
  }),
);
