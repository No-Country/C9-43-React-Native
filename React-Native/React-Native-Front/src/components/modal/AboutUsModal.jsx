import React from 'react';
import {View, StyleSheet, Text, Modal, ScrollView, Image, Pressable} from 'react-native';

export const AboutUsModal = ({ isVisible, handleModalVisibility }) => {
  return (
    <Modal visible={isVisible} transparent={true} >
      <View style={styles.opacityContainer}>
        <View style={styles.container}>
          <Image source={require('../../../assets/icons/homeQuest-black-icon.png')} style={styles.logo}/>
          <Text style={styles.titleText}>Quienes somos</Text>
          <ScrollView style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Las aplicaciones móviles inmobiliarias existentes suelen ser confusas y difíciles de usar. A los usuarios les cuesta navegar por la aplicación y se enfrentan a problemas como filtros de búsqueda complicados y procesos de pulbicación de propiedades largos y tediosos.{'\n'}{'\n'}
              Home Quest nació con la idea de desarrollar una aplicación móvil que facilitara y simplificara tanto el proceso de búsqueda como el de la publicación de inmuebles.{'\n'}{'\n'}
              Home Quest es el resultado de Cohorte 9 - No Country.  Una iniciativa que ofrece emulaciones reales de trabajo para que, a través del desempeño durante 5 semanas, perfiles It podamos demostrar el propio talento,  entrenar y certificar habilidades técnicas y blandas. {'\n'}{'\n'}
              Hicimos Home Quest: {'\n'}{'\n'}
              QA: Sabrina Lorenzo Batista. {'\n'}
              UX-UI designers: Malena Hernández, Tatiana Scialabba. {'\n'}
              Front End: Federico Birman, Ricardo Lozano.{'\n'}
              Back End: Oscar Ardila.{'\n'}
            </Text>
          </ScrollView>
          <Pressable onPress={handleModalVisibility}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  opacityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  container: {
    width: 312,
    height: 538,
    borderRadius: 15,
    backgroundColor: '#fff'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20
  },
  titleText: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    color: '#1E1E1E'
  },
  descriptionContainer: {
    marginHorizontal: 17,
    marginTop: 28
  },
  descriptionText: {
    fontWeight: '500',
    fontSize: 16
  },
  buttonText: {
    alignSelf: 'flex-end',
    marginRight: 36,
    marginTop: 21,
    marginBottom: 28,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#018349'
  }
})
