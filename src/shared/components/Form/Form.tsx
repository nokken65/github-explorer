import { FormHTMLAttributes } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

import { Input } from './Input';

type FormProps<T extends FieldValues> = FormHTMLAttributes<HTMLFormElement> & {
  methods: UseFormReturn<T>;
};

const Form = function <T extends FieldValues>({
  methods,
  children,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form noValidate {...props}>
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = Input;

export { Form };
