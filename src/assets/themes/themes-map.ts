import {
  type AppSettings,
  type SystemLike,
} from '@redux/reducers/appSettingsSlice';

import { type CustomTheme, defaultTheme, lightTheme } from '../themes';

export const themesMap: Record<
  Exclude<AppSettings['theme'], SystemLike>,
  {
    name: string;
    theme: CustomTheme;
    isDefault?: boolean;
  }
> = {
  dark: {
    name: 'dark-theme',
    theme: defaultTheme,
    isDefault: true,
  },
  light: {
    name: 'light-theme',
    theme: lightTheme,
  },
};
