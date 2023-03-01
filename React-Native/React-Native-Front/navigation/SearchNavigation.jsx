import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  FilteredResultScreen,
  FilterScreen,
  PropertyScreen,
} from "../src/screens/index";
import { FiltersContextProvider } from "../src/context/filters-context/FiltersContext";

const Stack = createNativeStackNavigator();

export const SearchNavigation = () => {
  return (
    <FiltersContextProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Ubicacion"
          component={FilteredResultScreen}
        />
        <Stack.Screen
          name="Filtros avanzados"
          component={FilterScreen}
        />
      </Stack.Navigator>
    </FiltersContextProvider>
  );
};
