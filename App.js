import { StatusBar, StyleSheet } from 'react-native';
import { LoginScreen, MainScreen } from './src/screens';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" style='light' />
      {/* <MainScreen /> */}
      <LoginScreen />
    </>
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
