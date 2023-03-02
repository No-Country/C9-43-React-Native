import * as SplashScreen from "expo-splash-screen";
import MainStack from "./navigation/MainStack";
import { UserCredentialsProvider } from "./src/context/user-credentials-context/UserCredentialsContext";

// TODO: Resize splash screen

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <UserCredentialsProvider>
      <MainStack />
    </UserCredentialsProvider>
  );
}
