import { createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

export const withTheme = (component: () => ReactNode) => () =>
  (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      {component()}
    </NextThemesProvider>
  );
