import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabIconOptions } from "../helpers";
import { HomeScreen } from "../screens";

const BottomTab = createBottomTabNavigator();

// TODO: Add favorites tabscreen & post publication & messages & menu

export const TabNavigator = () => {
  return (
    <BottomTab.Navigator 
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({color}) => tabIconOptions( route, color ),
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#414141',
        tabBarActiveBackgroundColor: '#979797',
        tabBarInactiveBackgroundColor: '#979797',
        tabBarStyle: {
          height: 56
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8
        },
        tabBarIconStyle: {
          marginTop: 8
        }
      })}
    >

        <BottomTab.Screen 
          name="Buscar" 
          component={ HomeScreen }
        />

        <BottomTab.Screen 
          name="Favoritos" 
          component={ HomeScreen } 
        />

        <BottomTab.Screen 
          name="Publicar" 
          component={ HomeScreen } 
        />

        <BottomTab.Screen 
          name="Mensajes" 
          component={ HomeScreen } 
        />

        <BottomTab.Screen 
          name="Menú" 
          component={ HomeScreen } 
        />

        {/* <Tab.Screen name="Favorites" component={ FavoritesScreen } /> */}
        {/* <Tab.Screen name="Post" component={ PostScreen } /> */}
        {/* <Tab.Screen name="Messages" component={ MessagesScreen } /> */}
    </BottomTab.Navigator>
  )
}
