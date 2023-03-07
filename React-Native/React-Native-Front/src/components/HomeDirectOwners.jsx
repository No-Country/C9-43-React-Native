import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

const HomeDirectOwners = () => {
  return (
    <View style={styles.ownersContainer}>
      <Pressable>
        <ImageBackground
          source={require("../../assets/homeScreen-features-img.png")}
          style={styles.image}
          blurRadius={3}
        >
          <Text style={styles.description}>
            Departamentos con dueño directo
          </Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default HomeDirectOwners;

const styles = StyleSheet.create({
  ownersContainer: {
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
    color: "#EDF6F9",
    elevation: 3
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 326,
    height: 96,
    borderRadius: 20,
    overflow: "hidden",
  },
});
