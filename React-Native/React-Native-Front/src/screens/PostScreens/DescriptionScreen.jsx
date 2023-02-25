import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, PostInputs } from "../../components"
import { IconHeader } from "../../components/layout"
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext";

export const DescriptionScreen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext( PublishPostContext )
  const { handlePublishProgress } = useContext(PublishProgressContext)
  
  const handleInputs = (name, input) => {
    handlePublishPost(name, input)
  }

  const handleAccept = () => {
    if (publishPost.title.length === 0 || publishPost.description.length === 0) {
      alert('No dejes campos vacios')
      return
    }
    handlePublishProgress('description', 10)
    navigation.goBack()
  }

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
              placeholder: 'Ej: Departamento de 2 ambientes y 1 baño',
              name: 'title'
            },
            {
              title: 'Describí tu inmueble',
              placeholder: 'Ej: Departamento de 2 ambientes y 1 baño',
              name: 'description'
            }
          ]}
          handleInputs={handleInputs}
        />
      </View>
        <Pressable style={styles.buttonContainer} onPress={handleAccept}>
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
