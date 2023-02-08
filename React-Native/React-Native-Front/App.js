
import * as SplashScreen from 'expo-splash-screen';
import MainStack from './navigation/MainStack';


// TODO: Resize splash screen

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout( SplashScreen.hideAsync, 2000 );

  return (
      <MainStack />
  );

}