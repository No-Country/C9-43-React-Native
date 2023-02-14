import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Phase1Screen = () => {
  return (
    <View style={ styles.container }>

        <View style={ styles.mainImageContainer }>
            <Text
                style={ styles.mainImageText }
            >
                Publicá tu anuncio de la manera más fácil y rápida!
            </Text>
            <Image 
                style={ styles.mainImage }
                source={ require('../../../assets/images/Speech_Bubble.png') }
            />
            <TouchableOpacity
                style={ styles.mainImageButton }
            >
                <Text
                    style={ styles.mainImageButtonText }
                >
                    Publicar anuncio
                </Text>
            </TouchableOpacity>
        </View>

        <View
            style={ styles.textContainer}
        >
            <Text
                style={ styles.textTitle }
            >
                ¡Las ventajas de publicar en HomeQuest!
            </Text>

            <View
                style={ styles.textSubtitleContainer }
            >
                <Text
                    style={ styles.textSubtitle }
                >
                    Simple
                </Text>

                <Text>
                    Publicá tu anuncio en pocos y simples pasos.
                </Text>
            </View>

            <View
                style={ styles.textSubtitleContainer }
            >
                <Text
                    style={ styles.textSubtitle }
                >
                    Gratuito
                </Text>

                <Text>
                    Ofrecemos la posibilidad de publicar un anuncio de manera gratuita.
                </Text>
            </View>

            <View
                style={ styles.textSubtitleContainer }
            >
                <Text
                    style={ styles.textSubtitle }
                >
                    Usuarios verificados
                </Text>

                <Text
                    styles={ styles.textSubtitleDescription }
                >
                    Nuestros usuarios son confirmados por redes sociales e información personal.
                </Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainImageContainer:{
        top: 38,
        height: 360,
        width: '100%',
        backgroundColor: '#D9D9D9',
        alignItems: 'center'
    },
    mainImageText: {
        width: 271,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 30,
        letterSpacing: 0.15
    },
    mainImage: {
        marginTop: 24
    },
    mainImageButton: {
        width: 160,
        height: 49,
        borderRadius: 4,
        backgroundColor: '#018349',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainImageButtonText: {
        fontWeight: '500',
        letterSpacing: 1.25,
        color: '#FFFFFF'
    },
    textContainer: {
        marginTop: 47,
        marginLeft: 16
    }, 
    textTitle: {
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        width: 180
    },
    textSubtitleContainer: {
        marginTop: 16,
        marginBottom: 11,
        width: 291
    },
    textSubtitle: {
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.15
    },
    textSubtitleDescription: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: '300'
    }
})