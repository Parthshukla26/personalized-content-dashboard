// src/store/preferencesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreferencesState {
  categories: string[];
  darkMode: boolean;
  favorites: string[]; // will store IDs of favorited items
}

const initialState: PreferencesState = {
  categories: ['technology', 'sports'],
  darkMode: false,
  favorites: [],
};

const prefs = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    addFavorite(state, action: PayloadAction<string>) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
  },
});

export const { setCategories, toggleDarkMode, addFavorite, removeFavorite } = prefs.actions;
export default prefs.reducer;
