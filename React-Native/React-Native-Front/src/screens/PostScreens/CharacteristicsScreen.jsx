import { StyleSheet, Text, View } from "react-native"
import { PostInputs, PostTopBar } from "../../components"

export const CharacteristicsScreen = () => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

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
