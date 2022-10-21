import { reflect } from '@effector/reflect';
import { zodResolver } from '@hookform/resolvers/zod';
import { Badge } from '@nextui-org/react';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { useHotkeys } from 'react-hotkeys-hook';

import { Button, Form, Row } from '@/shared/components';

import { searchReposFormSubmitted, searchReposParams } from '../model';
import { TSearchReposFormInputs } from '../model/models';
import { searchReposSchema } from '../validation';

type TSearchReposFormProps = {
  initial: string;
  onSubmit: (data: TSearchReposFormInputs) => void;
};

const SearchReposFormView = ({ initial, onSubmit }: TSearchReposFormProps) => {
  const methods = useForm<TSearchReposFormInputs>({
    resolver: zodResolver(searchReposSchema),
    defaultValues: {
      q: initial,
    },
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
          <Row css={{ flexWrap: 'nowrap', alignItems: 'center', gap: 0 }}>
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
            <Button auto flat type='submit'>
              Search
            </Button>
          </Row>
        }
        name='q'
        placeholder='Search...'
      />
    </Form>
  );
};

export const SearchReposForm = memo(
  reflect({
    view: SearchReposFormView,
    bind: {
      initial: searchReposParams.$query,
      onSubmit: searchReposFormSubmitted,
    },
  }),
);
