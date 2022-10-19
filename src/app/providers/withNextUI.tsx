import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export const withNextUI = (component: () => ReactNode) => () =>
  <NextUIProvider>{component()}</NextUIProvider>;
