import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import { HomeScreen, LoginScreen, MainScreen, RegisterScreen } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   /*  <NavigationContainer>
      <Stack.Navigator> */
        <>
          <StatusBar backgroundColor="black" style='light' />

          <MainScreen />
          {/* <LoginScreen /> */}
          {/* <RegisterScreen /> */}
          {/* <HomeScreen /> */}
        </>
      /* </Stack.Navigator>
    </NavigationContainer> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
