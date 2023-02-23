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

export const Register2Screen = ({ navigation }) => {

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
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />

          <Text style={styles.title}>¿Cual es tu nombre?</Text>

          <View style={[styles.inputs]}>
            <TextInput
              style={[styles.emailInput, styles.textInputs]}
              placeholder="Ingresá tu Nombre"
              placeholderTextColor="#979797"
              onEndEditing={e => console.log(e.nativeEvent.text)}
            />

            <TextInput
              style={[styles.emailInput, styles.textInputs, {marginTop: 20}]}
              placeholder="Ingresá tu Apellido"
              placeholderTextColor="#979797"
              onEndEditing={e => console.log(e.nativeEvent.text)}
            />
            
            <View style={styles.separator} />

            <Text style={styles.confirmationText}>Estaremos enviando un</Text>
            <Text style={styles.confirmationGreenText}>E-mail de confirmación</Text>

            <Pressable style={styles.button}>
              <GreenButton text={'Registrarme'} />
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
    backgroundColor: '#fff'
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
    borderBottomColor: '#979797',
    borderBottomWidth: 1
  },
  confirmationText: {
    marginTop: 13,
    color: '#1E1E1E',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16
  },
  confirmationGreenText: {
    color: '#018349',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16
  },
  button: {
    marginTop: 50,
    width: 326
  }
});
