import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectHomeScreen, selectLoading } from '../store/slices/screens.slice';
import { fetchScreenByPath } from '../store/slices/screens.thunks';

export default function useScreens() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const homeScreen = useAppSelector(selectHomeScreen);
  const getScreenByPath = (path: string) => dispatch(fetchScreenByPath(path));
  return { loading, homeScreen, getScreenByPath };
}
