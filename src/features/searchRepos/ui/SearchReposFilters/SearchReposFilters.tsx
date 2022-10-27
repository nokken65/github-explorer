import { reflect } from '@effector/reflect';
import { memo, useState } from 'react';
import { Button, Container, Drawer } from 'rsuite';

import { searchReposForm } from '../../model';
import { SearchReposForksField } from './SearchReposForksField';
import { SearchReposLangsField } from './SearchReposLangsField';
import { SearchReposOrderField } from './SearchReposOrderField';
import { SearchReposOwnersField } from './SearchReposOwnersField';
import { SearchReposSortField } from './SearchReposSortField';
import { SearchReposStarsField } from './SearchReposStarsField';

type TSearchReposFiltersProps = {
  submit: () => void;
};

const SearchReposFiltersView = ({ submit }: TSearchReposFiltersProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const show = () => setIsShow(true);
  const hide = () => setIsShow(false);

  return (
    <>
      <Container className='flex-row items-center justify-between gap-4'>
        <SearchReposSortField />
        <SearchReposOrderField />
        <Button
          appearance='subtle'
          className='ml-auto flex items-center gap-2'
          onClick={show}
        >
          Filters
        </Button>
      </Container>

      <Drawer open={isShow} placement='right' size='xs' onClose={hide}>
        <Drawer.Header>
          <Drawer.Title>Filters</Drawer.Title>
          <Drawer.Actions className='-mr-5'>
            <Button
              appearance='primary'
              onClick={() => {
                submit();
                hide();
              }}
            >
              Search
            </Button>
          </Drawer.Actions>
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

export const SearchReposFilters = memo(
  reflect({
    view: SearchReposFiltersView,
    bind: {
      submit: searchReposForm.formSubmitted,
    },
  }),
);
