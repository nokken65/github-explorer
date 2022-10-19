import { createClient } from '@urql/core';

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => {
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
