import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const HomeDirectOwners = () => {
  return (
    <View style={styles.ownersContainer}>
      <TouchableOpacity>
        <ImageBackground
          source={require("../../assets/HighlightedData/sala-estar-lujo-loft-representacion-3d-estanteria.png")}
          style={styles.image}
          blurRadius={5}
        >
          <Text style={[styles.description, { textAlign: "center" }]}>
            Departamentos con dueño directo
          </Text>
        </ImageBackground>
      </TouchableOpacity>
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
    fontWeight: "500",
    color: "#fff",
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
