import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { ErrorMessage, GreenButton } from "../components";
import axios from 'axios'
import { UserCredentialsContext } from "../context/user-credentials-context/UserCredentialsContext";

export const LoginScreen = ({ navigation }) => {
  const { userCredentials,handleUserCredentials } = useContext(UserCredentialsContext)
  const [secured, setSecured] = useState(true);
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleChange = (name, value) => {
    setInputs({...inputs, [name]: value})
  }

  const handleErrorModal = (navigation) => {
    setIsError(false)
    navigation.navigate('MainScreen')
  }

  console.log(userCredentials)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        "https://home-quest-app.onrender.com/api/v1/auth/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );
      handleUserCredentials(response.data.userData)
      setLoading(false)
      navigation.navigate('HomeScreen')
    } catch (error) {
      setLoading(false)
      console.log(error.response.data)
      setIsError(true)
    }
  }

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        style={styles.arrow}
        onPress={() => navigation.goBack()}
      />

      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <Text style={styles.title}>Bienvenido a Home Quest!</Text>

      <Text style={styles.subtitle}>Ingresar con mi E-Mail</Text>

      <View style={styles.inputs}>
        <TextInput
          style={[styles.emailInput, styles.textInputs]}
          variant="outlined"
          placeholder="Ingresa tu E-mail"
          placeholderTextColor={"#979797"}
          inputContainerStyle={{ backgroundColor: "#E4E4E4" }}
          keyboardType='email-address'
          value={inputs.email}
          onChangeText={(value) => handleChange('email', value)}
        />

        <View style={styles.passwordInputView}>
          <TextInput
            style={[styles.passwordInput, styles.textInputs]}
            secureTextEntry={secured}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={"#979797"}
            value={inputs.password}
            onChangeText={(value) =>  handleChange('password', value)}
          />
          <Ionicons
            style={styles.passwordInputIcon}
            name={secured ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="black"
            onPress={() => setSecured((prev) => !prev)}
          />
        </View>

        <Pressable style={styles.button} onPress={handleLogin}>
          <GreenButton text={!loading ? 'Aceptar' : 'Enviando...'} />
        </Pressable>
      </View>
    </View>
    {/* MODAL */}
    <ErrorMessage isVisible={isError} handleModalVisibility={() => handleErrorModal(navigation)}/>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  arrow: {
    alignSelf: "flex-start",
    marginTop: 38,
    marginLeft: 23
  },
  logo: {
    marginTop: 40,
    width: 89,
    height: 66,
  },
  title: {
    fontWeight: "500",
    fontSize: 19,
    marginTop: 32,
  },
  subtitle: {
    marginTop: 11,
    fontWeight: "400",
    fontSize: 16,
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
    width: 100,
    paddingHorizontal: 16,
  },
  textInputs: {
    fontSize: 16,
    fontWeight: "400",
  },

  emailInput: {
    width: 328,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#fff",
    backgroundColor: "#E4E4E4",
    color: "#414141",
    paddingLeft: 16,
  },
  passwordInputView: {
    width: 328,
    flexDirection: "row",
    height: 56,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    height: 56,
    color: "#414141",
    paddingLeft: 16,
  },
  passwordInputIcon: {
    marginHorizontal: 20,
  },
  joinButton: {
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
  joinButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
    letterSpacing: 1.25,
    fontSize: 14,
  },
  button: {
    width: 328,
    marginTop: 44
  }
});
