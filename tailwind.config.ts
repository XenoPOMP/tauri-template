import { RecordValue } from '@xenopomp/advanced-types';
import { getObjectKeys } from '@xenopomp/advanced-utils';

import { Config } from 'tailwindcss';
import tailwindThemer from 'tailwindcss-themer';

import { themesMap } from './src/assets/themes';

type ThemeMapEntry = RecordValue<typeof themesMap>;

/**
 * Filter themes according to filter callback result.
 * @param filterCallback
 */
const filterThemes = (filterCallback: (entr: ThemeMapEntry) => boolean) => {
  return getObjectKeys(themesMap)
    .map(themeName => themesMap[themeName])
    .filter(filterCallback);
};

const twConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindThemer({
      defaultTheme: {
        extend: filterThemes(({ isDefault }) => !!isDefault)[0].theme,
      },
      themes: filterThemes(({ isDefault }) => !isDefault).map(
        ({ name, theme }) => ({
          name,
          extend: {
            ...theme,
          },
        })
      ),
    }),
  ],
};

export default twConfig;
