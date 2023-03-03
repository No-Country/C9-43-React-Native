import { useNavigation } from "@react-navigation/native";
import { BackgroundImage } from "@rneui/base";
import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";

const highlightedData = [
  {
    id: 1,
    type: "Departamento en venta",
    value: 85000,
    location: "Bolivar al 1700, Capital Federal, Argentina",
    ambientes: 3,
    baños: 1,
    title: 'Departamento de 3 ambientes',
    description: 'Hermoso departamento espacioso sobre Bolivar,super luminoso con poca antigüedad cercano a la linea “D” del subte y a bancos,supermercados y Hospitales.',
    pictures: [require('../../assets/sample-pics/photo1.png'), require('../../assets/sample-pics/photo2.png'), require('../../assets/sample-pics/photo3.png'), require('../../assets/sample-pics/photo4.png')],
    price: 85000,
    city: 'Capital Federal',
    region: 'Argentina',
    address: 'Bolivar al 1700',
    sqMeters: 70,
    ambiances: 3,
    bedrooms: 2,
    bathrooms: 1,
    antiquity: 2010,
    propertyType: 'departamento',
    businessType: 'venta',
    parking: false,
    phone: '',
  },
];

export const PropertyCard = () => {
  const navigation = useNavigation()
  const [isActive, setIsActive] = useState(false);
  const favorite = () => {
    setIsActive(!isActive);
  };

  return (
    <Pressable style={styles.cardContainer} onPress={() => navigation.navigate("PropertyScreen", {highlightedData})}>
      <BackgroundImage
        source={require("../../assets/HighlightedData/sala-estar-lujo-loft-representacion-3d-estanteria.png")}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
      >
        <View style={styles.heartContainer}>
          <TouchableOpacity onPress={favorite}>
            <Image
              source={
                isActive
                  ? require("../../assets/Home/heartActive.png")
                  : require("../../assets/Home/favorite.png")
              }
            />
          </TouchableOpacity>
        </View>
      </BackgroundImage>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.iconType}
            source={require("../../assets/HighlightedData/domain.png")}
          />

          <Text style={styles.cardTitle}> {highlightedData[0].type} </Text>
        </View>
        <Text style={styles.valueText}>
          {highlightedData[0].value.toLocaleString()} USD{" "}
        </Text>
        <Text style={styles.locationText}>{highlightedData[0].location} </Text>
        <View style={styles.footerContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.footerInnerContainer}>
              <Image
                style={styles.icon}
                source={require("../../assets/HighlightedData/rooms.png")}
              />
              <Text>{highlightedData[0].ambientes} Ambientes </Text>
            </View>
            <View style={styles.footerInnerContainer}>
              <Image
                style={styles.icon}
                source={require("../../assets/HighlightedData/bath.png")}
              />
              <Text>{highlightedData[0].ambientes} Baño </Text>
            </View>
          </View>
          <Image
            source={require("../../assets/Home/avatar.png")}
            style={styles.avatar}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    marginHorizontal: 11,
  },
  imageBackground: {
    flex: 1,
    height: 216,
  },
  infoContainer: {
    marginTop: 5,
    marginLeft: 19,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    paddingStart: 10,
    fontSize: 16,
    lineHeight: 24,
    color: "#979797",
  },
  valueText: {
    marginTop: 9,
    fontWeight: "700",
    fontSize: 14,
    color: "#1E1E1E",
  },
  locationText: {
    marginTop: 9,
    width: 243,
    fontSize: 14,
    color: "#1E1E1E",
    fontWeight: "400",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 9,
  },
  footerInnerContainer: {
    flexDirection: "row",
    marginRight: 10
  },
  icon: {
    marginRight: 6
  },
  avatar: {
    marginRight: 19
  },
  heartContainer: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgba(30, 30, 30, 0.4)",
    width: 50,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 10,
  },
});
