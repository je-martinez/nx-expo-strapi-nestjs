import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createPersistReducer } from '../persist/utils';
import { HomeScreenMetadata } from '../../types';

export interface ScreensState {
  home: HomeScreenMetadata | undefined;
}

const initialState = { home: undefined } satisfies ScreensState as ScreensState;
const name = 'screens';

const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    setHomeScreen(state, action: PayloadAction<HomeScreenMetadata>) {
      state.home = action.payload;
    },
  },
});

export const { setHomeScreen } = counterSlice.actions;
export const counterReducer = createPersistReducer(counterSlice.reducer, {
  key: name,
});
