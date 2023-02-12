import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const PressableStages = ({ title, description }) => {
  return (
    <Pressable style={ styles.pressableContainer }>
        <Text style={ styles.pressableTitle }>
            { title }
        </Text>
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
        paddingBottom: 12,
        paddingTop: 12
    },
    pressableTitle: {
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.1,
        fontSize: 16
    },
    pressableSubtitle: {
        lineHeight: 24,
        letterSpacing: 0.1
    }
})
