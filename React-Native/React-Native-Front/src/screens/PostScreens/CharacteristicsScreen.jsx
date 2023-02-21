import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, GreenPostButton, PostInputs, PostTopBar } from "../../components"
import { IconHeader } from "../../components/layout"

export const CharacteristicsScreen = ({ navigation }) => {
  return (
    <View style={ styles.container }>

        <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'}/>
      <View style={styles.descriptionInputsContainer}>
        <Text style={ styles.title }>
            Características
        </Text>

        <PostInputs 
          titleAndPlaceholder={[ 
            { 
              title:'Indicá la cantidad de m²',
              placeholder: 'Ej: 45 m²'
            },
            {
              title: '¿Cuántos dormitorios tiene?',
              placeholder: 'Ej: 2'
            },
            {
                title: '¿Cuántos baños tiene?',
                placeholder: 'Ej: 1'
            }
          ]}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.goBack()}>
        <GreenButton text={'Aceptar'} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title: {
      fontSize: 26,
      lineHeight: 32,
      marginLeft: 19,
      marginTop: 22
    },
    descriptionInputsContainer: {
      flex: 7
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 16
    }
})
