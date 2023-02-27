import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/base";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress'

export const PressableStages = ({ title, description, path, isChecked, loader }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => navigation.navigate(path)}
    >
      <View style={styles.container}>
        <Text style={styles.pressableTitle}>{title}</Text>
        {
          !loader ? (
            <CheckBox
              checked={isChecked}
              iconType="material-community"
              checkedIcon='check-circle'
              uncheckedIcon={false}
              checkedColor="#018349"
            />
          ) 
          : 
          (
            <Progress.Circle
              size={30}
              width={200}
            />
          )
        }
      </View>
      <Text style={styles.pressableSubtitle}>{description}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#CAC4D0",
    paddingVertical: 8,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  pressableTitle: {
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.1,
    fontSize: 14,
    color: "#1E1E1E",
  },
  pressableSubtitle: {
    fontSize: 12,
    lineHeight: 24,
    color: "#979797",
    marginTop: -15
  },
});
