import { BackgroundImage } from "@rneui/base";
import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";

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

export const FavouriteCard = () => {
  const [isActive, setIsActive] = useState(false);
  const favorite = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.cardContainer}>
      <BackgroundImage
        source={require("../../assets/HighlightedData/sala-estar-lujo-loft-representacion-3d-estanteria.png")}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.imageBackgroundContainer}
      >
        <Pressable style={styles.trashIconContainer}>
          <Image source={require("../../assets/icons/trash-icon.png")} />
        </Pressable>
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
          <View style={{ flexDirection: "row" }}>
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
    </View>
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
    backgroundColor: '#D9D9D9'
  },
  imageBackground: {
    flex: 1,
    height: 216,
  },
  imageBackgroundContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  trashIconContainer: {
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgba(203, 45, 45, 0.4)",
    width: 50,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 10,
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
    marginRight: 10,
  },
  icon: {
    marginRight: 6,
  },
  avatar: {
    width: 33,
    height: 31,
    marginRight: 19,
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
