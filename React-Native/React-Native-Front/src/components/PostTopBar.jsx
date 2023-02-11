import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export const PostTopBar = () => {
  return (
    <View style={ styles.topBar }>
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
  )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        top: 38,
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 64,
        alignItems: 'center',
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
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