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

        <View style={styles.inputs}>
          <TextInput style={styles.emailInput} placeholder="E-mail" />

          <TextInput style={styles.passwordInput} placeholder="Contraseña" />

          <TextInput
            style={styles.passwordInput}
            placeholder="Repetir contraseña"
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
    marginTop: 46,
    left: 27,
  },
  logo: {
    marginTop: 102,
  },
  title: {
    marginTop: 54,
    fontWeight: "600",
    fontSize: 20,
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 21,
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
    marginTop: 30,
    width: 160,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
  },
  registerButtonText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 1.25,
  },
});
