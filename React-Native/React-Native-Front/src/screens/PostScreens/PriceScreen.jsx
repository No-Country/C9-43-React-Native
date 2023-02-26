import { useContext } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, PostInputs } from "../../components"
import { IconHeader } from "../../components/layout"
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext"
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext"

export const PriceScreen = ({ navigation }) => {
  const {publishPost, handlePublishPost} = useContext(PublishPostContext)
  const { handlePublishProgress } = useContext(PublishProgressContext)

  const handleInputs = (name, input) => {
    handlePublishPost(name, input)
  }

  const handleAccept = () => {
    if (publishPost.price === 0 || publishPost.price === null) {
      alert('Ponga un valor')
      return 
    }
    handlePublishProgress('price', 10)
    navigation.goBack()
  }

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
                    placeholder: 'Ej: 50.000',
                    name: 'price'
                }
            ]
          }
          type={ 'price' }
          handleInputs={handleInputs}
          publishPost={publishPost}
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
    descriptionInputContainer: {
      flex: 7
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 16
    }
})