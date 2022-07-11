import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Authentication } from "routes/Authentication";
import { RootStackParamList } from "shared/navigation/Routes";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Authentication" component={Authentication} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
