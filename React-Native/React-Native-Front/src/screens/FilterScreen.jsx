import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

//TODO agregar box shadow al input y a las tarjetas de depto casa terreno
//TODO no entra el boton de aceptar siguiendo las medidas del figma!

export const FilterScreen = ({ navigation }) => {
  return (
    <View style={styles.containerScreen}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerInternalContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("MainScreen")}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableHighlight>
          <Text style={styles.headerText}>Filtros avanzados</Text>
        </View>
        <TouchableHighlight>
          <Text style={styles.headerCleanText}>Limpiar</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.container}>
        <Text style={styles.searchText}>Ubicación</Text>
        <View style={styles.searchInput}>
          <MaterialIcons
            style={styles.searchIcon}
            name="search"
            size={24}
            color="#979797"
          />
          <TextInput
            style={styles.searchTextInput}
            placeholder="Barrio,localidad..."
          />
          <MaterialCommunityIcons
            style={styles.searchCloseIcon}
            name="close-circle-outline"
            size={24}
            color="black"
          />
        </View>
        <Text style={styles.operatorText}>Tipo de operación</Text>
        <View style={styles.operatorContainer}>
          <View style={[styles.typesContainer]}>
            <Text style={styles.typesText}>Venta</Text>
          </View>
          <View style={styles.typesContainer}>
            <Text style={styles.typesText}>Alquiler</Text>
          </View>
        </View>
        <View style={[styles.separator, styles.separatorOperator]} />
        <Text style={styles.propertyText}>Tipo de inmueble</Text>
        <View style={styles.propertyContainer}>
          <View
            style={[
              styles.propertyCardContainer,
              styles.propertyCardContainerDepto,
            ]}
          >
            <Image
              style={styles.propertyIcon}
              source={require("../../assets/domain.png")}
            />
            <Text style={styles.propertySecondaryText}>Depto.</Text>
          </View>
          <View
            style={[
              styles.propertyCardContainer,
              styles.propertyCardContainerDepto,
            ]}
          >
            <Image
              style={styles.propertyIcon}
              source={require("../../assets/cottage.png")}
            />
            <Text style={styles.propertySecondaryText}>Casa</Text>
          </View>
          <View style={styles.propertyCardContainer}>
            <Image
              style={styles.propertyIcon}
              source={require("../../assets/Vector.png")}
            />
            <Text style={styles.propertySecondaryText}>Terreno</Text>
          </View>
        </View>
        <View style={[styles.separator, styles.separatorProperty]} />
        <TouchableOpacity style={styles.priceContainer}>
          <Text style={styles.priceText}>Precio</Text>
          <Text style={styles.priceSecondaryText}>Indistinto</Text>
        </TouchableOpacity>
        <View style={[styles.separator, styles.separatorPrice]} />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Superficie</Text>
          <Text style={styles.priceSecondaryText}>Indistinto</Text>
        </View>
        <View style={[styles.separator, styles.separatorPrice]} />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Tipo de ambientes</Text>
          <Text style={styles.priceSecondaryText}>Indistinto</Text>
        </View>
        <View style={[styles.separator, styles.separatorPrice]} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: '10%',
    paddingHorizontal: 20,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 20,
    color: "#1C1B1F",
  },
  headerCleanText: {
    fontWeight: "500",
    fontSize: 15,
    color: "#018349",
  },
  headerInternalContainer: {
    width: 251,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 16,
  },
  searchText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#1E1E1E",
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 56,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "red",
  },
  searchTextInput: {
    flex: 1,
    textAlign: "left",
  },
  searchIcon: {
    padding: 10,
  },
  searchCloseIcon: {
    paddingRight: 18,
  },
  separator: {
    borderBottomColor: "#CAC4D0",
    borderBottomWidth: 1,
  },
  operatorText: {
    marginTop: 18,
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
    color: "#1D283E",
  },
  operatorContainer: {
    marginTop: 14,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
  },
  typesContainer: {
    width: 88,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 100,
  },
  typesText: {
    color: "#1E1E1E",
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1.25,
    fontSize: 14,
  },
  separatorOperator: {
    marginTop: 22,
    borderBottomColor: "#CAC4D0",
    borderBottomWidth: 1,
  },
  propertyText: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  propertyContainer: {
    marginTop: 18,
    width: 240,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  propertyCardContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    borderRadius: 8,
    width: 65,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  propertyIcon: {
    tintColor: "#018349",
  },
  propertySecondaryText: {
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  separatorProperty: {
    marginTop: 38,
    borderBottomColor: "#CAC4D0",
    borderBottomWidth: 1,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },
  priceText: {
    fontWeight: "500",
    color: "#000000",
    lineHeight: 24,
    letterSpacing: 0.15,
    fontSize: 14,
  },
  priceSecondaryText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#018349",
  },
  separatorPrice: {
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 36,
  },
  cancelarButton: {
    borderWidth: 1,
  },
  button: {
    width: 328,
    height: 40,
    marginTop: 45,
    borderRadius: 4,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#018349",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
  },
});
