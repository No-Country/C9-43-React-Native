import { Image, StyleSheet, Text, View } from "react-native";
import { Button, IconButton, TextInput } from "@react-native-material/core";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// TODO: Ver logo y bordes inputs

export const LoginScreen = ({ navigation }) => {

    const [secured, setSecured] = useState(true);

  return (
    <SafeAreaView style={ styles.container }>

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

            <TextInput 
                style={ styles.passwordInput }
                secureTextEntry={ secured }
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect={ false }
                variant='outlined'
                placeholder='Ingresa tu contraseña'
                placeholderTextColor={ '#414141' }
                inputContainerStyle={{ backgroundColor: '#D9D9D9' }}
                trailing={ props => (
                    <IconButton 
                        icon={ props => <Ionicons name={ secured ? 'eye-outline' : 'eye-off-outline' } size={24} color="black" {...props} />} {...props}
                        onPress={ () => setSecured( prev => !prev ) }
                    />
                )}
                
            />

            <Button 
                style={ styles.joinButton }
                title='Ingresar'
                color='#000000'
                tintColor="#FFFFFF"
                titleStyle={{ fontSize: 14, letterSpacing: 1.25 }}
                uppercase={ false }
            />

        </View>

    </SafeAreaView>
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
        marginTop: 29
    },
    emailInput: {
        width: 327,
        height: 56
    },
    passwordInput: {
        marginTop: 20, 
        width: 327,
        height: 56
    },
    joinButton: {
        marginTop: 73,
        width: 160,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    }
})
