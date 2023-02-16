import { StyleSheet, Text, View } from "react-native";

export const GreenPostButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Aceptar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "95%",
    height: 50,
    backgroundColor: "#018349",
    borderRadius: 4,
    justifyContent: "center",
    bottom: 22,
    left: "2.5%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1.25,
    color: "#FFFFFF",
  },
});
