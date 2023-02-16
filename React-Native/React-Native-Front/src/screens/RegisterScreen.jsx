import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { GreenButton } from "../components";

export const RegisterScreen = ({ navigation }) => {
  const [secured, setSecured] = useState(true);
  const [securedConfirm, setSecuredConfirm] = useState(true);

  return (
        <View style={styles.container}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.arrow}
            onPress={() => navigation.goBack()}
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
              keyboardType="email-address"
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

            <Pressable style={styles.button}>
              <GreenButton text={'Registrarme'} />
            </Pressable>
          </View>
        </View>

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
    marginTop: 38,
    marginLeft: 23
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
  },
  passwordInput: {
    marginTop: 30,
    backgroundColor: "#D9D9D9",
    paddingLeft: 19,
    borderRadius: 5,
  },
  button: {
    marginTop: 50,
    width: 326
  }
});
