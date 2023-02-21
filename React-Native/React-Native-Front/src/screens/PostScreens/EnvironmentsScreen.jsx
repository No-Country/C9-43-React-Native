import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, GreenPostButton, PostInputs, PostTopBar } from "../../components"
import { IconHeader } from "../../components/layout"

export const EnvironmentsScreen = ({ navigation }) => {
  return (
    <View style={ styles.container }>

        <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'} />
        <View style={styles.descriptionInputcontainer}>
        <Text style={ styles.title }>
            Ambientes
        </Text>

        <PostInputs 
          titleAndPlaceholder={[ 
            { 
              title: 'Indicá la cantidad de ambientes', 
              placeholder: 'Ej: 2 ambientes'
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
    descriptionInputcontainer: {
      flex: 7
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 16
    }
})