import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducers, filter: filtersReducer },
});
