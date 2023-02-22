import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, GreenPostButton, PostInputs, PostTopBar } from "../../components"
import { IconHeader } from "../../components/layout"

export const LocationScreen = ({ navigation }) => {
  return (
    <View style={ styles.container }>

        <IconHeader icon={'close'} title={'Publicar anuncio'} navigation={navigation}/>
        <View style={styles.descriptionInputContainer}>
        <Text style={ styles.title }>
            Ubicación
        </Text>

        <PostInputs 
          titleAndPlaceholder={[ 
            { 
              title: 'Indicá en que ciudad está ubicado', 
              placeholder: 'Ej: Quilmes'
            },
            {
              title: 'Indicá en que provincia está ubicado',
              placeholder: 'Ej: Buenos Aires'
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
    descriptionInputContainer: {
      flex: 7
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 16
    }
})
