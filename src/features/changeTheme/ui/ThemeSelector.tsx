import { reflect } from '@effector/reflect';
import { IconButton } from 'rsuite';

import { type TTheme, themeModel } from '@/entities/Theme';
import { ReactComponent as DarkIcon } from '@/shared/icons/dark-icon.svg';
import { ReactComponent as LightIcon } from '@/shared/icons/light-icon.svg';

type TThemeSelectorProps = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};

const ThemeSelectorView = ({ theme, setTheme }: TThemeSelectorProps) => {
  return (
    <IconButton
      appearance='subtle'
      icon={theme === 'dark' ? <DarkIcon /> : <LightIcon />}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  );
};

export const ThemeSelector = reflect({
  view: ThemeSelectorView,
  bind: {
    theme: themeModel.$theme,
    setTheme: themeModel.themeSetted,
  },
});
