import { Text } from '@nextui-org/react';
import { memo } from 'react';

import { Column } from '@/shared/components';
import { ReactComponent as EmptyIcon } from '@/shared/icons/empty-icon.svg';

const SearchRepositoriesEmptyView = () => {
  return (
    <Column alignItems='center' css={{ padding: '4rem' }} justify='center'>
      <EmptyIcon style={{ width: '6rem', height: '6rem' }} />
      <Text color='primary' size={24} weight='bold'>
        Empty
      </Text>
    </Column>
  );
};

export const SearchRepositoriesEmpty = memo(SearchRepositoriesEmptyView);
