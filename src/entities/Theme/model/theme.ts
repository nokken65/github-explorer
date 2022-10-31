import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

import { TTheme } from './models';

const initialTheme = (): TTheme => {
  const theme = localStorage.getItem('theme') ?? 'light';

  document.documentElement.classList.add(theme);

  return theme as TTheme;
};

const themeSetted = createEvent<TTheme>();

const $theme = createStore<TTheme>(initialTheme()).on(
  themeSetted,
  (_, payload) => payload,
);

sample({
  clock: $theme,
  fn: (theme) => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
  },
  target: [],
});

persist({ store: $theme, key: 'theme' });

export { $theme, themeSetted };
