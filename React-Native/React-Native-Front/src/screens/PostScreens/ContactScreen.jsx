import { StyleSheet, Text, View } from "react-native"
import { GreenPostButton, PostInputs, PostTopBar } from "../../components"

export const ContactScreen = () => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

        <Text style={ styles.title }>
            Contacto
        </Text>

        <PostInputs 
          titleAndPlaceholder={[ 
            { 
              title: 'Correo electrónico', 
              placeholder: 'Ej: guadalupegomez@gmail.com'
            },
            {
              title: 'Teléfono',
              placeholder: 'Ej: +54 11 3045-2149'
            }
          ]}
        />

        <GreenPostButton />

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
      marginTop: 52
    }
})