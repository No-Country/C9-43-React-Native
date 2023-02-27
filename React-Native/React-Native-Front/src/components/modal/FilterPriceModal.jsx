import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  Modal,
} from "react-native";
import { FiltersContext } from "../../context/filters-context/FiltersContext";

export const FilterPriceModal = ({ isVisible, handleModalVisibility }) => {
  const { filters, handleFilters } = useContext(FiltersContext);

  return (
    <Modal visible={isVisible} transparent={true} animationType={"fade"}>
      <Pressable
        style={styles.opacityBackground}
        onPress={handleModalVisibility}
      >
        <View style={styles.container}>
          <Text style={styles.textTitle}>Precio</Text>
          <View style={styles.optionsContainer}>
            <View style={styles.optionContainer}>
              <Text style={styles.optionsContainerText}>Desde:</Text>
              <TextInput
                placeholder="--"
                keyboardType="numeric"
                value={filters.priceFrom}
                onChangeText={(text) => handleFilters("priceFrom", text)}
              />
            </View>
            <View style={styles.optionContainer}>
              <Text style={styles.optionsContainerText}>Hasta:</Text>
              <TextInput
                placeholder="--"
                keyboardType="numeric"
                value={filters.priceTo}
                onChangeText={(text) => handleFilters("priceTo", text)}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={handleModalVisibility}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleModalVisibility}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  opacityBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  container: {
    backgroundColor: "#fff",
    width: 285,
    height: 301,
    borderRadius: 15,
  },
  textTitle: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color: "#000",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  optionsContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    paddingLeft: 16,
    paddingRight: 24,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#979797",
    borderRadius: 8,
  },
  optionsContainerText: {
    paddingEnd: "35%",
    fontWeight: "400",
    color: "#1C1B1F",
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    flex: 1,
  },
  button: {
    padding: 16,
  },
  buttonText: {
    color: "#018349",
    fontWeight: "500",
    fontSize: 14,
  },
});
