import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { SimpleHeader } from "../components/layout";
import { LogOutModal, LanguageModal, AboutUsModal } from "../components/modal";
import { useAboutUsModal, useLanguageModal, useLogOutModal } from "../hooks";

export const MenuScreen = ({ navigation }) => {
  const { isLogOutModalOpen, handleToggleLogOutModal } = useLogOutModal()
  const { isLanguageModalOpen, handleToggleLanguageModal} = useLanguageModal()
  const { isAboutUsModalOpen, handleToggleAboutUsModal} = useAboutUsModal()

  return (
    <View style={styles.mainContainer}>
      <SimpleHeader title={'Menú'} />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/profile-picture.png")}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Guadalupe Gomez</Text>
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.editText}>Editar perfil</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.optionsSubContainer} onPress={() => navigation.navigate('Publicar')}>
          <Image source={require("../../assets/icons/dollarHouse-icon.png")} style={styles.dollarHouseIcon}/>
          <Text style={styles.optionsText}>Publicar</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer}>
          <Image source={require("../../assets/icons/message-icon.png")} />
          <Text style={styles.optionsText}>Mensajes</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer} onPress={() => navigation.navigate('Favoritos')}>
          <Image source={require("../../assets/icons/favorite-icon.png")} />
          <Text style={styles.optionsText}>Favoritos</Text>
        </Pressable>
        <Pressable style={styles.optionsSubContainer} onPress={handleToggleLanguageModal}>
          <Image source={require("../../assets/icons/language-icon.png")} />
          <Text style={styles.optionsText}>Idioma</Text>
        </Pressable>
        <Pressable style={styles.optionsSubContainer} onPress={() => navigation.navigate('FAQ')}>
          <Image
            source={require("../../assets/icons/circleQuestion-icon.png")}
          />
          <Text style={styles.optionsText}>Faq</Text>
        </Pressable>

        <Pressable style={styles.optionsSubContainer} onPress={handleToggleAboutUsModal}>
          <Image style={styles.homeQuest} source={require("../../assets/icons/logo-black-icon.png")} />
          <Text style={[styles.optionsText, {paddingStart: 35}]}>Quienes somos</Text>
        </Pressable>

        <Pressable style={[styles.optionsSubContainer, {borderBottomWidth: 0}]} onPress={handleToggleLogOutModal}>
          <Image source={require("../../assets/icons/logout-icon.png")} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </View>

      {/* MODAL */}
      <LogOutModal isVisible={isLogOutModalOpen} handleModalVisibility={handleToggleLogOutModal}/>
      <LanguageModal isVisible={isLanguageModalOpen} handleModalVisibility={handleToggleLanguageModal} />
      <AboutUsModal isVisible={isAboutUsModalOpen} handleModalVisibility={handleToggleAboutUsModal}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 30,
    backgroundColor: "#ffffff",
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
  dollarHouseIcon: {
    width: 24,
    height: 24
  }
});
