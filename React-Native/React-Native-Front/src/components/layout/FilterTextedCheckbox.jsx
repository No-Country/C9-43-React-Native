import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

export const FilterTextedCheckbox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={ styles.option }>

        <Text style={ styles.optionText }>
            { text }
        </Text>

        <BouncyCheckbox 
            innerIconStyle={[{borderRadius: 4}, isChecked ? styles.borderColorChecked : styles.borderColorUnChecked]}
            iconStyle={ {borderRadius: 4} } 
            fillColor={ '#018349'}
            unfillColor={ '#FFFFFF' }
            bounceEffectIn={ 1 }
            bounceEffectOut={ 1 }
            onPress={() => setIsChecked(!isChecked)}
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
    borderColorUnChecked: {
      borderColor: '#979797'
    },
    borderColorChecked: {
      borderColor: '#018349'
    }
})
