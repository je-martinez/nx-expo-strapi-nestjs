import { create } from 'zustand';
import { withSlices } from 'zustand-slices';
import { assetsSlice } from './assets';
import { persist, createJSONStorage } from 'zustand/middleware';
import { appStorage } from './persistor';

const useAppStore = create(
  persist(withSlices(assetsSlice), {
    name: 'app-storage',
    storage: createJSONStorage(() => appStorage),
  })
);

export { useAppStore };
