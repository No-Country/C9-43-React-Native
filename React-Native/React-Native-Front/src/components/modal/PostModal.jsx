import { MaterialIcons } from "@expo/vector-icons"
import { Modal, Pressable, StyleSheet, Text, View } from "react-native"

export const PostModal = ({ isModalOpen, handleToggleModal }) => {
  return (
    <Modal
        animationType="fade"
        transparent={ true }
        visible={ isModalOpen }
        onRequestClose={ handleToggleModal }
    >
        <View style={ styles.container }>
            <View style={ styles.modalContainer }>

                <MaterialIcons name="check-circle-outline" size={24} color="#018349" />

                <Text style={ styles.title }>
                ¡Inmueble publicado!
                </Text>

                <Text style={ styles.text }>
                ¡Felicidades por haber publicado tu primer inmueble! Te enviaremos via  E-mail el aviso de contacto de quien te quiera hacer alguna consulta. Estaremos informándote a la brevedad
                </Text>

                <Pressable 
                    onPress={ handleToggleModal }
                    style={ styles.button }
                >
                    <Text style={ styles.buttonText }>Aceptar</Text>
                </Pressable>

            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 52, 52, 52, 0.8)'
    },
    modalContainer: {
        height: 300,
        width: 286,
        paddingHorizontal: 24,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    title: {
        fontSize: 24,
        lineHeight: 32
    },
    text: {
        lineHeight: 20,
        letterSpacing: 0.25
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 2
    },
    buttonText: {
        color: '#018349',
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.1
    }
})