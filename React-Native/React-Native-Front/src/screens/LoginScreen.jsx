import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from "react";

// TODO: Ver logo y bordes inputs

export const LoginScreen = ({ navigation }) => {

    const [secured, setSecured] = useState(true);

  return (
    <View style={ styles.container }>

        <AntDesign 
            name="arrowleft" 
            size={24} 
            color="black" 
            style={ styles.arrow }
            onPress={ () => navigation.navigate('MainScreen') }
        />

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
                variant='outlined'
                placeholder='Ingresa tu E-mail'
                placeholderTextColor={'#414141'}
                inputContainerStyle={{ backgroundColor: '#D9D9D9' }}
            />

            <View style={ styles.passwordInputView }>
                <TextInput 
                    style={ styles.passwordInput }
                    secureTextEntry={ secured }
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect={ false }
                    placeholder='Ingresa tu contraseña'
                    placeholderTextColor={ '#414141' }
                />
                <Ionicons 
                    style={ styles.passwordInputIcon }
                    name={ secured ? 'eye-outline' : 'eye-off-outline' }
                    size={24} 
                    color="black"
                    onPress={ () => setSecured( prev => !prev )}
                />
            </View>

            <TouchableOpacity
                style={ styles.joinButton }
            >
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
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    arrow: {
        alignSelf: 'flex-start',
        marginTop: 46,
        left: 27
    },
    logo: {
        marginTop: 40,
        width: 89,
        height: 66
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginTop: 32
    },
    subtitle: {
        marginTop: 11,
        fontWeight: '300',
        fontSize: 15
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45,
        width: '100%',
        paddingHorizontal: 16
    },
    emailInput: {
        width: '100%',
        height: 56,
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#414141',
        backgroundColor: '#E4E4E4',
        fontSize: 16,
        color: '#414141'
    },
    passwordInputView: {
        width: '100%',
        flexDirection: 'row',
        height: 56,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#414141'
    },
    passwordInput: {
        flex: 1,
        height: 56,
        paddingLeft: 16,
        fontSize: 16,
        color: '#414141'
    },
    passwordInputIcon: {
        marginHorizontal: 20,
    },
    joinButton: {
        marginTop: 73,
        width: 160,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#000000'
    },
    joinButtonText: {
        color: '#FFFFFF',
        fontWeight: '500',
        letterSpacing: 1.25
    }
})
