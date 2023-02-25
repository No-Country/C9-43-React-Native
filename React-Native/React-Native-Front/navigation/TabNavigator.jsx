import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, FavouritesScreen } from "../src/screens";
import { ProfileNavigation } from "./ProfileNavigation";
import { PublishNavigation } from "./PublishNavigation";
import { SearchNavigation } from "./SearchNavigation";
import { Image } from 'react-native'
import {MessageScreen} from "../src/screens/MessageScreen"


const BottomTab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#018349",
        tabBarInactiveTintColor: "#414141",
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveBackgroundColor: "#fff",
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      })}
    >
      <BottomTab.Screen
       name="Buscar" 
       component={SearchNavigation} 
       options={{
        tabBarIcon: ({focused}) => (
          focused ? <Image style={{width: 17.49, height: 17.49}} source={require('../assets/icons/searchGreen-icon.png')} /> : <Image style={{width: 17.49, height: 17.49}} source={require('../assets/icons/search-icon.png')} />
        )
       }}
      />


      <BottomTab.Screen
        name="Favoritos"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <Image style={{width: 20, height: 18.35}} source={require('../assets/icons/favoriteGreen-icon.png')} /> : <Image style={{width: 20, height: 18.35}} source={require('../assets/icons/favorite-icon.png')} />
          )
         }}
      />

         
      <BottomTab.Screen
        name="Publicar"
        component={PublishNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <Image style={{width: 24, height: 19}} source={require('../assets/icons/dollarHouseSelected-icon.png')} /> : <Image style={{width: 24, height: 19}} source={require('../assets/icons/dollarHouse-icon.png')} />
          )
         }}
      />


      <BottomTab.Screen 
        name="Mensajes" 
        component={MessageScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <Image source={require('../assets/icons/messageGreen-icon.png')} /> : <Image  source={require('../assets/icons/message-icon.png')} />
          )
         }}
      />


      <BottomTab.Screen 
        name="Menú" 
        component={ProfileNavigation} 
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <Image  source={require('../assets/icons/menuGreen-icon.png')} /> : <Image  source={require('../assets/icons/menu-icon.png')} />
          )
         }}
      />

    </BottomTab.Navigator>
  );
};
