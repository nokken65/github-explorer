import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import { ReactNode } from 'react';

import { darkModeModel } from '@/entities/DarkMode';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

export const withNextUI = (component: () => ReactNode) => () => {
  const isDarkMode = useUnit(darkModeModel.$isDarkMode);

  return (
    <NextUIProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {component()}
    </NextUIProvider>
  );
};
