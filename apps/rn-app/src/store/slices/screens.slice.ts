import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createPersistReducer } from '../persist/utils';
import { HomeScreenMetadata } from '../../types';
import { fetchScreenById } from './screens.thunks';

const name = 'screens';

export interface ScreensState {
  loading: boolean;
  home: HomeScreenMetadata | undefined;
}

const initialState = {
  loading: false,
  home: undefined,
} satisfies ScreensState as ScreensState;

const screensSlice = createSlice({
  name,
  initialState,
  reducers: {
    setHomeScreen(state, action: PayloadAction<HomeScreenMetadata>) {
      state.home = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchScreenById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchScreenById.fulfilled, (state, action) => {
      state.home = action.payload;
    });
    builder.addCase(fetchScreenById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setHomeScreen } = screensSlice.actions;
export const screensReducer = createPersistReducer(screensSlice.reducer, {
  key: name,
});
