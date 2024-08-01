import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createPersistReducer } from '../persist/utils';
import { HomeScreenMetadata } from '../../types';
import { fetchScreenByPath } from './screens.thunks';

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
    builder.addCase(fetchScreenByPath.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchScreenByPath.fulfilled, (state, action) => {
      state.home = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchScreenByPath.rejected, (state) => {
      state.loading = false;
    });
  },
  selectors: {
    selectHomeScreen: (state) => state.home,
    selectLoading: (state) => state.loading,
  },
});

export const { setHomeScreen } = screensSlice.actions;
export const { selectHomeScreen, selectLoading } = screensSlice.selectors;
export const screensReducer = createPersistReducer(screensSlice.reducer, {
  key: name,
});
