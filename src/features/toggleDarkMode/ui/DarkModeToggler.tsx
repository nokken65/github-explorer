import { reflect } from '@effector/reflect';

import { darkModeModel } from '@/entities/DarkMode';
import { Button } from '@/shared/components';
import { ReactComponent as DarkIcon } from '@/shared/icons/dark-icon.svg';
import { ReactComponent as LightIcon } from '@/shared/icons/light-icon.svg';

type TDarkModeTogglerProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeTogglerView = ({
  isDarkMode,
  toggleDarkMode,
}: TDarkModeTogglerProps) => {
  return (
    <Button
      auto
      light
      animated={false}
      icon={
        isDarkMode ? (
          <DarkIcon height='18px' width='18px' />
        ) : (
          <LightIcon height='18px' width='18px' />
        )
      }
      ripple={false}
      onPress={toggleDarkMode}
    />
  );
};

export const DarkModeToggler = reflect({
  view: DarkModeTogglerView,
  bind: {
    isDarkMode: darkModeModel.$isDarkMode,
    toggleDarkMode: darkModeModel.toggleDarkMode,
  },
});
