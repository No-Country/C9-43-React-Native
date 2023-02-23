import { useNavigation } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, View} from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

export const PressableStages = ({ title, description, path }) => {
    const navigation = useNavigation()
  return (
    <Pressable style={styles.pressableContainer} onPress={() => navigation.navigate(path)}>
        <View style={styles.container}>
            <Text style={ styles.pressableTitle }>
                { title }
            </Text>
            <BouncyCheckbox 
                size={24}
                fillColor={'#018349'}
            />
        </View>
        <Text style={ styles.pressableSubtitle }>
            { description }
        </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressableContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#CAC4D0',
        paddingVertical: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    pressableTitle: {
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.1,
        fontSize: 14,
        color: '#1E1E1E'
    },
    pressableSubtitle: {
        fontSize: 12,
        lineHeight: 24,
        color: '#979797'
    }
})
