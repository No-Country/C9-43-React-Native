import {
  Image,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeScreenHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Home/home-background.png")}
        style={styles.header}
      >
        <Image
          source={require("../../assets/Home/homeQuest-Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>¡Hola!</Text>
        <Text style={styles.headerSubtitle}>¿Qué estás buscando?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Ubicacion")}>
          <View style={styles.search}>
            <Image
              source={require("../../assets/magnifyingGlass.png")}
              style={styles.searchIcon}
            />
            <Text style={styles.newSearchText}>Inicia una nueva búsqueda</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
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
    marginTop: 50,
    width: 100,
    height: 75,
  },
  headerTitle: {
    marginTop: 18,
    fontSize: 19,
    fontWeight: "500",
    color: "#fff",
  },
  headerSubtitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
  },
  search: {
    width: 327,
    height: 56,
    backgroundColor: "#FFFFFF",
    marginTop: 36,
    marginBottom: 53,
    borderWidth: 1,
    borderColor: "#979797",
    textAlign: "center",
    borderRadius: 5,
    flexDirection: "row",
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginTop: 18,
    margin: 15,
  },
  newSearchText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 16,
  },
});
