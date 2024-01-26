import { createSlice } from '@reduxjs/toolkit';

import type { ReduxAction } from '@redux/types';

export type SystemLike = 'system-like';

export type AppSettings = {
  appVersion: string;
  appName: string;
  language: 'en' | 'ru';
  theme: 'dark' | 'light' | SystemLike;
};

const initialState: AppSettings = {
  appVersion: '0.0.0',
  appName: 'React Vite Application',
  language: 'en',
  theme: 'system-like',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    /** Change language with action. */
    changeLang(state, action: ReduxAction<AppSettings['language']>) {
      state.language = action.payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
