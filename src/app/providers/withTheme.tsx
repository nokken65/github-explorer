import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { CustomProvider } from 'rsuite';

import { darkModeModel } from '@/entities/DarkMode';

export const withTheme = (component: () => ReactNode) => () => {
  const isDarkMode = useUnit(darkModeModel.$isDarkMode);

  return (
    <CustomProvider theme={isDarkMode ? 'dark' : 'light'}>
      {component()}
    </CustomProvider>
  );
};
