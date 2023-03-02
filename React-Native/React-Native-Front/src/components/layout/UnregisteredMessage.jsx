import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import {View, StyleSheet, Image, Text, Pressable, TextInput} from 'react-native';
import { UserCredentialsContext } from '../../context/user-credentials-context/UserCredentialsContext';
import { useNavigation } from '@react-navigation/native';
import { GreenButton } from '../GreenButton';
import axios from 'axios'

export const UnregisteredMessage = ({ text }) => {
  const {userCredentials, handleUserCredentials} = useContext(UserCredentialsContext)
  const navigation = useNavigation()
  const [secured, setSecured] = useState(true);
  const [inputs, setInputs] = useState({email: '', password: ''})

  const handleChange = (name, value) => {
    setInputs({...inputs, [name]: value})
  }

  console.log(userCredentials)

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://home-quest-app.onrender.com/api/v1/auth/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );
      console.log(response.data)
      handleUserCredentials(response.data)
    } catch (error) {
      console.log(error.response.data)
      alert(
        "Ha ocurrido un error",
        "No se pudo completar el registro, por favor intenta de nuevo más tarde."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
      <Text style={styles.titleText}>Para {text} ingresá{'\n'} con tu cuenta:</Text>
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
          <GreenButton text='Enviar' />
        </Pressable>
      </View>
      <View style={styles.separator}>
        <View style={styles.leftSeparator} />
        <Text style={styles.textSeparator}>O</Text>
        <View style={styles.rightSeparator} />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.secondaryText}>No tengo cuenta,</Text>
        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.registerText}> Registrarme</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20
  },
  titleText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
  button: {
    width: 328,
    marginTop: 20
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35
  },
  leftSeparator: {
    width: 146.5,
    borderBottomWidth: 1,
    borderColor: '#979797'
  },
  rightSeparator: {
    width: 146.5,
    borderBottomWidth: 1,
    borderColor: '#979797'
  },
  textSeparator: {
    paddingHorizontal: 10
  },
  registerContainer: {
    flexDirection: 'row', 
    marginTop: 20
  },
  secondaryText: {
    fontSize: 12,
    color: '#1E1E1E',
    fontWeight: '500',
    lineHeight: 16
  },
  registerText: {
    fontSize: 12,
    color: '#018349',
    fontWeight: '500',
    lineHeight: 16
  }
})