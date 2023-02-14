import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { GreenButton } from "../components/index";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FilterModal } from "../components/modal/FilterModal";
import { useModal, useFilters } from '../hooks/index'
import { useState } from "react";
import { FilterHeader } from "../components/layout/";

//TODO esperar a que esten los modales

export const FilterScreen = ({ navigation }) => {
  const { modalVisible, handleModalVisibility } = useModal()
  const { operationBg, typeOfPropertyBg, handleOperationBg, handleTypeOfPropertyBg, handleCleanSelections } = useFilters()
  
  // const [operationBg, setOperationBg] = useState('')
  // const [typeOfPropertyBg, setTypeOfPropertyBg] = useState('')

  // const handleOperationBg = (string) => {
  //   setOperationBg(string)
  // }
  // const handleTypeOfPropertyBg = (string) => {
  //   setTypeOfPropertyBg(string)
  // }

  // const handleCleanSelections = () => {
  //   setOperationBg('')
  //   setTypeOfPropertyBg('')
  // }

  return (
    <View style={styles.containerScreen} >
      <FilterHeader onPress={handleCleanSelections} navigation={navigation}/>
      <View style={styles.container}>
        <Text style={styles.searchText}>Ubicación</Text>
        <View style={styles.fakeContainer}>
          <View style={styles.searchInput}>
            <MaterialIcons
              style={styles.searchIcon}
              name="search"
              size={24}
              color="#979797"
            />
            <TextInput
              style={styles.searchTextInput}
              placeholder="Inicia una nueva búsqueda"
            />
            <MaterialCommunityIcons
              style={styles.searchCloseIcon}
              name="close-circle-outline"
              size={24}
              color="black"
            />
          </View>
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

          <View style={styles.fakeIconContainer}>
            <Pressable style={[styles.propertyCardContainer, typeOfPropertyBg === 'depto' ? styles.backgroundSelected : null]} onPress={() => handleTypeOfPropertyBg('depto')}>
              <Image
                style={styles.propertyIcon}
                source={require("../../assets/domain.png")}
              />
              <Text style={[styles.propertySecondaryText, typeOfPropertyBg === 'depto' ? styles.textSelected : null]}>Depto.</Text>
            </Pressable>
          </View>
          
          <View style={styles.fakeIconContainer}>
            <Pressable style={[styles.propertyCardContainer, typeOfPropertyBg === 'casa' ? styles.backgroundSelected : null]} onPress={() => handleTypeOfPropertyBg('casa')} >
              <Image
                style={styles.propertyIcon}
                source={require("../../assets/cottage.png")}
              />
              <Text style={[styles.propertySecondaryText, typeOfPropertyBg === 'casa' ? styles.textSelected : null]}>Casa</Text>
            </Pressable>
          </View>
          <View style={styles.fakeIconContainer}>
            <Pressable style={[styles.propertyCardContainer, typeOfPropertyBg === 'terreno' ? styles.backgroundSelected : null]} onPress={() => handleTypeOfPropertyBg('terreno')}>
              <Image
                style={styles.propertyIcon}
                source={require("../../assets/Vector.png")}
              />
              <Text style={[styles.propertySecondaryText, typeOfPropertyBg === 'terreno' ? styles.textSelected : null]}>Terreno</Text>
            </Pressable>
          </View>
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
          <Text style={styles.primaryText}>Ambientes</Text>
          <Text style={styles.secondText}>Indistinto</Text>
        </Pressable>
        <View style={[styles.separator, styles.separatorMargin]} />
        <Pressable style={styles.button}>
          <GreenButton text="Aceptar" />
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
  container: {
    paddingHorizontal: 16,
  },
  searchText: {
    marginTop: 7,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#1E1E1E",
  },
  fakeContainer: {
    overflow: 'hidden',
    paddingBottom: 6,
    marginTop: 12, 
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 56,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: "#AAAAAA",
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity:  0.8,
    shadowRadius: 4,
    elevation: 10,
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
    marginTop: 12,
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
    color: "#1D283E",
  },
  operatorContainer: {
    marginTop: 14,
    width: "100%",
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
    marginTop: 20,
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
  fakeIconContainer: {
    overflow: 'hidden',
    height: 65,
    width: 70,
    paddingBottom: 10,
    paddingLeft: 2.5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity:  0.8,
    shadowRadius: 4,
  },
  propertyCardContainer: {
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    width: 65,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 7,
    elevation: 15
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
    marginTop: 28,
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
    width: "100%",
    marginTop: 25,
    borderRadius: 4,
    alignSelf: "center",
    justifyContent: "center",
  },
  backgroundSelected: {
    borderWidth: 1,
    backgroundColor: '#D4F9E8',
    borderColor: '#018349'
  },
  textSelected: {
    color: '#018349'
  }
});
