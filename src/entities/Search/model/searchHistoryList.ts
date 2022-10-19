import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

import { SearchHistoryItem } from './models';

const addSearchHistoryItem = createEvent<SearchHistoryItem['text']>();
const clearSearchHistory = createEvent<void>();

const $searchHistoryList = createStore<SearchHistoryItem[]>([]);

sample({
  clock: addSearchHistoryItem,
  source: $searchHistoryList,
  fn: (list, itemText) => {
    const existItem = list.find((item) => item.text === itemText);

    if (!existItem) {
      const newItem: SearchHistoryItem = {
        text: itemText,
        searchedAt: new Date(),
      };

      return list.length <= 20
        ? [newItem, ...list]
        : [newItem, ...list.slice(0, -1)];
    } else {
      return new Date(existItem.searchedAt).getTime() < new Date().getTime()
        ? [
            { text: existItem.text, searchedAt: new Date() },
            ...list.filter((item) => item.text !== itemText),
          ]
        : list;
    }
  },
  target: $searchHistoryList,
});

sample({
  clock: clearSearchHistory,
  fn: () => [],
  target: $searchHistoryList,
});

persist({
  store: $searchHistoryList,
  key: 'searchHistory',
});

export { $searchHistoryList, addSearchHistoryItem, clearSearchHistory };
