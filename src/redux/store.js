import { configureStore } from '@reduxjs/toolkit';
import { namesReducers } from './namesSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    names: namesReducers,
    // filters: filtersReducer,
  },
});
