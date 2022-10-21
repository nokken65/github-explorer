import { reflect } from '@effector/reflect';
import { zodResolver } from '@hookform/resolvers/zod';
import { Badge } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useHotkeys } from 'react-hotkeys-hook';

import { Form } from '@/shared/components';

import { $searchReposParams, searchReposFormSubmitted } from '../model';
import { TSearchReposFormInputs } from '../model/models';
import { searchReposSchema } from '../validation';

type SearchReposFormProps = {
  initials: TSearchReposFormInputs;
  onSubmit: (data: TSearchReposFormInputs) => void;
};

const SearchReposFormView = ({ initials, onSubmit }: SearchReposFormProps) => {
  const methods = useForm<TSearchReposFormInputs>({
    resolver: zodResolver(searchReposSchema),
    defaultValues: initials,
    mode: 'all',
  });

  useHotkeys('ctrl+k', (e) => {
    e.preventDefault();
    methods.setFocus('q', { shouldSelect: true });
  });

  return (
    <Form
      methods={methods}
      style={{ width: '100%' }}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <Form.Input<TSearchReposFormInputs>
        clearable
        contentRight={
          <Badge
            disableOutline
            isSquared
            as='kbd'
            css={{
              background: 'unset',
              h: 'fit-content',
              mx: '$xs',
            }}
            variant='flat'
          >
            ^ K
          </Badge>
        }
        name='q'
        placeholder='Search...'
      />
    </Form>
  );
};

export const SearchReposForm = reflect({
  view: SearchReposFormView,
  bind: {
    initials: $searchReposParams.map((params) => ({ q: params.q })),
    onSubmit: searchReposFormSubmitted,
  },
});
