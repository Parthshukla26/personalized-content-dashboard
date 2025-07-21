// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from './preferencesSlice';

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    // (we’ll add contentSlice later)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
