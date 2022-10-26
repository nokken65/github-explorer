import { useEffect } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { type FormProps as RSFormProps, Form as RSForm } from 'rsuite';

import { Input } from './Input';

type FormProps<T extends FieldValues> = RSFormProps & {
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
      <RSForm noValidate {...props}>
        {children}
      </RSForm>
    </FormProvider>
  );
};

Form.Input = Input;

export { Form };
