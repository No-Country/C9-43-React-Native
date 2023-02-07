import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// TODO: Agregar flechita volver atrás

export const LoginScreen = () => {
  return (
    <View style={ styles.container }>

        <Image
            style={ styles.logo } 
            source={ require('../../assets/logo.png') }
        />

        <Text style={ styles.title }>
            Bienvenido a House Quest!
        </Text>

        <Text style={ styles.subtitle }>
            Ingresar con mi e-Mail
        </Text>

        <View style={ styles.inputs }>

            <TextInput 
                style={ styles.emailInput }
                placeholder='E-mail'
            />

            <TextInput 
                style={ styles.passwordInput }
                placeholder='Contraseña'
            />

            <TouchableOpacity style={ styles.joinButton }>
                <Text style={ styles.joinButtonText }>
                    Ingresar
                </Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginTop: 102
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginTop: 46
    },
    subtitle: {
        marginTop: 30,
        fontWeight: '300',
        fontSize: 15
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18
    },
    emailInput: {
        width: 326,
        height: 47,
        backgroundColor: '#D9D9D9',
        paddingLeft: 19,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    passwordInput: {
        marginTop: 30,
        width: 326,
        height: 47,
        backgroundColor: '#D9D9D9',
        paddingLeft: 19,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    joinButton: {
        marginTop: 30,
        width: 160,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 4
    },
    joinButtonText: {
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: 1.25
    }

})
