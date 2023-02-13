import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

//TODO make the shadow of the header

export const MenuScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Menú</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/profile-picture.png")}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Guadalupe Gomez</Text>
            <Text style={styles.editText}>Editar perfil</Text>
          </View>
        </View>

        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/dollarHouse-icon.png")} />
          <Text style={styles.optionsText}>Publicar</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/message-icon.png")} />
          <Text style={styles.optionsText}>Mensajes</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/favorite-icon.png")} />
          <Text style={styles.optionsText}>Favoritos</Text>
        </Pressable>
        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/language-icon.png")} />
          <Text style={styles.optionsText}>Idioma</Text>
        </Pressable>
        <Pressable style={styles.optionsSubContainer}>
          <Image
            source={require("../../assets/icons/circleQuestion-icon.png")}
          />
          <Text style={styles.optionsText}>Faq</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/termsAndCond-icon.png")} />
          <Text style={styles.optionsText}>Términos y condiciones</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/logout-icon.png")} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 30
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 10,
  },
  profilePicture: {
    width: 67,
    height: 67,
  },
  nameContainer: {
    paddingStart: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    color: "#272727",
  },
  editText: {
    paddingStart: 5,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: "#979797",
  },
  optionsSubContainer: {
    flexDirection: "row",
    paddingVertical: 18,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CAC4D0",
  },
  optionsText: {
    paddingStart: 40,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 18,
  },
  logoutText: {
    paddingStart: 40,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    color: "#DB504A",
  },
});
