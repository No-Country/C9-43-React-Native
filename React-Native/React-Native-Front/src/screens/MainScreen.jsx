import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { GreenButton } from "../components/index";


export const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground
    style={styles.container}
    source={require("../../assets/bg-image.png")}
    >
    <StatusBar translucent barStyle='dark-content' backgroundColor='transparent'/>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.image}
          />
        </View>
        
        <Text style={styles.title}>
          Home Quest es la app que te permite publicar tu inmueble y también
          encontrar el de tus sueños.
        </Text>

        <View style={styles.buttonsContainer}>
          <Pressable  onPress={() => navigation.navigate("LoginScreen")}>
          <GreenButton  route='LoginScreen' text='Iniciar sesión'/>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonRegister]}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.buttonText}>Registrarme</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSkip}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonSkipText}>Skip</Text>
          </Pressable>
        </View>
      </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 100,
    resizeMode: "cover"
  },
  logoContainer: {
    paddingVertical: 55,
  },
  image: {
    width: 89,
    height: 66,
  },
  title: {
    width: '60%',
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
  },
  buttonsContainer: {
    marginTop: 160,
    width: '90%'
  },
  button: {
    width: '100%',
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1.25,
  },
  buttonLoginText: {
    color: "#ffffff",
  },
  buttonRegister: {
    borderColor: "black",
    borderWidth: 1.5,
    marginTop: 21,
  },
  buttonSkip: {
    marginTop: 21, 
    width: '100%',
    height: 49,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSkipText: {
    fontWeight: "700",
  },
});
