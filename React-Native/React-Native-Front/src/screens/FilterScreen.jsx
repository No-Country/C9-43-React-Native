import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { GreenButton } from '../components/index'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FilterModal } from "../components/modal/FilterModal";
import { useModal } from '../hooks/index'
import { useState } from "react";

//TODO agregar box shadow al input y a las tarjetas de depto casa terreno


export const FilterScreen = ({ navigation }) => {
  const { modalVisible, handleModalVisibility } = useModal()
  const [operationBg, setOperationBg] = useState('')
  const [typeOfPropertyBg, setTypeOfPropertyBg] = useState('')

  const handleOperationBg = (string) => {
    setOperationBg(string)
  }

  const handleTypeOfPropertyBg = (string) => {
    setTypeOfPropertyBg(string)
  }

  return (
    <View style={styles.containerScreen}>
      {/* <StatusBar /> */}
      <View style={styles.header}>
        <View style={styles.headerInternalContainer}>
          <Pressable onPress={() => navigation.navigate("MainScreen")}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Text style={styles.headerText}>Filtros avanzados</Text>
        </View>
        <Pressable>
          <Text style={styles.headerCleanText}>Limpiar</Text>
        </Pressable>
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
          <Pressable style={[styles.typesContainer, operationBg === 'venta' ? styles.backgroundSelected : null]} onPress={() => handleOperationBg('venta')}>
            <Text style={[styles.typesText, operationBg === 'venta' ? styles.textSelected : null]}>Venta</Text>
          </Pressable>
          <Pressable style={[styles.typesContainer, operationBg === 'alquiler' ? styles.backgroundSelected : null]} onPress={() => handleOperationBg('alquiler')}>
            <Text style={[styles.typesText, operationBg === 'alquiler' ? styles.textSelected : null]}>Alquiler</Text>
          </Pressable>
        </View>
        <View style={[styles.separator, styles.separatorOperator]} />
        <Text style={styles.propertyText}>Tipo de inmueble</Text>
        <View style={styles.propertyContainer}>
          <Pressable style={[styles.propertyCardContainer, typeOfPropertyBg === 'depto' ? styles.backgroundSelected : null]} onPress={() => handleTypeOfPropertyBg('depto')}>
            <Image
              style={styles.propertyIcon}
              source={require("../../assets/domain.png")}
            />
            <Text style={[styles.propertySecondaryText, typeOfPropertyBg === 'depto' ? styles.textSelected : null]}>Depto.</Text>
          </Pressable>
          <Pressable style={[styles.propertyCardContainer, typeOfPropertyBg === 'casa' ? styles.backgroundSelected : null]} onPress={() => handleTypeOfPropertyBg('casa')}>
            <Image
              style={styles.propertyIcon}
              source={require("../../assets/cottage.png")}
            />
            <Text style={[styles.propertySecondaryText, typeOfPropertyBg === 'casa' ? styles.textSelected : null]}>Casa</Text>
          </Pressable>
          <Pressable style={[styles.propertyCardContainer, typeOfPropertyBg === 'terreno' ? styles.backgroundSelected : null]} onPress={() => handleTypeOfPropertyBg('terreno')}>
            <Image
              style={styles.propertyIcon}
              source={require("../../assets/Vector.png")}
            />
            <Text style={[styles.propertySecondaryText, typeOfPropertyBg === 'terreno' ? styles.textSelected : null]}>Terreno</Text>
          </Pressable>
        </View>
        <View style={[styles.separator, styles.separatorProperty]} />
        <Pressable style={styles.attributesContainer}>
          <Text style={styles.primaryText}>Precio</Text>
          <Text style={styles.secondText}>Indistinto</Text>
        </Pressable>
        <View style={[styles.separator, styles.separatorMargin]} />
        <Pressable style={styles.attributesContainer}>
          <Text style={styles.primaryText}>Superficie</Text>
          <Text style={styles.secondText}>Indistinto</Text>
        </Pressable>
        <View style={[styles.separator, styles.separatorMargin]} />
        <Pressable  style={styles.attributesContainer} onPress={handleModalVisibility}>
          <Text style={styles.primaryText}>Tipo de ambientes</Text>
          <Text style={styles.secondText}>Indistinto</Text>
        </Pressable>
        <View style={[styles.separator, styles.separatorMargin]} />
        <Pressable style={styles.button}>
          <GreenButton text='Aceptar'/>
        </Pressable>
      </View>
      {/* MODAL */}
      <FilterModal isVisible={modalVisible} handleModalVisibility={handleModalVisibility} />
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
    paddingTop: 20,
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
    marginTop: 10,
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
  attributesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },
  primaryText: {
    fontWeight: "500",
    color: "#000000",
    lineHeight: 24,
    letterSpacing: 0.15,
    fontSize: 14,
  },
  secondText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#018349",
  },
  separatorMargin: {
    marginTop: 20,
  },
  button: {
    width: '100%',
    marginTop: 35,
    borderRadius: 4,
    alignSelf: "center",
    justifyContent: "center",
  },
  backgroundSelected: {
    backgroundColor: '#D4F9E8',
    borderColor: '#018349'
  },
  textSelected: {
    color: '#018349'
  }
});
