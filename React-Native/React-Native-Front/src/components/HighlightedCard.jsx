import { useNavigation } from "@react-navigation/native";
import { BackgroundImage } from "@rneui/base";
import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

const highlightedData = [
  {
    id: 1,
    type: "Departamento en venta",
    value: 85000,
    ambientes: 3,
    baños: 1,
    title: "Departamento de 3 ambientes",
    description:
      "Hermoso departamento espacioso sobre Bolivar,super luminoso con poca antigüedad cercano a la linea “D” del subte y a bancos,supermercados y Hospitales.",
    pictures: [
      require("../../assets/sample-pics/photo1.png"),
      require("../../assets/sample-pics/photo2.png"),
      require("../../assets/sample-pics/photo3.png"),
      require("../../assets/sample-pics/photo4.png"),
    ],
    price: 85000,
    city: "Capital Federal",
    region: "Argentina",
    address: "Bolivar al 1700",
    sqMeters: 70,
    ambiances: 3,
    bedrooms: 2,
    bathrooms: 1,
    antiquity: 2010,
    propertyType: "departamento",
    businessType: "venta",
    parking: false,
    phone: "",
  },
];

const HighlightedCard = () => {
  const [isActive, setIsActive] = useState(false);
  const favorite = () => {
    setIsActive(!isActive);
  };
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => navigation.navigate("PropertyScreen", { highlightedData })}
    >
      <BackgroundImage
        style={styles.publishImage}
        imageStyle={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
        source={require("../../assets/HighlightedData/sala-estar-lujo-loft-representacion-3d-estanteria.png")}
      >
        <Pressable style={styles.heartContainer} onPress={favorite}>
          <Image
            source={
              isActive
                ? require("../../assets/Home/heartActive.png")
                : require("../../assets/Home/favorite.png")
            }
          />
        </Pressable>
      </BackgroundImage>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Image source={require("../../assets/icons/building-icon.png")} />
          <Text style={styles.titleText}> {highlightedData[0].type} </Text>
        </View>
        <Text style={styles.priceText}>{highlightedData[0].value} USD </Text>
        <Text style={styles.addressText}>
          {highlightedData[0].address}, {highlightedData[0].city},{"\n"}
          Argentina{" "}
        </Text>
        <View style={styles.roomsContainer}>
          <View style={styles.roomsInfoContainer}>
            <View style={styles.roomContainer}>
              <Image
                source={require("../../assets/HighlightedData/rooms.png")}
              />
              <Text style={styles.roomsText}>
                <Text style={{ fontWeight: "700" }}>
                  {highlightedData[0].ambientes}
                </Text>{" "}
                Ambientes{" "}
              </Text>
            </View>
            <View style={styles.bathContainer}>
              <Image
                source={require("../../assets/HighlightedData/bath.png")}
              />
              <Text style={styles.roomsText}>
                <Text style={{ fontWeight: "700" }}>
                  {highlightedData[0].ambientes}
                </Text>{" "}
                baño{" "}
              </Text>
            </View>
          </View>
          <Image source={require("../../assets/Home/avatar.png")} />
        </View>
      </View>
    </Pressable>
  );
};

export default HighlightedCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    marginBottom: 40,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    paddingBottom: 16,
    marginHorizontal: 11,
  },
  publishImage: {
    width: "100%",
    height: 216,
    borderRadius: 15,
  },
  heartContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    height: 50,
    backgroundColor: "rgba(30, 30, 30, 0.4)",
    width: 50,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  infoContainer: {
    marginLeft: 19,
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 7.5,
  },
  titleText: {
    marginLeft: 9.3,
    fontSize: 18,
    lineHeight: 25,
    color: "#979797",
  },
  image: {
    marginRight: 5,
  },
  priceText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 9,
  },
  addressText: {
    marginTop: 9,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "#1E1E1E",
  },
  roomsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
  },
  roomsInfoContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginTop: 9,
  },
  roomContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bathContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  roomsText: {
    marginLeft: 6.3,
  },
});
