import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GreenButton } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterCompleteModal } from "../components/modal";
import { useModal } from "../hooks";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context/AuthContext";
import { ErrorMessage } from "../components/modal/ErrorMessage";

// METI EL MODAL, PERO DESPUES TERMINALO DE CONFIGURAR BIEN
export const Register2Screen = ({ navigation }) => {
  const { isModalOpen, handleToggleModal } = useModal();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const { authData } = useContext(AuthContext);

  const email = authData.email;
  const password = authData.password;

  const handleErrorModal = (navigation) => {
    setIsError(false)
    navigation.navigate('MainScreen')
  }

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://home-quest-app.onrender.com/api/v1/auth/register",
        {
          email,
          password,
          firstName: firstName,
          lastName: lastName,
        }
      );
      console.log(response)
      setIsLoading(false);
      handleToggleModal();
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.data)
      setIsError(true)
    }
  };

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

        <Text style={styles.title}>¿Cual es tu nombre?</Text>

        <View style={[styles.inputs]}>
          <TextInput
            style={[styles.emailInput, styles.textInputs]}
            placeholder="Ingresá tu Nombre"
            placeholderTextColor="#979797"
            onChangeText={setFirstName}
            //onEndEditing={(e) => console.log(e.nativeEvent.text)}
            value={firstName}
          />

          <TextInput
            style={[styles.emailInput, styles.textInputs, { marginTop: 20 }]}
            placeholder="Ingresá tu Apellido"
            placeholderTextColor="#979797"
            //onEndEditing={(e) => console.log(e.nativeEvent.text)}
            onChangeText={setLastName}
            value={lastName}
          />

          <View style={styles.separator} />

          <Text style={styles.confirmationText}>Estaremos enviando un</Text>
          <Text style={styles.confirmationGreenText}>
            E-mail de confirmación
          </Text>

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            <GreenButton text={isLoading ? "Enviando..." : "Registrarme"} />
          </Pressable>
        </View>
      </View>
      {/* MODAL */}
      <RegisterCompleteModal isOpen={isModalOpen} onPress={ () => navigation.navigate('LoginScreen')} />
      <ErrorMessage isVisible={isError} handleModalVisibility={() => handleErrorModal(navigation)} />
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
  separator: {
    width: 328,
    marginTop: 28,
    borderBottomColor: "#979797",
    borderBottomWidth: 1,
  },
  confirmationText: {
    marginTop: 13,
    color: "#1E1E1E",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
  },
  confirmationGreenText: {
    color: "#018349",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    marginTop: 50,
    width: 326,
  },
});
