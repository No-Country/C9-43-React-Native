import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";

const highlightedData = [
  {
    id: 1,
    type: "Departamento en venta",
    value: 85000,
    location: "Bolivar al 1700, Capital Federal, Argentina",
    ambientes: 1,
    baños: 1,
  },
];

const HighlightedCard = () => {
  return (
    <View style={[styles.cardContainer, { marginTop: 30 }]}>
      <View styles={styles.cardContainer}>
        <View>
          <Image
            styles={styles.image}
            source={require("../../assets/HighlightedData/sala-estar-lujo-loft-representacion-3d-estanteria.png")}
          />
          <View style={styles.heartContainer}></View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Image
            style={styles.iconType}
            source={require("../../assets/HighlightedData/domain.png")}
          />

          <Text style={styles.cardTitle}> {highlightedData[0].type} </Text>
        </View>
        <Text style={styles.value}>{highlightedData[0].value} USD </Text>
        <Text style={styles.location}>{highlightedData[0].location} </Text>
        <View style={[styles.rooms, { flexDirection: "row" }]}>
          <Image
            style={styles.image}
            source={require("../../assets/HighlightedData/rooms.png")}
          />
          <Text>{highlightedData[0].ambientes} Ambientes </Text>
          <Image
            style={styles.image}
            source={require("../../assets/HighlightedData/bath.png")}
          />
          <Text>{highlightedData[0].ambientes} Baños </Text>
        </View>
      </View>
    </View>
  );
};

export default HighlightedCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    marginBottom: 40,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 15,
  },

  image: {
    marginRight: 5,
    marginLeft: 20,
  },

  cardTitle: {
    color: "#979797",
    fontSize: 18,
  },

  iconType: {
    width: 15,
    marginLeft: 20,
    marginTop: 3,
    marginRight: 5,
  },
  value: {
    color: "#49454F",
    fontSize: 15,
    marginLeft: 20,
    fontWeight: "800",
    marginTop: 12,
  },
  location: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 14,
    color: "#49454F",
    fontWeight: "400",
  },
  rooms: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: "400",
    color: "#49454F",
  },
  heartContainer: {
    height: 50,
    backgroundColor: "#D9D9D9",
    width: 50,
    position: "absolute",
    right: 0,
    borderRadius: 10,
    opacity: 0.4,
  },
});
