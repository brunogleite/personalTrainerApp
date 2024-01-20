import { useFonts } from 'expo-font';
import { SplashScreen, Slot } from 'expo-router';
import React, { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import config from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { queryClient } from '@/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/provider/authProvider';
import { DaysProvider } from '@/provider/daysProvider';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DaysProvider>
            <Theme name={'blue'}>
              <Slot />
            </Theme>
        </DaysProvider>
        </AuthProvider>
          </QueryClientProvider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}