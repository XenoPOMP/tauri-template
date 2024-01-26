import { PropsWith } from '@xenopomp/advanced-types';

import { FC, useContext, useEffect } from 'react';

import { useAppSelector } from '@redux/hooks';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  const theme = useAppSelector(state => state.appSettings.theme);

  const classContext = useContext(BodyClassnameContext);

  useEffect(() => {
    // classContext.registerClasses('theme', [styles.themes, styles.dark]);
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
