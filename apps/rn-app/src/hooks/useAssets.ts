import { useAppStore } from '../store';

export default function useAssets() {
  const { text } = useAppStore.getState().assets;
  const { reset, updateText } = useAppStore.getState();

  return { text, reset, updateText };
}
