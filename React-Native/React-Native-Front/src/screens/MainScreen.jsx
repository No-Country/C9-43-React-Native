import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"

export const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground
        style={styles.container}
        source={require('../../assets/bg-image.png')}
    >
        
        <View style={styles.logoContainer}>
            <Image 
                source={ require('../../assets/logoMain.png') }
                style={styles.image}
            />
        </View>

        <Text style={styles.title}>
            Home Quest es la app que te permite publicar tu inmueble y también encontrar el de tus sueños.
        </Text>

        <View style={styles.buttonsContainer}>

            <Pressable style={[styles.button, styles.buttonLogin]} onPress={() => navigation.navigate("LoginScreen")}>

                <Text style={[styles.buttonText, styles.buttonLoginText]}>Iniciar sesión</Text>

            </Pressable>

            <Pressable style={[styles.button, styles.buttonRegister]} onPress={() => navigation.navigate("RegisterScreen")}>

                <Text style={styles.buttonText}>Registrarme</Text>
                
            </Pressable>
            

            <Pressable style={styles.buttonSkip} onPress={() => navigation.navigate("HomeScreen")}>

                <Text style={styles.buttonSkipText}>Skip</Text>
                
            </Pressable>

        </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logoContainer: {
        marginTop: 157
    },
    image: {
        width: 89, 
        height: 66
    },
    title: {
        marginTop: 39,
        width: 248,
        height: 45, 
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 16
    },
    buttonsContainer: {
        marginTop: 174,
    },
    button: {
        width: 328,
        height: 49,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonLogin: {
        backgroundColor: '#000'
    },
    buttonText: {
        fontWeight: '500',
        letterSpacing: 1.25,
    },
    buttonLoginText: {
        color: '#ffffff',
    },
    buttonRegister: {
        borderColor: 'black',
        borderWidth: 1.5,
        marginTop: 21
    },  
    buttonSkip: {
        marginTop: 21,  //TODO preguntar por el margin de aca
        width: 328,
        height: 49,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSkipText: {
        fontWeight: '700'
    }
})