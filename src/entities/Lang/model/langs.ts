import { createEffect, createStore } from 'effector';

import { TRecordLangs } from './models';

const loadLangsFx = createEffect<void, TRecordLangs>(async () => {
  const res = await fetch('/data/languages.json');

  if (res.ok && res.status === 200) {
    return res.json();
  }

  throw new Error(res.statusText);
});

const $langs = createStore<TRecordLangs>({} as TRecordLangs);

const $langsList = $langs.map((langs) => Object.keys(langs) ?? []);

$langs.on(loadLangsFx.doneData, (_, payload) => payload);

loadLangsFx.fail.watch(({ error }) => console.error(error));

export { $langs, $langsList, loadLangsFx };
