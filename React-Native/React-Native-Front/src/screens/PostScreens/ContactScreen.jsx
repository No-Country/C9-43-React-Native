import { useContext, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { GreenButton, PostInputs } from "../../components"
import { IconHeader } from "../../components/layout"
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext"
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext"

export const ContactScreen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext(PublishPostContext)
  const { handlePublishProgress } = useContext(PublishProgressContext)

  const handleNext = () => {
    if (publishPost.phone < 10) {
      alert('No dejes campos vacios')
      return
    }
    handlePublishProgress('contact', 15)
    navigation.goBack()
  }

  return (
    <View style={ styles.container }>

        <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'}/>
        <View style={styles.descriptionInputContainer}>
        <Text style={ styles.title }>
            Contacto
        </Text>
        <Text style={styles.subtitle}>
        Indicá por donde querés que te contacten 
        </Text>
        <PostInputs 
          titleAndPlaceholder={[ 
            { 
              title: 'Correo electrónico', 
              placeholder: 'Ej: guadalupegomez@gmail.com',
              name: 'email',
              keyboard: 'email-address'
            },
            {
              title: 'Teléfono',
              placeholder: 'Ej: +54 11 3045-2149',
              name: 'phone',
              keyboard: 'numeric'
              
            }
          ]}
          handleInputs={handlePublishPost}
          publishPost={publishPost}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={handleNext}>
        <GreenButton text={'Aceptar'}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    descriptionInputContainer: {
      flex: 7,
      marginTop: 22,
    },  
    title: {
      fontSize: 26,
      lineHeight: 32,
      marginLeft: 19,
    },
    subtitle: {
      marginLeft: 19,
      marginTop: 10,
      marginBottom: 30
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 16
    }
})