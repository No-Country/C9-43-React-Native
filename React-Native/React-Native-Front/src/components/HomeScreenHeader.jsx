import {
  Image,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";

const HomeScreenHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'}/>
      <ImageBackground
        source={require("../../assets/home-bg.png")}
        style={styles.header}
      >
        <Image
          source={require("../../assets/logo-home.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>¡Hola!</Text>
        <Text style={styles.headerSubtitle}>¿Qué estás buscando?</Text>
        <Pressable onPress={() => navigation.navigate("Ubicacion")}>
          <View style={styles.search}>
            <Image
              source={require("../../assets/icons/search-icon.png")}
              style={styles.searchIcon}
            />
            <Text style={styles.newSearchText}>Inicia una nueva búsqueda</Text>
          </View>
        </Pressable>
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
    marginTop: 35,
    width: 100,
    height: 75,
  },
  headerTitle: {
    marginTop: 17,
    fontSize: 19,
    fontWeight: "700",
    color: "#fff",
  },
  headerSubtitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  search: {
    flexDirection: "row",
    alignItems: 'center',
    width: 327,
    height: 56,
    backgroundColor: "#FFFFFF",
    marginTop: 23,
    marginBottom: 53,
    borderWidth: 1,
    borderColor: "#979797",
    textAlign: "center",
    borderRadius: 5,
  },
  searchIcon: {
    width: 18,
    height: 18,
    margin: 15,
    tintColor: '#979797'
  },
  newSearchText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    color: '#979797'
  },
});
