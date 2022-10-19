import { list, reflect } from '@effector/reflect';
import { useMemo } from 'react';

import { Button } from '@/shared/components';

import { $searchHistoryList, clearSearchHistory } from '../model';
import { SearchHistoryItem } from '../model/models';

type SearchHistoryItemProps = SearchHistoryItem;

const SearchHistoryItemView = ({
  text,
  searchedAt,
}: SearchHistoryItemProps) => {
  const formattedSearchedAt = useMemo(
    () => new Date(searchedAt).toLocaleString(),
    [searchedAt],
  );

  return (
    <li>
      <Button
        className='w-full justify-between gap-x-1 whitespace-nowrap'
        rounded={false}
        type='ghost'
      >
        <p className='justify-self-start'>{text}</p>
        <span className='justify-self-end overflow-hidden text-ellipsis text-[10px] text-gray-500/60'>
          {formattedSearchedAt}
        </span>
      </Button>
    </li>
  );
};

const SearchHistoryList = list({
  view: SearchHistoryItemView,
  source: $searchHistoryList,
  mapItem: {
    text: (item) => item.text,
    searchedAt: (item) => item.searchedAt,
  },
});

type SearchHistoryProps = {
  clear: () => void;
};

const SearchHistoryView = ({ clear }: SearchHistoryProps) => {
  return (
    <div className='flex flex-col items-end'>
      <Button className='text-xs' type='ghost' onClick={clear}>
        Clear all
      </Button>
      <ul className='flex w-full flex-col'>
        <SearchHistoryList />
      </ul>
    </div>
  );
};

export const SearchHistory = reflect({
  view: SearchHistoryView,
  bind: { clear: clearSearchHistory },
});
