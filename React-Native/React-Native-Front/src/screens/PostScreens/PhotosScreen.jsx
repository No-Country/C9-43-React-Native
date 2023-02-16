import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { PostTopBar } from "../../components";

export const PhotosScreen = () => {
  return (
    
    <View style={ styles.container }>

        <PostTopBar />

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

            <TouchableOpacity style={ styles.photoContainer }>

                <Feather
                    style={{ textAlign: 'center' }} 
                    name="plus" 
                    size={24} 
                    color="black" 
                />

            </TouchableOpacity>
        </View>

    </View>

    

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    contentContainer: {
        marginLeft: 19,
        marginTop: 52
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
    }
})