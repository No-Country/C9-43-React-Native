import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { PostTopBar, TextedCheckbox } from "../../components"

export const Phase3Screen = () => {
  return (
    <View style={ styles.container }>

        <PostTopBar />

        <View
            style={ styles.titlesContainer }
        >
            <View>
                <Text
                    style={ styles.title }
                >
                    Nuevo anuncio
                </Text>
            </View>

            <View style={ styles.subtitleContainer }>
                <Text
                    style={ styles.subtitle }
                >
                    ¿Qué tipo de inmueble querés publicar?
                </Text>
            </View>
        </View>

        <View style={ styles.optionsContainer }>

            <TextedCheckbox text='Venta' />
            <TextedCheckbox text='Alquiler' />

        </View>

        <TouchableOpacity style={ styles.nextButton }>
            <Text style={ styles.nextButtonText }>
                Siguiente
            </Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    titlesContainer: {
        height: 68,
        marginLeft: 19,
        marginTop: 52
    },
    title: {
        fontSize: 24,
        lineHeight: 32
    },
    subtitleContainer:{
        marginTop: 10
    },
    subtitle: {
        lineHeight: 32
    },
    optionsContainer: {
        marginTop: 32,
        marginLeft: 32,
        marginRight: 88
    },
    nextButton: {
        backgroundColor: '#414141',
        width: 76,
        height: 37,
        position: 'absolute',
        bottom: 51,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    nextButtonText: {
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 1.25,
        color: '#FFFFFF'
    }
})
