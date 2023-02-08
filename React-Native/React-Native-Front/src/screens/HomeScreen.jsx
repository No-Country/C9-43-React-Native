import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HighlightedCard from "../components/HighlightedCard";
import HighlightedCarousel from "../components/HighlightedCarousel";

export const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
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
        </View>
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
  header: {
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    width: "100%",
  },
  logo: {
    marginTop: 18,
  },
  headerTitle: {
    marginTop: 18,
    fontSize: 16,
  },
  headerSubtitle: {
    marginTop: 12,
    fontSize: 16,
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
