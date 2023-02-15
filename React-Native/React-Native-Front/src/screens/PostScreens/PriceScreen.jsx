import { StyleSheet, Text, View } from "react-native"
import { GreenPostButton, PostInputs, PostTopBar } from "../../components"

export const PriceScreen = () => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

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