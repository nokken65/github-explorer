import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';

const darkModeToggled = createEvent();

const $isDarkMode = createStore<boolean>(false).on(
  darkModeToggled,
  (state) => !state,
);

persist({ store: $isDarkMode, key: 'dark-mode' });

export { $isDarkMode, darkModeToggled };
