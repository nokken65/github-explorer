import { reflect } from '@effector/reflect';
import { Container } from '@nextui-org/react';
import { memo } from 'react';

import { Button } from '@/shared/components';
import { ReactComponent as OrderIcon } from '@/shared/icons/sort-order-icon.svg';

import { searchReposParams } from '../../model';
import { TSearchReposParams } from '../../model/models';

type TSearchReposSortOrderProps = {
  order: NonNullable<TSearchReposParams['order']>;
  toggle: () => void;
};

const SearchReposSortOrderView = ({
  order,
  toggle,
}: TSearchReposSortOrderProps) => {
  return (
    <Button
      auto
      flat
      icon={
        <Container
          css={{
            display: 'flex',
            p: 0,
            m: 0,
            minWidth: '2.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.25s ease 0s',
            transform: `rotate(${order === 'desc' ? 180 : 0}deg);`,
          }}
        >
          <OrderIcon height='18px' width='18px' />
        </Container>
      }
      ripple={false}
      onPress={toggle}
    />
  );
};

export const SearchReposSortOrder = memo(
  reflect({
    view: SearchReposSortOrderView,
    bind: {
      order: searchReposParams.$order,
      toggle: searchReposParams.toggleOrder,
    },
  }),
);
