import { ReactNode } from 'react';
import { CustomProvider } from 'rsuite';

export const withTheme = (component: () => ReactNode) => () => {
  return <CustomProvider>{component()}</CustomProvider>;
};
