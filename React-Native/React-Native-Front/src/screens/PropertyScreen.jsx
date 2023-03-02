import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, ScrollView, Pressable } from "react-native";
import { IconHeader } from "../components";
import PagerView from "react-native-pager-view";

export const PropertyScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const highlightedData = route.params?.highlightedData;
  console.log(highlightedData[0].pictures[0]);
  const title =
    highlightedData[0].propertyType.charAt(0).toUpperCase() +
    highlightedData[0].propertyType.slice(1);

  return (
    <View style={styles.container}>
      <IconHeader
        icon={"arrow-back"}
        navigation={navigation}
        title={`${title} en ${highlightedData[0].businessType}...`}
      />

      <PagerView
        style={styles.pagerView}
        overScrollMode="always"
        initialPage={0}
      >
        {highlightedData[0].pictures.map((image, index) => (
          <View key={index}>
            <Image style={styles.image} source={image} />
          </View>
        ))}
      </PagerView>
      <ScrollView>
        <View style={styles.infoContainer}>
          <View style={styles.propertyTypeContainer}>
            <View style={styles.propertyTypeInnerContainer}>
              <Image source={require("../../assets/icons/building-icon.png")} />
              <Text style={styles.propertyTypeText}>
                {title} en {highlightedData[0].businessType}
              </Text>
            </View>

            <Image
              width={33}
              height={31}
              source={require("../../assets/Home/avatar_2.png")}
            />
          </View>
          <Text style={styles.priceText}>{highlightedData[0].price} USD</Text>
          <Text style={styles.addressText}>
            {highlightedData[0].address}, {highlightedData[0].city},{" "}
            {highlightedData[0].region}
          </Text>
          <View style={styles.ambiancesContainer}>
            <View style={styles.ambiancesIconContainer}>
              <Image
                source={require("../../assets/icons/ambiances-icon.png")}
              />
              <Text style={styles.ambianceNumber}>
                {highlightedData[0].ambiances}
              </Text>
              <Text style={styles.ambianceText}>
                Ambiente{highlightedData[0].ambiances > 1 ? "s" : null}
              </Text>
            </View>
            <View style={styles.bathroomsContainer}>
              <Image source={require("../../assets/icons/bathroom-icon.png")} />
              <Text style={styles.ambianceNumber}>
                {highlightedData[0].bathrooms}
              </Text>
              <Text style={styles.ambianceText}>
                baño{highlightedData[0].bathrooms > 1 ? "s" : null}
              </Text>
            </View>
          </View>
          <Text style={styles.titleText}>{highlightedData[0].title}</Text>
          <Text style={styles.descriptionText}>
            {highlightedData[0].description}
          </Text>
          <Text style={styles.locationText}>Ubicación Aproximada</Text>
          {/* ACA VA EL MAPA QUE HAY QUE PONER TARJETA DE CREDITO */}
          <Text style={styles.characteristics}>Características</Text>
          <View style={styles.characteristicsContainer}>
            <Text style={styles.characteristicsKey}>
              . Antiguedad:{" "}
              <Text style={styles.characteristicsValue}>
                {" "}
                {highlightedData[0].antiquity}
              </Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Cant. ambientes:{" "}
              <Text style={styles.characteristicsValue}>
                {highlightedData[0].ambiances}
              </Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Cant. dormitorios:{" "}
              <Text style={styles.characteristicsValue}>
                {" "}
                {highlightedData[0].bedrooms}{" "}
              </Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Cant. baños:{" "}
              <Text style={styles.characteristicsValue}>
                {highlightedData[0].bathrooms}{" "}
              </Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Estado:{" "}
              <Text style={styles.characteristicsValue}> Disponible</Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Garage:{" "}
              <Text style={styles.characteristicsValue}>
                {" "}
                {highlightedData[0].garage ? "Si" : "No"}{" "}
              </Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Tipo de propiedad:{" "}
              <Text style={styles.characteristicsValue}> {title} </Text>
            </Text>
            <Text style={styles.characteristicsKey}>
              . Superficie:{" "}
              <Text style={styles.characteristicsValue}>
                {" "}
                {highlightedData[0].sqMeters} m²{" "}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.contactContainer}>
        <View style={styles.iconPhoneContainer}>
          <Image source={require("../../assets/icons/phone-icon.png")} />
        </View>
        <Pressable style={styles.sendMessageContainer} onPress={() => navigation.navigate('ContactAgency')}>
          <Image source={require("../../assets/icons/mail-icon.png")} />
          <Text style={styles.sendMessageText}>Enviar mensaje</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pagerView: {
    height: 246,
  },
  image: {
    width: "100%",
    height: 246,
  },
  infoContainer: {
    marginLeft: 16,
    marginRight: 14,
  },
  propertyTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    marginRight: 26.46,
  },
  propertyTypeInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  propertyTypeText: {
    paddingStart: 9,
    fontSize: 16,
    lineHeight: 24,
    color: "#979797",
  },
  priceText: {
    fontWeight: "700",
    fontSize: 19,
    lineHeight: 20,
    color: "#1E1E1E",
  },
  addressText: {
    marginTop: 19,
    fontSize: 14,
    lineHeight: 20,
  },
  ambiancesContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginRight: 131,
  },
  ambiancesIconContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  bathroomsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 21,
  },
  ambianceNumber: {
    paddingStart: 6,
    paddingEnd: 3,
    fontWeight: "700",
  },
  ambianceText: {
    color: "#49454F",
  },
  titleText: {
    marginTop: 25,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
  descriptionText: {
    marginRight: 48,
    lineHeight: 21,
    textAlign: "left",
  },
  locationText: {
    marginTop: 15.5,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#979797",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 54,
  },
  iconPhoneContainer: {
    width: "25%",
    alignItems: "center",
  },
  sendMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: 54,
    backgroundColor: "#1E1E1E",
  },
  sendMessageText: {
    color: "#fff",
    marginLeft: 7,
    fontWeight: "500",
    lineHeight: 20,
  },
  map: {
    width: "100%",
    height: 203,
    marginTop: 9,
  },
  characteristics: {
    marginTop: 12,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#979797",
  },
  characteristicsContainer: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 5,
  },
  characteristicsKey: {
    fontWeight: '700',
    color: '#1E1E1E'
  },
  characteristicsValue: {
    fontWeight: '400'
  }
});
