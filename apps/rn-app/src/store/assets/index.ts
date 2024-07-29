import { createSliceWithImmer } from 'zustand-slices/immer';
import { initialState } from './types';

const assetsSlice = createSliceWithImmer({
  name: 'assets',
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
