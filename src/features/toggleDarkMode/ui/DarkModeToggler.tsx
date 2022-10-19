import { useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { memo } from 'react';

import { Button } from '@/shared/components';
import { ReactComponent as DarkIcon } from '@/shared/icons/dark-icon.svg';
import { ReactComponent as LightIcon } from '@/shared/icons/light-icon.svg';

const DarkModeTogglerView = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Button
      auto
      light
      animated={false}
      icon={
        isDark ? (
          <DarkIcon height='18px' width='18px' />
        ) : (
          <LightIcon height='18px' width='18px' />
        )
      }
      ripple={false}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    />
  );
};

export const DarkModeToggler = memo(DarkModeTogglerView);
