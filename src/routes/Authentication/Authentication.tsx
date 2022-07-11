import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthenticationStackParamList } from "shared/navigation/Routes";

import { Onboarding } from "./Onboarding";

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParamList>();

const Authentication = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default Authentication;
