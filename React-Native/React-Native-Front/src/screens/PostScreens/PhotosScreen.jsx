import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { GreenButton, PostTopBar } from "../../components";
import { IconHeader } from "../../components/layout";

export const PhotosScreen = ({ navigation }) => {
  return (
    
    <View style={ styles.container }>

        <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'}/>

        <View style={ styles.contentContainer }>
            <Text style={ styles.title }>
                Fotos
            </Text>

            <Text style={ styles.subtitle }>
                Agregá fotos y planos del inmueble
            </Text>

            <Text style={ styles.subtitle }>
                { `( formato JPG, PNG )` }
            </Text>

            <Text style={ styles.counter }>
                Agregadas: 0/10
            </Text>

            <Pressable style={ styles.photoContainer }>

                <Feather
                    style={{ textAlign: 'center' }} 
                    name="plus" 
                    size={24} 
                    color="black" 
                />

            </Pressable>
        </View>
        <Pressable style={styles.buttonContainer} onPress={() => navigation.goBack()}>
            <GreenButton text={'Aceptar'} />
        </Pressable>

    </View>

    

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    contentContainer: {
        flex: 7,
        marginLeft: 19,
        marginTop: 22,
    },
    title: {
        fontSize: 26,
        lineHeight: 32,
        color: "#1E1E1E"
    },
    subtitle: {
        lineHeight: 32,
        color: '#1E1E1E'
    },
    counter: {
        color: '#979797',
        fontSize: 10,
        lineHeight: 24
    },
    photoContainer: {
        width: 140,
        height: 96,
        marginTop: 16,
        borderRadius: 4,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 16
    }
})