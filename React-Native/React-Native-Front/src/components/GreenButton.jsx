import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const GreenButton = ({ text }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#018349",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1.25,
    color: "#ffffff",
  },
});
