import { reflect } from '@effector/reflect';
import { memo } from 'react';
import { Pagination } from 'rsuite';

import { searchRepos } from '../api';
import { searchReposPagination } from '../model';

type TSearchReposPaginationProps = {
  page: number;
  perPage: number;
  total: number;
  isDisabled: boolean;
  set: (page: number) => void;
};

const SearchReposPaginationView = ({
  page,
  perPage,
  total,
  isDisabled,
  set,
}: TSearchReposPaginationProps) => {
  const handleChange = (newPage: number) => {
    set(newPage);
    window.scrollTo({ top: 0 });
  };

  return (
    <Pagination
      boundaryLinks
      ellipsis
      activePage={page}
      className='justify-center'
      disabled={isDisabled}
      limit={perPage}
      maxButtons={10}
      size='sm'
      total={total}
      onChangePage={handleChange}
    />
  );
};

export const SearchReposPagination = memo(
  reflect({
    view: SearchReposPaginationView,
    bind: {
      page: searchReposPagination.$page,
      perPage: searchReposPagination.$perPage,
      total: searchReposPagination.$total,
      isDisabled: searchRepos.$pending,
      set: searchReposPagination.pageSetted,
    },
  }),
);
