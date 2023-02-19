import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";

export const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.fakeHeader}>
      <View style={styles.header}>        
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>
            <Text style={styles.headerText}>Perfil</Text>
          <Pressable onPress={() => navigation.navigate('Settings')}>
              <Image source={require('../../../assets/icons/setting-icon.png')} />
          </Pressable>
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
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 12,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#1C1B1F",
  },
});
