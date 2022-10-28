import { createRoute } from 'atomic-router';

export const homeRoute = createRoute();
export const repoRoute = createRoute<{ owner: string; repo: string }>();
export const notFoundRoute = createRoute();

export const routes = [
  { path: '/', route: homeRoute },
  { path: '/:owner/:repo', route: repoRoute },
  { path: '/404', route: notFoundRoute },
];
