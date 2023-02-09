import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "../src/components/TabNavigator";
import { FilterScreen, HomeScreen, LoginScreen, MainScreen, RegisterScreen } from "../src/screens";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MainScreen">

        <Stack.Screen
          name="HomeScreen"
          component={ TabNavigator }
          options={{ headerShown: true }}
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
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Filtros avanzados"
          component={FilterScreen}
          options={{ headerShown: true, headerStyle: {backgroundColor: '#D9D9D9'}, headerTitleStyle: {
            fontWeight: '400', fontSize: 16
          }}}  
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default MainStack;