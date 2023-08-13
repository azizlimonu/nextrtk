import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import todoReducer from './slice/todoSlice';
import cartReducer from './slice/cartSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
};

const baseReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, baseReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);