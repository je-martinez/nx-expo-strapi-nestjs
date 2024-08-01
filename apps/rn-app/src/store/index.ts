import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { screensReducer } from './slices/screens.slice';

export const store = configureStore({
  reducer: combineReducers({
    screens: screensReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 128,
        ignoredActions: ['persist/PERSIST'],
      },
      immutableCheck: {
        warnAfter: 128,
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
