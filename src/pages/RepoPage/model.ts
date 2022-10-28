import { createEffect, createStore } from 'effector';

const token = import.meta.env.VITE_GITHUB_TOKEN;

const getRepositoryFx = createEffect<{ owner: string; repo: string }, string>(
  async ({ owner, repo }) => {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Accept: 'application/vnd.github.raw',
          Authorization: token,
        },
      },
    );

    const data: string = await res.text();

    return data;
  },
);

const $readme = createStore<string>('').on(
  getRepositoryFx.doneData,
  (_, payload) => payload,
);

export { $readme, getRepositoryFx };
