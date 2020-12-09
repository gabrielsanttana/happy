import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Router from './src/routes';
import {useFonts} from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

const App: React.FC = () => {
  const [hasFontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!hasFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
};

export default App;
