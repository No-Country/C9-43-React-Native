import { Button } from "@react-native-material/core"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

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

            <Button title='Iniciar sesión' titleStyle={styles.buttonWeight}  color='#000' uppercase={false} contentContainerStyle={styles.buttonLogin} onPress={() => navigation.navigate("LoginScreen")}/>
            
            <Button title='Registrarme' color='#000' titleStyle={styles.buttonWeight} contentContainerStyle={styles.buttonRegister}  variant="text"  uppercase={false}  onPress={() => navigation.navigate("RegisterScreen")} />
            
            <Button title='Skip'  uppercase={false} variant='text' color='#000' titleStyle={{fontWeight: '700'}} contentContainerStyle={{marginTop: 21}} onPress={() => navigation.navigate("HomeScreen")}/>

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
    buttonLogin: {
        width: 328,
        height: 49
    },
    buttonRegister: {
        width: 328,
        height: 49,
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 4,
        marginTop: 21
    },  
    buttonLoginText: {
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1.25,
        fontWeight: '500'
    },
    buttonWeight: {
        fontWeight: '500'
    }
})