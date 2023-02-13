import { StyleSheet, Text, View } from "react-native"
import { PostInputs, PostTopBar } from "../../components"

export const EnvironmentsScreen = () => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

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