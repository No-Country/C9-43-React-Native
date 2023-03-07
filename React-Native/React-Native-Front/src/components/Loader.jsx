import React from "react";
import { View, StyleSheet, Modal, Text, Animated, Button } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export const Loader = ({ isVisible }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.text}>¡Estamos confirmando tus datos!</Text>
          {/* <View style={styles.greenBall1} />
          <View style={styles.greenBall2} />
          <View style={styles.greenBall3} /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 157,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  ballsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
  },
  greenBall1: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#D4F9E8",
  },
  greenBall2: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#D4F9E8",
  },
  greenBall3: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#D4F9E8",
  },
  lottie: {
    width: 100,
    height: 100,
  }
});
