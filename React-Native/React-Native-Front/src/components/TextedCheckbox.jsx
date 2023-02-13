import { StyleSheet, Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

export const TextedCheckbox = ({ text }) => {
  return (
    <View style={ styles.option }>

        <Text style={ styles.optionText }>
            { text }
        </Text>

        <BouncyCheckbox 
            innerIconStyle={{ borderRadius: 4 }}
            iconStyle={{ borderRadius: 4 }}
            fillColor={ '#000000'}
            unfillColor={ '#FFFFFF' }
            bounceEffectIn={ 1 }
            bounceEffectOut={ 1 }
        />

    </View>
  )
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        marginBottom: 32
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        letterSpacing: 0.5,
    },
})
