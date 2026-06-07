import React, { useState } from 'react';
import { View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

// App.js limpio: controla la transición entre Splash y Home
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? (
        // Pasamos un callback para que la Splash notifique cuando termina
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <HomeScreen />
      )}
    </View>
  );
}
