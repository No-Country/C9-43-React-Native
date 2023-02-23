import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { CheckBox } from '@rneui/themed'

export const FilterTextedCheckbox = ({ text, isChecked, setIsChecked }) => {
  
  return (
    <View style={ styles.option }>

        <Text style={ styles.optionText }>
            { text }
        </Text>
        <CheckBox
          iconType="material-community"
          checkedIcon='checkbox-marked'
          uncheckedIcon='checkbox-blank-outline'
          checkedColor="#018349"
          checked={isChecked}
          onPress={setIsChecked}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 
    },
    optionText: {
        // flex: 1,
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
