import { reflect } from '@effector/reflect';
import { useCallback } from 'react';

import { Button, Row } from '@/shared/components';

import {
  $hasNextPage,
  $hasPrevPage,
  $page,
  $repositoriesIsLoading,
  nextPage,
  prevPage,
} from '../model';

type SearchRepositoriesPaginationProps = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  isLocked: boolean;
  prev: () => void;
  next: () => void;
};

const SearchRepositoriesPaginationView = ({
  page,
  hasPrev,
  hasNext,
  isLocked,
  prev,
  next,
}: SearchRepositoriesPaginationProps) => {
  const handlePrevPage = useCallback(() => {
    prev();
    window.scrollTo({ top: 0 });
  }, []);

  const handleNextPage = useCallback(() => {
    next();
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Row css={{ justifyContent: 'center', gap: '$xl', mt: 'auto' }}>
      <Button
        auto
        css={{ px: '$8' }}
        disabled={!hasPrev || isLocked}
        onClick={handlePrevPage}
      >
        {'<'}
      </Button>
      <Button
        auto
        light
        css={{ pointerEvents: 'none', px: '$8' }}
        tabIndex={-1}
      >
        {page}
      </Button>
      <Button
        auto
        css={{ px: '$8' }}
        disabled={!hasNext || isLocked}
        onClick={handleNextPage}
      >
        {'>'}
      </Button>
    </Row>
  );
};

export const SearchRepositoriesPagination = reflect({
  view: SearchRepositoriesPaginationView,
  bind: {
    page: $page,
    hasPrev: $hasPrevPage,
    hasNext: $hasNextPage,
    prev: prevPage,
    next: nextPage,
    isLocked: $repositoriesIsLoading,
  },
});
