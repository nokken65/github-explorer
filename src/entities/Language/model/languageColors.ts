import { createEffect, createStore } from 'effector';

import { TRecordLanguagesColors } from './models';

const loadLanguagesColorsFx = createEffect<void, TRecordLanguagesColors>(
  async () => {
    const res = await fetch('/data/languages-colors.json');

    if (res.ok && res.status === 200) {
      return res.json();
    }

    throw new Error(res.statusText);
  },
);

const $languagesColors = createStore<TRecordLanguagesColors>(
  {} as TRecordLanguagesColors,
).on(loadLanguagesColorsFx.doneData, (_, payload) => payload);

loadLanguagesColorsFx.fail.watch(({ error }) => console.error(error));

export { $languagesColors, loadLanguagesColorsFx };
