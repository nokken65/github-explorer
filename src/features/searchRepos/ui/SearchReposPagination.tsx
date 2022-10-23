import { reflect } from '@effector/reflect';
import { Pagination } from '@nextui-org/react';
import { memo, useCallback } from 'react';

import { Row } from '@/shared/components';

import { $totalPages, searchReposParams, setPage } from '../model';

type TSearchReposPaginationProps = {
  page: number;
  total: number;
  set: (page: number) => void;
};

const SearchReposPaginationView = ({
  page,
  total,
  set,
}: TSearchReposPaginationProps) => {
  const handleChangePage = useCallback((newPage: number) => {
    set(newPage);
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Row css={{ justifyContent: 'center' }}>
      <Pagination
        noMargin
        as='ul'
        controls={false}
        initialPage={page}
        page={page}
        total={total}
        onChange={handleChangePage}
      />
    </Row>
  );
};

export const SearchReposPagination = memo(
  reflect({
    view: SearchReposPaginationView,
    bind: {
      page: searchReposParams.$page,
      total: $totalPages,
      set: setPage,
    },
  }),
);
