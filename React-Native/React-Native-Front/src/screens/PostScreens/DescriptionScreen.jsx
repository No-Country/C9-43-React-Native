import { StyleSheet, Text, View } from "react-native"
import { PostInputs, PostTopBar } from "../../components"

export const DescriptionScreen = ({}) => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

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
  )
}

// TODO: crear componente que reciba arrays y retone todas las pantallas y agregarle type para la foto y el simbolito de $ y usd

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
