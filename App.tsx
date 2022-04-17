import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { LogBox } from "react-native";

// TODO: fix the sentry issue
// Sentry.init({
//   dsn: "https://27d4a741b4264cb3a5f051ea9a8ffc68@o125041.ingest.sentry.io/6096966",
//   debug: true, // MAKE IT FALSE IN PRODUCTION
//   enableNative: false,
// });

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// export default Sentry.wrap(App);

export default App;
