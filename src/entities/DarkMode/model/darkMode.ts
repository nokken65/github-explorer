import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';

const toggleDarkMode = createEvent<void>();

const $isDarkMode = createStore<boolean>(false).on(
  toggleDarkMode,
  (state) => !state,
);

persist({ store: $isDarkMode, key: 'dark-mode' });

export { $isDarkMode, toggleDarkMode };
