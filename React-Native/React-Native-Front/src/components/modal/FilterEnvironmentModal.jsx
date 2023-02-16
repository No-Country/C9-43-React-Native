import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Pressable } from "react-native";
import { useFilters } from "../../hooks";
import { FilterTextedCheckbox } from "../layout";
import { TextedCheckbox } from "../TextedCheckbox";

//TODO preguntar bien como se va a ver el modal, sobretodo la opacidad del fondo

export const FilterEnvironmentModal = ({ isVisible, handleModalVisibility }) => {

  return (
    <Modal visible={isVisible} transparent={true} animationType={"fade"} >
      <Pressable style={styles.opacityBackground} onPress={handleModalVisibility}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Ambientes</Text>
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'1 ambiente'} />
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'2 ambientes'} />
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'3 ambientes'} />
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'4 ambientes'} />
            </Pressable>
            <Pressable style={styles.optionContainer} >
              <FilterTextedCheckbox text={'+ 5 ambientes'} />
            </Pressable>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={handleModalVisibility}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
            <Pressable style={styles.button}>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  container: {
    backgroundColor: '#fff',
    width: 285,
    height: 419,
    borderRadius: 15
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18,
    color: '#000',
    paddingHorizontal: 24,
    paddingVertical: 24,
    
  },
  optionsContainer: {
    paddingLeft: 16,
    paddingRight: 24,
    flex: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    flex: 1,
  },
  button: {
    padding: 16
  },  
  buttonText: {
    color: '#018349',
    fontWeight: '500',
    fontSize: 14
  }
});
