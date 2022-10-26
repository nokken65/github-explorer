import { memo } from 'react';
import { Container } from 'rsuite';

import { ReactComponent as EmptyIcon } from '@/shared/icons/empty-icon.svg';

const SearchReposEmptyView = () => {
  return (
    <Container className='flex items-center justify-center p-16'>
      <EmptyIcon className='h-24 w-24' />
      <p className='font-bold'>Empty</p>
    </Container>
  );
};

export const SearchReposEmpty = memo(SearchReposEmptyView);
