import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, GreenPostButton, PostInputs, PostTopBar } from "../../components"
import { IconHeader } from "../../components/layout"

export const DescriptionScreen = ({ navigation }) => {
  return (
    <View style={ styles.container }>

        <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'} />
      <View style={styles.descriptionInputsContainer}>
        <Text style={ styles.title }>
            Descripción
        </Text>

        <PostInputs 
          titleAndPlaceholder={[ 
            { 
              title: 'Agregá un título', 
              placeholder: 'Ej: Departamento de 2 ambientes y 1 baño'
            },
            {
              title: 'Describí tu inmueble',
              placeholder: 'Ej: Departamento de 2 ambientes y 1 baño'
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
      flex: 7,
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 16
    }
})
