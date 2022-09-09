import { configureStore } from '@reduxjs/toolkit';
import toastSlice from './features/toastSlice';

export const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
  },
});
