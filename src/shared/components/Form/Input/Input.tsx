import { ReactNode } from 'react';
import { Controller, Path, useFormContext } from 'react-hook-form';
import {
  type FormControlProps as RSFormControlProps,
  Form,
  InputGroup,
} from 'rsuite';

import { genericMemo } from '@/shared/types';

type InputProps<T> = Omit<Partial<RSFormControlProps>, 'name'> & {
  name: Path<T>;
  before?: ReactNode;
  after?: ReactNode;
};

const InputView = function <T>({
  name,
  before,
  after,
  ...props
}: InputProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <InputGroup inside>
          {before && (
            <InputGroup.Addon className='!p-0'>{before}</InputGroup.Addon>
          )}
          <Form.Control
            errorMessage={fieldState.error?.message}
            errorPlacement='topStart'
            {...props}
            {...field}
          />
          {after && (
            <InputGroup.Addon className='flex h-full -mr-[1px] !p-0'>
              {after}
            </InputGroup.Addon>
          )}
        </InputGroup>
      )}
    />
  );
};

export const Input = genericMemo(InputView);
