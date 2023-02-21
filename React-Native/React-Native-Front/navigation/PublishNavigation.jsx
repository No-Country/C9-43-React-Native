import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Phase1Screen, Phase2Screen, Phase3Screen, Phase4Screen, DescriptionScreen, LocationScreen, EnvironmentsScreen, CharacteristicsScreen, PriceScreen, ContactScreen } from '../src/screens';
import { PhotosScreen } from '../src/screens/PostScreens/PhotosScreen';

const Stack = createNativeStackNavigator();

export const PublishNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name='Phase1Screen'
        component={Phase1Screen}
      />
      <Stack.Screen 
        name='Phase2Screen'
        component={Phase2Screen}
      />
      <Stack.Screen 
        name='Phase3Screen'
        component={Phase3Screen}
      />
      <Stack.Screen 
        name='Phase4Screen'
        component={Phase4Screen}
      />
      <Stack.Screen 
        name='DescriptionScreen'
        component={DescriptionScreen}
      />
      <Stack.Screen 
        name='LocationScreen'
        component={LocationScreen}
      />
      <Stack.Screen 
        name='EnvironmentsScreen'
        component={EnvironmentsScreen}
      />
      <Stack.Screen 
        name='CharacteristicsScreen'
        component={CharacteristicsScreen}
      />
      <Stack.Screen 
        name='PriceScreen'
        component={PriceScreen}
      />
      <Stack.Screen 
        name='PhotosScreen'
        component={PhotosScreen}
      />
      <Stack.Screen
        name='ContactScreen'
        component={ContactScreen}
      />
    </Stack.Navigator>
  );
}


