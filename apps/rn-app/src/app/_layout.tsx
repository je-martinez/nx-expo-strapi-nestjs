import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SocketWrapper from '../real-time/SocketWrapper';
import { persistor, store } from '../store';

export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketWrapper>
          <SafeAreaView style={{ flex: 1 }}>
            <Slot />
          </SafeAreaView>
        </SocketWrapper>
      </PersistGate>
    </Provider>
  );
}
