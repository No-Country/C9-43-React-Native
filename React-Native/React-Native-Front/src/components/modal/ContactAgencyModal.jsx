import React from 'react';
import {View, StyleSheet, Modal, Pressable, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export const ContactAgencyModal = ({ isOpen, onPress }) => {
  return (
    <Modal visible={isOpen} transparent={true} animationType={'fade'}>
      <Pressable onPress={onPress} style={styles.opacityBackground}>
        <View style={styles.container}>
          <MaterialIcons name="check-circle-outline" size={24} color="#018349" />
          <Text style={styles.textTitle}>Mensaje enviado!</Text>
          <Text style={styles.textDescription}>El propietario en este caso tiene 7 días hábiles para darte una respuesta, te estaremos enviando un E-mail en cuanto tengamos su respuesta.</Text>
          <Pressable onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.button}>Entendido</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  opacityBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 312,
    height: 300,
    padding: 24,
    borderRadius: 15
  },
  textTitle: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    marginTop: 18,
    marginBottom: 16
  },
  textDescription: {
    color: '#1E1E1E',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left'
  },
  buttonContainer: {
    marginTop: 24,
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button: {
    color: '#018349',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20
  }
})

