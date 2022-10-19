import { reflect } from '@effector/reflect';
import { Badge } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useHotkeys } from 'react-hotkeys-hook';

import { Form } from '@/shared/components';
import { myzodResolver } from '@/shared/utils';

import { searchRepositoriesFormSubmitted } from '../model';
import { SearchRepositoriesInputs } from '../model/models';
import { searchRepositoriesSchema } from '../validation';

type SearchRepositoriesFormProps = {
  onSubmit: (data: SearchRepositoriesInputs) => void;
};

const SearchRepositoriesFormView = ({
  onSubmit,
}: SearchRepositoriesFormProps) => {
  const methods = useForm<SearchRepositoriesInputs>({
    resolver: myzodResolver(searchRepositoriesSchema),
    defaultValues: {
      query: '',
    },
    mode: 'all',
  });

  useHotkeys('ctrl+k', (e) => {
    e.preventDefault();
    methods.setFocus('query', { shouldSelect: true });
  });

  return (
    <Form
      methods={methods}
      style={{ width: '100%' }}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <Form.Input<SearchRepositoriesInputs>
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
        name='query'
        placeholder='Search...'
      />
    </Form>
  );
};

export const SearchRepositoriesForm = reflect({
  view: SearchRepositoriesFormView,
  bind: {
    onSubmit: searchRepositoriesFormSubmitted,
  },
});
