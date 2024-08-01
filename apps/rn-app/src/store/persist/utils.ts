import { Reducer } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import { reduxStorage } from '.';

interface PersistOptions<S> extends Partial<PersistConfig<S>> {
  key: string;
}

export const createPersistReducer = <S>(
  reducer: Reducer<S>,
  { key, ...rest }: PersistOptions<S>
) =>
  persistReducer(
    {
      key,
      ...rest,
      storage: reduxStorage,
    },
    reducer
  );
