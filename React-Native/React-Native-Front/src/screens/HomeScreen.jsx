import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";

import HighlightedCarousel from "../components/HighlightedCarousel";
import HomeScreenHeader from "../components/HomeScreenHeader";
import HomeDirectOwners from "../components/HomeDirectOwners";

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={[styles.container]}>
        <HomeScreenHeader navigation={navigation} />
        <View style={styles.publishView}>
          <Text style={styles.bodyTitle}>Publica tu anuncio. Es gratis!</Text>
          <Pressable
            style={styles.publishButton}
            onPress={() => navigation.navigate("Publicar")}
          >
            <ImageBackground
              source={require("../../assets/publish-photo.png")}
              style={[styles.publishButton]}
            >
              <View style={styles.buttonPublishContainer}>
                <Text
                  style={[
                    styles.buttonText,
                    { textAlign: "center", marginTop: 9 },
                  ]}
                >
                  Publicar
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </View>
        <View style={styles.featuredView}>
          <Text style={styles.featuredTitle}>Destacados</Text>
        </View>
        <View style={styles.carousel}>
          <HighlightedCarousel />
        </View>
      </View>
      <View style={styles.ownersContainer}>
        <HomeDirectOwners />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  ownersContainer: {
    flex: 1,
    maxWidth: 326,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 8,
    elevation: 5,
    padding: 2,
    paddingLeft: 2,
    paddingRight: 2,
    marginBottom: 30,
    opacity: 0.9,
  },
  buttonPublishContainer: {
    marginTop: 238,
    width: 240,
    height: 45,
    backgroundColor: "#018349",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },

  publishView: {
    marginTop: 13,
  },
  bodyTitle: {
    fontSize: 19,
    textAlign: "center",
    fontWeight: "500",
  },
  publishButton: {
    height: 198,
    width: 246,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  publishText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
  },
  featuredView: {
    width: "100%",
    marginTop: 80,
    marginBottom: 21,
  },
  featuredTitle: {
    fontSize: 16,
    marginLeft: 17,
    fontWeight: "500",
  },
  carousel: {
    marginLeft: 0,
    marginRight: 0,
  },
});
