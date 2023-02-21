import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import { SettingsHeader } from '../components/layout';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useFaqOptions } from '../hooks';

export const FAQScreen = ({ navigation }) => {
  const { isRegisterOpen, isContactOpen, isFilterOpen, isPublishOpen, handleContactOpen, handleFilterOpen, handlePublishOpen, handleRegisterOpen} = useFaqOptions()
  
  return (
    <View style={styles.container}>
      <SettingsHeader title={'Preguntas frecuentes'} navigation={navigation}/>
      <View style={styles.faqsContainer}>
        <Pressable style={styles.faqItemContainer} onPress={handleRegisterOpen}>
          <Text style={styles.faqItemText}>¿Cómo me registro?</Text>
          <MaterialIcons name={`keyboard-arrow-${isRegisterOpen ? 'down' : 'right'}`} size={30} color="black" />
        </Pressable>
          {isRegisterOpen && (<Text style={styles.toggleText}>Registrarte en HQ te permitirá acceder a más funcionalidades de la app. Para registrarte, en la pantalla de inicio hace clic en <Text style={{fontWeight: '700'}}>Registrarme</Text>, ingresá tu mail, contrasena y repetila. Por último, hace clic en Registrarme.</Text>)}
        <Pressable style={styles.faqItemContainer} onPress={handleFilterOpen}>
          <Text style={styles.faqItemText}>¿Cómo filtro mis búsquedas?</Text>
          <MaterialIcons name={`keyboard-arrow-${isFilterOpen ? 'down' : 'right'}`} size={30} color="black" />
        </Pressable>
        {isFilterOpen && (<Text style={styles.toggleText}>Primeramente podrás filtrar tu búsqueda por ubicación. Una vez en la pantalla de resultados de tu búsqueda hace clic en <Text style={{fontWeight: '700'}}>Filtros</Text> en donde podrás filtrar tu búsqueda por tipo de operación, tipo de inmueble, precio, cantidad de metros cuadrados y cantidad de ambientes. </Text>)}
        <Pressable style={styles.faqItemContainer} onPress={handleContactOpen}>
          <Text style={styles.faqItemText}>¿Cómo contacto al anunciante?</Text>
          <MaterialIcons name={`keyboard-arrow-${isContactOpen ? 'down' : 'right'}`} size={30} color="black" />
        </Pressable>
        {isContactOpen && (<Text style={styles.toggleText}>Para contactar a la persona que publicó el anuncio, deberás estar registrado en la app. Una vez que te hayas registrado exitosamente hacé clic en la publicación de la propiedad y elije la opción disponible para entrar en contacto: teléfono o enviar mensaje.</Text>)}
        <Pressable style={styles.faqItemContainer} onPress={handlePublishOpen}>
          <Text style={styles.faqItemText}>¿Cómo publicar en HQ?</Text>
          <MaterialIcons name={`keyboard-arrow-${isPublishOpen ? 'down' : 'right'}`} size={30} color="black" />
        </Pressable>
      </View>
      {isPublishOpen && (
      <ScrollView style={{marginHorizontal: 12, marginBottom: 15}}>
      <Text style={styles.toggleText}>Para hacer tu primera publicación en HQ seguí los siguientes pasos. Es muy sencillo y rápido.{'\n'} 
      1- Ingresá a tu cuenta. Si todavia no tienes una cuenta deberás, primero Registrate. Una vez dentro de tu cuenta, en la sección Publica tu anuncio haz clic en <Text style={{fontWeight: '700'}}>Publicar</Text>. {'\n'}
      2-Elegí que tpo de inmueble querés publicar y que tipo de operación querés realizar. {'\n'}
      3- Elegí un título que describa detalladamente tu inmueble para que las personas interesadas sepan que estás ofreciendo. {'\n'}
      4-Completá la información de tu inmueble: ingresá mentros, ambientes, precio y fotos de calidad que llamen la atención. {'\n'}
      5-Completá cómo querés que te contacten las personas si enviándote un mensaje o tambíen telefonicamente. {'\n'}
      6- Revisá haber completado correctamente todos los pasos y hace clic en <Text style={{fontWeight: '700'}}>Publicar</Text>. Podrás simpre modificar la publicación desde <Text style={{fontWeight: '700'}}>Menú / Perfil / Publicaciones.</Text>
      </Text>
</ScrollView>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  faqsContainer: {
    marginTop: 10,
    marginHorizontal: 12
  },
  faqItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingEnd: 19,
    marginHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#CAC4D0'
  },
  faqItemText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24
  },
  toggleText: {
    marginTop: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24
  }

})
