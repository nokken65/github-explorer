import { FormHTMLAttributes, useEffect } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

import { Input } from './Input';

type FormProps<T extends FieldValues> = FormHTMLAttributes<HTMLFormElement> & {
  methods: UseFormReturn<T>;
  resetOnSubmit?: boolean;
};

const Form = function <T extends FieldValues>({
  methods,
  resetOnSubmit = false,
  children,
  ...props
}: FormProps<T>) {
  useEffect(() => {
    if (resetOnSubmit && methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods.formState, methods.reset]);

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
