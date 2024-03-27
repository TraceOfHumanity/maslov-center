import { configureStore } from '@reduxjs/toolkit';

import popupSlice from './features/popupSlice';
import themeSlice from './features/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    popups: popupSlice,
  },
});
