import { memo, useState } from 'react';
import { Button, Container, Drawer } from 'rsuite';

import { SearchReposForksField } from './SearchReposForksField';
import { SearchReposLangsField } from './SearchReposLangsField';
import { SearchReposOrderField } from './SearchReposOrderField';
import { SearchReposOwnersField } from './SearchReposOwnersField';
import { SearchReposSortField } from './SearchReposSortField';
import { SearchReposStarsField } from './SearchReposStarsField';

const SearchReposFiltersView = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Container className='flex-row items-center justify-between gap-4'>
        <SearchReposSortField />
        <SearchReposOrderField />
        <Button
          appearance='subtle'
          className='ml-auto flex items-center gap-2'
          onClick={() => setShow(true)}
        >
          Filters
        </Button>
      </Container>

      <Drawer
        open={show}
        placement='right'
        size='xs'
        onClose={() => setShow(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Filters</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className='flex flex-col gap-4 p-4'>
          <SearchReposLangsField />
          <SearchReposOwnersField />
          <SearchReposStarsField />
          <SearchReposForksField />
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export const SearchReposFilters = memo(SearchReposFiltersView);
