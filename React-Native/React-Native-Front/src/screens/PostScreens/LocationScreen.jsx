import { StyleSheet, Text, View } from "react-native"
import { PostInputs, PostTopBar } from "../../components"

export const LocationScreen = () => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

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
