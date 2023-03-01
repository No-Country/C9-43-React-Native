import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "../src/context/auth-context/AuthContext";
import {
  ContactAgencyScreen,
  FilterScreen,
  LoginScreen,
  MainScreen,
  PropertyScreen,
  Register2Screen,
  RegisterScreen,
} from "../src/screens";
import {
  Phase1Screen,
  Phase2Screen,
  Phase3Screen,
  Phase4Screen,
} from "../src/screens";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="HomeScreen"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register2Screen"
            component={Register2Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="PropertyScreen"
          component={PropertyScreen}
          
        />
          
        <Stack.Screen
        name="ContactAgency"
        component={ContactAgencyScreen}
        options={{ headerShown: false }}
      />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default MainStack;
