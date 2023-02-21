import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FAQScreen, MenuScreen, ProfileAndSettings, ProfileScreen, SettingsScreen } from "../src/screens/index";

const Stack = createNativeStackNavigator();

export const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
      />
      <Stack.Screen 
      name="Profile" 
      component={ProfileScreen} 
      />
      <Stack.Screen 
      name="Settings" 
      component={SettingsScreen} 
      />
      <Stack.Screen
        name="ProfileAndSettings"
        component={ProfileAndSettings}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
      />
    </Stack.Navigator>
  );
};