import { reflect } from '@effector/reflect';
import { Pagination } from '@nextui-org/react';
import { useCallback } from 'react';

import { Row } from '@/shared/components';

import { $page, $totalPages, setPage } from '../model';

type SearchReposPaginationProps = {
  page: number;
  total: number;
  set: (page: number) => void;
};

const SearchReposPaginationView = ({
  page,
  total,
  set,
}: SearchReposPaginationProps) => {
  const handleChangePage = useCallback((newPage: number) => {
    set(newPage);
    // window.scrollTo({ top: 0 });
  }, []);

  return (
    <Row css={{ justifyContent: 'center' }}>
      <Pagination
        as='ul'
        initialPage={page}
        total={total}
        onChange={handleChangePage}
      />
    </Row>
  );
};

export const SearchReposPagination = reflect({
  view: SearchReposPaginationView,
  bind: {
    page: $page,
    total: $totalPages,
    set: setPage,
  },
});
