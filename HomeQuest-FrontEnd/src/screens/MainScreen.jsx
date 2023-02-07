import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const MainScreen = () => {
  return (
    <View style={ styles.container }>

        <View style={ styles.logoContainer }>
            <Image 
                source={ require('../../assets/logo.png') }
            />
        </View>

        <View style={ styles.lorem }>
            <Text style={ styles.title }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
            </Text>
        </View>

        <View style={ styles.buttonsContainer }>

            <TouchableOpacity style={ styles.buttonLogin }>
                <Text style={ styles.buttonLoginText }>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.buttonRegister }>
                <Text style={ styles.buttonRegisterText }>Registrarme</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.buttonSkip }>
                <Text style={ styles.buttonSkipText }>Skip</Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logoContainer: {
        top: 102
    },
    lorem: {
        top: 228,
        width: 291,
        height: 60
    },
    title: {
        textAlign: 'left',
        fontSize: 13,
        fontWeight: '300'
    },
    buttonsContainer: {
        top: 419,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogin: {
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 328,
        height: 49,
        borderRadius: 4
    },
    buttonLoginText: {
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1.25,
        fontWeight: '500'
    },
    buttonRegister: {
        justifyContent: 'center',
        width: 328,
        height: 49,
        top: 21,
        borderWidth: 1,
        borderRadius: 4
    },
    buttonRegisterText: {
        color: 'black',
        textAlign: 'center',
        letterSpacing: 1.25,
        fontWeight: '500'
    },
    buttonSkip: {
        top: 36
    },
    buttonSkipText: {
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1.25
    }
})