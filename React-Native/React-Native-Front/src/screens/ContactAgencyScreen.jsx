import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native';
import { GreenButton } from '../components';
import { IconHeader } from '../components/layout';
import { ContactAgencyModal } from '../components/modal/';
import { useModal } from '../hooks'

export const ContactAgencyScreen = () => {
  const{ modalVisible, handleModalVisibility } = useModal()

  return (
    <View style={styles.container}>
      <IconHeader icon={'close'} title={'Contactar a la agencia'} />
      <View style={styles.mainContainer}>
        <Text style={styles.titleText}>Ingresá tus datos</Text>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>Nombre completo</Text>
          <TextInput style={styles.input} placeholder='Ingresa tu nombre' />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>Teléfono</Text>
          <TextInput keyboardType='number-pad' style={styles.input} placeholder='0000-0000' />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>E-mail</Text>
          <TextInput keyboardType='email-address' style={styles.input} placeholder='mario@gmail.com' />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.labelText}>Mensaje</Text>
          <TextInput  style={styles.textAreaInput} multiline={true} numberOfLines={4} maxLength={100} placeholder='Estoy interesado en este inmueble, me gustaría recibir más información.' />
        </View>
        <View style={styles.separator} />
        <Pressable onPress={handleModalVisibility}>
          <GreenButton text={'Enviar'}/>
        </Pressable>
      </View>
      {/* MODAL */}
      
    { modalVisible && <ContactAgencyModal onPress={handleModalVisibility}/>}
    </View>
  );
}

const styles = StyleSheet.create({
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

