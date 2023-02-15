import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export const PostTopBar = () => {
  return (
    <View style={ styles.topBar }>
        <View style={ styles.topBarContent }>
            <Ionicons 
                name="close"
                style={ styles.topBarIcon } 
                size={24} 
                color="black" 
            />

            <Text style={ styles.topBarText }>
                Publicar anuncio
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topBar: {
        overflow: 'hidden',
        top: 38,
        paddingBottom: 6
    },
    topBarContent: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 64,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity:  0.8,
        shadowRadius: 4,
        elevation: 12
    },
    topBarIcon: {
        marginLeft: 21
    },
    topBarText: {
        fontSize: 16,
        color: '#1C1B1F',
        marginLeft: 21
    }
})