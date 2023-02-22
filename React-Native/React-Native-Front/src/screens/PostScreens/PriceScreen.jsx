import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, GreenPostButton, PostInputs, PostTopBar } from "../../components"
import { IconHeader } from "../../components/layout"

export const PriceScreen = ({ navigation }) => {
  return (
    <View style={ styles.container }>

        <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'} />
      <View style={styles.descriptionInputContainer}>
        <Text style={ styles.title }>
            Precio
        </Text>

        <PostInputs 
          titleAndPlaceholder={
            [ 
                { 
                    title: 'Indicá a qué precio querés publicarlo', 
                    placeholder: 'Ej: 50.000'
                }
            ]
          }
          type={ 'price' }
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