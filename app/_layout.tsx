import { Slot, Stack } from 'expo-router';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
