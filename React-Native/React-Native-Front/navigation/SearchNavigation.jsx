import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, FilteredResultScreen, FilterScreen } from "../src/screens/index";

const Stack = createNativeStackNavigator();

export const SearchNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="Ubicacion" 
      component={FilteredResultScreen} 
      options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};
