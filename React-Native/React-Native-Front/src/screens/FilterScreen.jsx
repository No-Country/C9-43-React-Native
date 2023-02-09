import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Touchable,
  LogBox,
  TouchableOpacity,
  TouchableHighlight,
  TouchableHighlightComponent,
  ScrollView,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from '@expo/vector-icons';

//TODO preguntar animacion del input, a donde mandamos la etiqueta
//TODO arreglar el input que queda pegado al borde


export const FilterScreen = () => {
  return (
    <ScrollView>
    <View style={styles.containerScreen}>
      <StatusBar backgroundColor="white" />

      <View style={styles.header}>
        <TouchableHighlight>
          <MaterialIcons name="arrow-back" size={24} color='white' />
        </TouchableHighlight>
        <Text style={styles.headerText}>
          Filtros avanzados
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.ubicationText}>Ubicación</Text>

        <View style={styles.ubicationInput}>

          <TextInput
            style={styles.ubicationTextInput}
            
          />

          <MaterialIcons
            style={styles.ubicationCloseIcon}
            name="close"
            size={24}
            color="#979797"
          />
        </View>

        <View style={styles.separator} />

        <Text style={styles.operatorText}>Tipo de operación</Text>

        <View style={styles.operatorContainer}>
          <View style={[styles.typesContainer, { marginRight: 54 }]}>
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
            <Image source={require("../../assets/domain.png")} />
            <Text style={styles.typesText}>Depto.</Text>
          </View>

          <View
            style={[
              styles.propertyCardContainer,
              styles.propertyCardContainerDepto,
            ]}
          >
            <Image source={require("../../assets/cottage.png")} />
            <Text style={styles.typesText}>Casa</Text>
          </View>

          <View style={styles.propertyCardContainer}>
            <Image source={require("../../assets/Vector.png")} />
            <Text style={styles.typesText}>Terreno</Text>
          </View>
        </View>

        <View style={[styles.separator, styles.separatorProperty]} />

        <TouchableOpacity style={styles.priceContainer} >
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

        <View style={styles.buttonsContainer}>
          
          <TouchableOpacity style={styles.cancelarButton}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text>Siguiente</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    height: 56,
    width: '100%',
    backgroundColor: '#D9D9D9',
  },
  container: {
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    width: "100%",
  },
  ubicationText: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  ubicationInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 32,
    marginTop: 2,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    borderRadius: 4,
    color: "#AAAAAA",
  },
  ubicationTextInput: {
    flex: 1,
    textAlign:"left",
    
  },
  ubicationSearchIcon: {
    padding: 15,
  },
  ubicationCloseIcon: {
    paddingRight: 18,
  },
  separator: {
    borderBottomColor: "#CAC4D0",
    borderBottomWidth: 1,
    marginTop: 7,
  },
  operatorText: {
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
    marginTop: 23,
  },
  operatorContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  typesContainer: {
    width: 82,
    height: 36,
    borderWidth: 1,
    borderColor: "#979797",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  typesText: {
    color: "#979797",
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1.25,
    marginTop: 4,
  },
  separatorOperator: {
    marginTop: 31,
    borderBottomColor: "#CAC4D0",
    borderBottomWidth: 1,
  },
  propertyText: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  propertyContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  propertyCardContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    borderRadius: 8,
    width: "auto",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 14,
  },
  propertyCardContainerDepto: {
    marginRight: 35,
  },
  separatorProperty: {
    marginTop: 33,
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
    fontWeight: "400",
    color: "#979797",
    lineHeight: 24,
    letterSpacing: 0.15,
    fontSize: 16,
  },
  priceSecondaryText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#1C1B1F",
  },
  separatorPrice: {
    marginTop: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 36
  },
  cancelarButton: {
    borderWidth: 1,
    
  }
});
