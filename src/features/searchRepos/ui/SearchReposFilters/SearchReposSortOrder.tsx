import { reflect } from '@effector/reflect';
import { memo } from 'react';

import { Button } from '@/shared/components';
import { ReactComponent as OrderIcon } from '@/shared/icons/sort-order-icon.svg';

import { searchReposParams } from '../../model';
import { TSearchReposParams } from '../../model/models';

type TSearchReposSortOrderProps = {
  order: NonNullable<TSearchReposParams['order']>;
  set: (order: NonNullable<TSearchReposParams['order']>) => void;
};

const SearchReposSortOrderView = ({
  order,
  set,
}: TSearchReposSortOrderProps) => {
  return (
    <Button
      auto
      flat
      css={{
        transform: `rotate(${order === 'desc' ? 180 : 0}deg);`,
      }}
      icon={<OrderIcon height='18px' width='18px' />}
      ripple={false}
      onPress={() => set(order === 'desc' ? 'asc' : 'desc')}
    />
  );
};

export const SearchReposSortOrder = memo(
  reflect({
    view: SearchReposSortOrderView,
    bind: {
      order: searchReposParams.$order,
      set: searchReposParams.setOrder,
    },
  }),
);
