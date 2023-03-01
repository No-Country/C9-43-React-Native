import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

export const HeaderMenuUnregistered = () => {
  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../../../assets/avatarless-icon.png")} />
        <Text style={styles.titleText}>
          Accedé para descubrir todas las funcionalidades disponibles
        </Text>
      </View>
      <View style={styles.registerLoginContainer}>
      <Pressable
          style={styles.optionsSubContainer}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Image
            source={require("../../../assets/icons/register-icon.png")}
          />
          <Text style={[styles.optionsText, {color: '#018349'}]}>Registrarme</Text>
        </Pressable>
        <Pressable
          style={styles.optionsSubContainer}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Image
            source={require("../../../assets/icons/login-icon.png")}
          />
          <Text style={styles.optionsText}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 22,
    paddingBottom: 17,
    paddingLeft: 21,
    backgroundColor: "#979797",
  },
  titleText: {
    paddingStart: 16,
    width: 228,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
  },
  registerLoginContainer: {
    paddingHorizontal: 30
  },
  optionsSubContainer: {
    flexDirection: "row",
    paddingVertical: 18,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CAC4D0",
  },
  optionsText: {
    paddingStart: 40,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
  },
});
