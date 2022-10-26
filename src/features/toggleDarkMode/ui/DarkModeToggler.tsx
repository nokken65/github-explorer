import { reflect } from '@effector/reflect';
import { IconButton } from 'rsuite';

import { darkModeModel } from '@/entities/DarkMode';
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
    <IconButton
      appearance='subtle'
      icon={isDarkMode ? <DarkIcon /> : <LightIcon />}
      onClick={toggleDarkMode}
    />
  );
};

export const DarkModeToggler = reflect({
  view: DarkModeTogglerView,
  bind: {
    isDarkMode: darkModeModel.$isDarkMode,
    toggleDarkMode: darkModeModel.darkModeToggled,
  },
});
