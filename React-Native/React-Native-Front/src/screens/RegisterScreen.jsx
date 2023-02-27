import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { GreenButton } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../context/auth-context/AuthContext";

export const RegisterScreen = ({ navigation }) => {
  const { login, authData } = useContext(AuthContext)
  const [secured, setSecured] = useState(true);
  const [securedConfirm, setSecuredConfirm] = useState(true);
  const [form, setForm] = useState({});
  const [confirmError, setConfirmError] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const changed = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  console.log(authData);
  
  const handleEmail = (value) => {
    setInput({ ...input, email: value });
  };
  const handlePassword = (value) => {
    setInput({ ...input, password: value });
  };
  const handleConfirmPassword = (value) => {
    setInput({ ...input, confirmPassword: value });
    setForm({ ...form, confirmPassword: value });
    if (input.password !== value) {
      setConfirmError(true);
    } else {
      setConfirmError(false);
    }
  };

  const validateEmail = (email) => {
    return EMAIL_REGEX.test(email);
  };

  const validatePassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const validateForm = (form) => {
    return form.email && form.password && form.confirmPassword;
  };

  const handleNext = () => {
    if (!validateEmail(form.email)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    if (!validatePassword(form.password, form.confirmPassword)) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!validateForm(form)) {
      alert(
        "Por favor, complete todos los campos antes de continuar"
      );
      return;
    }

    login(form)

    navigation.navigate("Register2Screen");
  }

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        />
        <Image style={styles.logo} source={require("../../assets/logo.png")} />

        <Text style={styles.title}>Ingresá tus datos</Text>

        <View style={[styles.inputs]}>
          <TextInput
            style={[styles.emailInput, styles.textInputs]}
            placeholder="Ingresa tu E-mail"
            placeholderTextColor="#979797"
            keyboardType="email-address"
            onEndEditing={(e) => changed("email", e.nativeEvent.text)}
            value={form.email}
          />
          <View style={[styles.passwordInput, styles.textInputs]}>
            <TextInput
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#979797"
              secureTextEntry={secured}
              onEndEditing={(e) => changed("password", e.nativeEvent.text)}
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
              onChangeText={(value) => handleConfirmPassword(value)}
            />
            <Ionicons
              style={styles.passwordInputIcon}
              name={securedConfirm ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="black"
              onPress={() => setSecuredConfirm((prev) => !prev)}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={handleNext}
          >
            <GreenButton text={"Siguiente"} />
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  passwordInputIcon: {
    paddingTop: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  arrow: {
    alignSelf: "flex-start",
    marginTop: 38,
    marginLeft: 23,
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
    width: 326,
  },
});
