import { createSliceWithImmer } from 'zustand-slices/immer';
import { ASSETS_SLICE_NAME, initialState } from './types';

const assetsSlice = createSliceWithImmer({
  name: ASSETS_SLICE_NAME,
  value: initialState,
  actions: {
    updateText: (newText: string) => (state) => {
      state.text = newText;
    },
    reset: () => (state) => {
      state.text = '';
    },
  },
});

export { assetsSlice };
