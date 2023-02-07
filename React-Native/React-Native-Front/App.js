import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import MainStack from './navigation/MainStack';
import Navigation from './navigation/MainStack';
import { HomeScreen, LoginScreen, MainScreen, RegisterScreen } from './src/screens';


export default function App() {
  return (
     <MainStack />
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
