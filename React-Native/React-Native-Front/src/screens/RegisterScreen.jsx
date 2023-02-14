import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const RegisterScreen = ({ navigation }) => {
  const [secured, setSecured] = useState(true);
  const [securedConfirm, setSecuredConfirm] = useState(true);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.arrow}
            onPress={() => navigation.navigate("MainScreen")}
          />
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />

          <Text style={styles.title}>Ingresá tus datos</Text>

          <View style={[styles.inputs]}>
            <TextInput
              style={[styles.emailInput, styles.textInputs]}
              placeholder="Ingresa tu E-mail"
              placeholderTextColor="#979797"
            />

            <View style={[styles.passwordInput, styles.textInputs]}>
              <TextInput
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#979797"
                secureTextEntry={secured}
              />

              <Ionicons
                style={styles.passwordInputIcon}
                name={secured ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="black"
                onPress={() => setSecured((prev) => !prev)}
              />
            </View>
            <View style={[styles.passwordInput, styles.textInputs]}>
              <TextInput
                placeholder="Volvé a ingresar tu contraseña"
                placeholderTextColor="#979797"
                secureTextEntry={securedConfirm}
              />
              <Ionicons
                style={styles.passwordInputIcon}
                name={securedConfirm ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="black"
                onPress={() => setSecuredConfirm((prev) => !prev)}
              />
            </View>

            <TouchableOpacity>
              <View style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Registrarme</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  passwordInputIcon: {
    paddingTop: 15,
  },

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
    width: 328,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 16,
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

    elevation: 0,
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
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  registerButtonText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 1.25,
    color: "#fff",
  },
});
