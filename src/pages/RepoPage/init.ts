import { chainRoute } from 'atomic-router';

import { repoRoute } from '@/shared/config/routes';

import { getRepositoryFx } from './model';

chainRoute({
  route: repoRoute,
  beforeOpen: {
    effect: getRepositoryFx,
    mapParams: ({ params: { owner, repo } }) => {
      return { owner, repo };
    },
  },
});
