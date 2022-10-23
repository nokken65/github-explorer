import { Collapse, Text } from '@nextui-org/react';
import { memo } from 'react';

import { Row } from '@/shared/components';

import { SearchReposByLang } from './SearchReposByLang';
import { SearchReposSort } from './SearchReposSort';
import { SearchReposSortOrder } from './SearchReposSortOrder';

const SearchReposFiltersView = () => {
  return (
    <Collapse
      contentLeft={
        <Row wrap='nowrap'>
          <SearchReposSort />
          <SearchReposSortOrder />
        </Row>
      }
      divider={false}
      title={
        <Text
          color='primary'
          css={{
            width: '100%',
            textAlign: 'right',
            pr: '$4',
            fontWeight: '$bold',
          }}
        >
          Filters
        </Text>
      }
    >
      <Row
        css={{
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
        }}
      >
        <SearchReposByLang />
      </Row>
    </Collapse>
  );
};

export const SearchReposFilters = memo(SearchReposFiltersView);
