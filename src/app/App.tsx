import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Tamagui from "../../tamagui.config";
import AppNavigator from "./AppNavigator";

const App = () => {
  return (
    <Tamagui.Provider>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <AppNavigator />
      </SafeAreaProvider>
    </Tamagui.Provider>
  );
};

export default registerRootComponent(App);
