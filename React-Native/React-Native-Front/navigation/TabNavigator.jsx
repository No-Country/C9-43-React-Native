import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabIconOptions } from "../src/helpers";
import { HomeScreen, Phase1Screen, FavouritesScreen } from "../src/screens";
import { ProfileNavigation } from "./ProfileNavigation";
import { PublishNavigation } from "./PublishNavigation";
import { SearchNavigation } from "./SearchNavigation";

const BottomTab = createBottomTabNavigator();

// TODO: Add favorites tabscreen & post publication & messages & menu

export const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => tabIconOptions(route, color),
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
      <BottomTab.Screen name="Buscar" component={SearchNavigation} />

      <BottomTab.Screen
        name="Favoritos"
        component={FavouritesScreen}
        options={{ headerShown: false }}
      />

      <BottomTab.Screen
        name="Publicar"
        component={PublishNavigation}
        options={{ headerShown: false }}
      />

      <BottomTab.Screen name="Mensajes" component={HomeScreen} />

      <BottomTab.Screen name="Menú" component={ProfileNavigation} />

      {/* <Tab.Screen name="Favorites" component={ FavoritesScreen } /> */}
      {/* <Tab.Screen name="Post" component={ PostScreen } /> */}
      {/* <Tab.Screen name="Messages" component={ MessagesScreen } /> */}
    </BottomTab.Navigator>
  );
};
