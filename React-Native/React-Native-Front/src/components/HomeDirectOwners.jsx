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
          source={require("../../assets/HighlightedData/sala-estar-lujo-loft-representacion-3d-estanteria.png")}
          style={styles.image}
          blurRadius={5}
        >
          <Text style={[styles.description, { textAlign: "center" }]}>
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
    marginBottom: 0,
    margin: 2,

  },
  description: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 24,
    color: "#EDF6F9",
    paddingTop: 40,
  },
  image: {
    width: 326,
    height: 96,
    borderRadius: 20,
    overflow: "hidden",
    opacity: 0.9,
  },
});
