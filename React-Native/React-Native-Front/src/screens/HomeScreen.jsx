import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import HighlightedCarousel from "../components/HighlightedCarousel";
import { AntDesign } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/HighlightedData/home.png")}
          style={styles.header}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.arrow}
            onPress={() => navigation.navigate("MainScreen")}
          />
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>¡Hola!</Text>
          <Text style={styles.headerSubtitle}>¿Qué estás buscando?</Text>
          <TextInput
            style={styles.search}
            placeholder="Inicia una nueva búsqueda"
          />
          <Image
            source={require("../../assets/magnifyingGlass.png")}
            style={styles.searchIcon}
          />
        </ImageBackground>

        <View style={styles.publishView}>
          <Text style={styles.bodyTitle}>Publica tu anuncio. Es gratis!</Text>
          <TouchableOpacity style={styles.publishButton}>
            <Text style={styles.publishText}>Publicar anuncio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.featuredView}>
          <Text style={styles.featuredTitle}>Destacados</Text>
        </View>
        <View>
          <HighlightedCarousel />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  arrow: {
    alignSelf: "flex-start",
    marginTop: 46,
    left: 27,
  },
  header: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginTop: 18,
  },
  headerTitle: {
    marginTop: 18,
    fontSize: 16,
    fontWeight: "600",
  },
  headerSubtitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  search: {
    width: 296,
    height: 50,
    backgroundColor: "#FFFFFF",
    marginTop: 36,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#979797",
    textAlign: "center",
  },
  searchIcon: {
    width: 18,
    height: 18,
    position: "absolute",
    top: 196,
    left: 75,
  },
  publishView: {
    marginTop: 24,
  },
  bodyTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  publishButton: {
    height: 50,
    width: 296,
    backgroundColor: "#979797",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
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
    fontSize: 20,
    marginLeft: 17,
  },
});
