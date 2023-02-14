import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const GreenPostButton = () => {
  return (
    <TouchableOpacity style={ styles.button }>
        <Text style={ styles.buttonText }>
            Aceptar
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: '95%',
        height: 50,
        backgroundColor: '#018349',
        borderRadius: 4,
        justifyContent: 'center',
        bottom: 22,
        left: '2.5%'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '500',
        letterSpacing: 1.25,
        color: '#FFFFFF'
    }
})