import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import HighlightedCarousel from "../components/HighlightedCarousel";
import HomeScreenHeader from "../components/HomeScreenHeader";
import HomeDirectOwners from "../components/HomeDirectOwners";

export const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeScreenHeader />
        <View style={styles.publishView}>
          <Text style={styles.bodyTitle}>Publica tu anuncio. Es gratis!</Text>
          <TouchableOpacity style={styles.publishButton}>
            <ImageBackground
              source={require("../../assets/Home/publish-button.png")}
              style={[styles.publishButton]}
            >
              <View
                style={{
                  width: 240,
                  height: 45,
                  backgroundColor: "#018349",
                  position: "absolute",
                  bottom: 0,
                }}
              >
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
          </TouchableOpacity>
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
    alignItems: "center",
    borderRadius: 20,
  },

  publishView: {
    marginTop: 24,
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
    marginTop: 24,
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
    marginTop: 38,
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
