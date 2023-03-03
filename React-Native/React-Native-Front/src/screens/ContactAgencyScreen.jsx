import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Pressable, KeyboardAvoidingView} from 'react-native';
import { GreenButton } from '../components';
import { IconHeader } from '../components/layout';
import { ContactAgencyModal } from '../components/modal/';
import { UserCredentialsContext } from '../context/user-credentials-context/UserCredentialsContext';
import { useModal } from '../hooks'

const initialValues = {
  fullName: '', tel: '', email: '', message: ''
}



export const ContactAgencyScreen = () => {
  const { isModalOpen, handleToggleModal } = useModal()
  const [ values, setValues] = useState(initialValues)
  const navigation = useNavigation()

  const handleContact = (key, value) => {
    console.log(value)
    console.log(contactAgencyValidation(key, value))
    setValues({...values, [key]: value})
  }

  const handleSentMessage = (navigation) => {
    handleToggleModal()
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={40}
      style={styles.keyboard}>
    <View style={styles.container}>
      <IconHeader icon={'close'} title={'Contactar a la agencia'} navigation={navigation}/>
      <View style={styles.mainContainer}>
        <Text style={styles.titleText}>Ingresá tus datos</Text>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>Nombre completo</Text>
          <TextInput  style={styles.input}
          placeholder='Ingresa tu nombre'
          onEndEditing={(e) => handleContact('fullName', e.nativeEvent.text)}
          // onChange={(txt) => handleContact('fullName', txt)} placeholder='Ingresa tu nombre' />
          />
        </View>
        {/* SAQUE EL VALIDADOR PORQUE ESTABA PETANDO TOOD */}
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>Teléfono</Text>
          <TextInput value={values.tel} keyboardType='number-pad' style={styles.input} placeholder='0000-0000' />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>E-mail</Text>
          <TextInput  keyboardType='email-address' style={styles.input} onChangeText={(txt) => handleContact('email', txt)} placeholder='mario@gmail.com' />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>Mensaje</Text>
          <TextInput value={values.message} style={styles.textAreaInput} multiline={true} numberOfLines={4} maxLength={100} placeholder='Estoy interesado en este inmueble, me gustaría recibir más información.' />
        </View>
        <View style={styles.separator} />
        <Pressable onPress={handleToggleModal}>
          <GreenButton text={'Enviar'}/>
        </Pressable>
      </View>
      {/* MODAL */}
      <ContactAgencyModal isOpen={isModalOpen} onPress={() => handleSentMessage(navigation)}/>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  titleText: {
    marginTop: 8,
    marginBottom: 18,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24
  },
  labelInputContainer: {
    marginTop: 8,
  },
  labelText: {
    marginLeft: 2,
    marginBottom: 10,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24
  },
  input: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#E4E4E4'
  },
  textAreaInput: {
    padding: 16,
    textAlignVertical: 'top',
    borderRadius: 4,
    backgroundColor: '#E4E4E4'
  },
  separator: {
    marginVertical: 30,
    borderBottomWidth: 1.5,
    borderBottomColor: '#CAC4D0'
  }
})

