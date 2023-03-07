import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { GreenButton, HomeDirectOwners  } from "../components";
import InfiniteCarousel from "../components/InfiniteCarousel";


export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/home-bg.png")}
        >
          <Image
            style={styles.logoIcon}
            source={require("../../assets/logo-home.png")}
          />
          <Text style={styles.welcomeText}>¡Hola!</Text>
          <Text style={styles.welcomeSubText}>¿Qué estás buscando?</Text>
          <Pressable
            style={styles.searchContainer}
            onPress={() => navigation.navigate("Ubicacion")}
          >
            <Image
              style={styles.searchIcon}
              source={require("../../assets/icons/search-icon.png")}
            />
            <Text style={styles.searchText}>Iniciá una nueva búsqueda</Text>
          </Pressable>
        </ImageBackground>
        <View style={styles.publishContainer}>
          <Text style={styles.publishTitle}>
            Publica tu anuncio. ¡Es gratis!
          </Text>
          <Image
            style={styles.publishImg}
            source={require("../../assets/publish-photo.png")}
          />
          <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Publicar')}>
            <GreenButton text={"Publicar"} />
          </Pressable>
        </View>
        <Text style={styles.featuredText}>Destacados</Text>
        <InfiniteCarousel />
        <HomeDirectOwners style={styles.homeDirectOwners}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    height: 320,
    resizeMode: "contain",
    alignItems: "center",
  },
  logoIcon: {
    marginTop: 38,
  },
  welcomeText: {
    marginTop: 17,
    fontWeight: "700",
    fontSize: 19,
    lineHeight: 24,
    color: "#fff",
  },
  welcomeSubText: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
    width: "90%",
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#AAA",
  },
  searchIcon: {
    marginHorizontal: 15,
    tintColor: "#979797",
  },
  searchText: {
    fontSize: 14,
    lineHeight: 24,
    color: "#979797",
  },
  publishContainer: {
    alignItems: "center",
    marginTop: 13,
  },
  publishTitle: {
    fontWeight: "500",
    fontSize: 19,
    lineHeight: 24,
  },
  publishImg: {
    marginTop: 27,
  },
  buttonContainer: {
    width: 246,
    marginTop: -3
  },
  featuredText: {
    marginTop: 40,
    marginBottom: 15,
    marginLeft: 29,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24
  },
});
