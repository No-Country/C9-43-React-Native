import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.arrow}
          onPress={() => navigation.navigate("MainScreen")}
        />
        <Image style={styles.logo} source={require("../../assets/logo.png")} />

        <Text style={styles.title}>Ingresá tus datos</Text>

        <View style={[styles.inputs]}>
          <TextInput
            style={[styles.emailInput, styles.textInputs]}
            placeholder="Ingresa tu E-mail"
            placeholderTextColor="#979797"
          />

          <TextInput
            style={[styles.passwordInput, styles.textInputs]}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor="#979797"
          />

          <TextInput
            style={[styles.passwordInput, styles.textInputs]}
            placeholder="Volvé a ingresar tu contraseña"
            placeholderTextColor="#979797"
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  arrow: {
    alignSelf: "flex-start",
    marginTop: 31,
    left: 27,
  },
  logo: {
    marginTop: 38,
  },
  title: {
    marginTop: 36,
    fontWeight: "400",
    fontSize: 16,
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  textInputs: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: -10,
  },
  emailInput: {
    width: 326,
    height: 47,
    backgroundColor: "#D9D9D9",
    paddingLeft: 19,
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  passwordInput: {
    marginTop: 30,
    width: 326,
    height: 47,
    backgroundColor: "#D9D9D9",
    paddingLeft: 19,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  registerButton: {
    backgroundColor: "#018349",
    marginTop: 30,
    width: 328,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 50,
  },
  registerButtonText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 1.25,
    color: "#fff",
  },
});
