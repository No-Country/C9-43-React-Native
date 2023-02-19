import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Pressable, Text } from "react-native";

export const SettingsHeader = ({ navigation, title }) => {
  return (
    <View style={styles.fakeHeader}>
      <View style={styles.header}>        
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    overflow: "hidden",
    paddingBottom: 6,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 12,
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: "400",
    fontSize: 16,
    color: "#1C1B1F",
  },
});
