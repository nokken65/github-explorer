import {
  Input as NextUIInput,
  InputProps as NextUIInputProps,
  SimpleColors,
  StyledInput,
  StyledInputContainer,
} from '@nextui-org/react';
import { Controller, Path, useFormContext } from 'react-hook-form';

import { genericMemo } from '@/shared/types';

type InputProps<T> = Omit<Partial<NextUIInputProps>, 'name'> & {
  name: Path<T>;
};

const InputView = function <T>({
  name,
  contentRightStyling = false,
  css,
  ...props
}: InputProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const statusColor: SimpleColors =
          fieldState.isDirty && fieldState.error?.message ? 'error' : 'default';

        return (
          <NextUIInput
            fullWidth
            aria-label='hidden'
            color={statusColor}
            contentRightStyling={contentRightStyling || false}
            css={{
              ...css,
              [`& ${StyledInput}`]: {
                fontSize: '1rem',
              },
              [`& ${StyledInputContainer}`]: {
                transform: 'unset',
              },
            }}
            helperColor={statusColor}
            helperText={fieldState.error?.message}
            status={statusColor}
            {...props}
            {...field}
            value={field.value || ''}
            // onChange={(e) => input.onChange(e.type === 'click' ? '' : e)}
          />
        );
      }}
    />
  );
};

export const Input = genericMemo(InputView);
