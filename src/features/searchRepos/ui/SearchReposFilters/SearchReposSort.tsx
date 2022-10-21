import { reflect } from '@effector/reflect';
import { Text, Tooltip } from '@nextui-org/react';
import { memo } from 'react';

import { Button, Row } from '@/shared/components';

import { searchReposParams } from '../../model';
import { TSearchReposParams } from '../../model/models';

type TSortOption = {
  key: NonNullable<TSearchReposParams['sort']>;
  name: string;
};

const SORT: TSortOption[] = [
  { key: 'stars', name: 'stars' },
  { key: 'forks', name: 'forks' },
  { key: 'help-wanted-issues', name: 'issues' },
  { key: 'updated', name: 'updated' },
];

type TSearchReposSortProps = {
  sort: NonNullable<TSearchReposParams['sort']>;
  set: (sort: NonNullable<TSearchReposParams['sort']>) => void;
};

const SearchReposSortView = ({ sort, set }: TSearchReposSortProps) => {
  return (
    <Tooltip
      hideArrow
      keepMounted
      content={
        <Button.Group vertical css={{ m: 0, mt: '$xs' }}>
          {SORT.map((option) => (
            <Button
              flat={sort !== option.key}
              key={option.key}
              ripple={false}
              onPress={() => set(option.key)}
            >
              {option.name}
            </Button>
          ))}
        </Button.Group>
      }
      css={{
        backgroundColor: 'transparent',
        p: 0,
        m: 0,
      }}
      offset={0}
      placement='bottomEnd'
      shadow={false}
      visible={true}
    >
      <Row css={{ alignItems: 'center' }}>
        <Button auto flat>
          <Text b color='primary' css={{ mr: '0.2rem' }}>
            Sort:
          </Text>
          <Text b>{SORT.find((option) => option.key === sort)?.name}</Text>
        </Button>
      </Row>
    </Tooltip>
  );
};

export const SearchReposSort = memo(
  reflect({
    view: SearchReposSortView,
    bind: {
      sort: searchReposParams.$sort,
      set: searchReposParams.setSort,
    },
  }),
);
