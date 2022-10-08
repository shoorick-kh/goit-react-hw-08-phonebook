import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { namesReducers } from './namesSlice';
import { filtersReducer } from './filtersSlice';

const persistConfig = {
  key: 'names',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, namesReducers);

export const store = configureStore({
  reducer: {
    names: persistedContactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
