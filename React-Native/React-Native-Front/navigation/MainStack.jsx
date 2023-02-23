import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FilterScreen, LoginScreen, MainScreen, RegisterScreen, } from "../src/screens";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
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
          name="Filtros avanzados"
          component={FilterScreen}
          options={{ headerShown: false }}
        />
{/* 
        <Stack.Screen
          name="ContactAgency"
          component={ContactAgencyScreen}
          options={{ headerShown: false }}
        /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
