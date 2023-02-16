import React from "react";
import { View, StyleSheet, Modal, Text, Pressable } from "react-native";
import { TextedCheckbox } from "../TextedCheckbox";

//TODO preguntar bien como se va a ver el modal, sobretodo la opacidad del fondo

export const FilterModal = ({ isVisible, handleModalVisibility }) => {

  return (
    <Modal visible={isVisible} transparent={false} animationType="fade" onRequestClose={handleModalVisibility}>
      
      <View style={styles.container}>
        <Text style={styles.textTitle}>Tipo de ambientes</Text>
        <View style={styles.optionsContainer}>
          <View style={styles.optionContainer}>
            <TextedCheckbox text={'Indistinto'} />
          </View>
          <View style={styles.optionContainer}>
            <TextedCheckbox text={'Antesala'} />
          </View>
          <View style={styles.optionContainer}>
            <TextedCheckbox text={'Bodega'} />
          </View>
          <View style={styles.optionContainer}>
            <TextedCheckbox text={'Cocina'} />
          </View>
          <View style={styles.optionContainer}>
            <TextedCheckbox text={'Garage'} />
          </View>
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textTitle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 32,
    color: '#1C1B1F',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40
  },
  optionsContainer: {
    paddingLeft: 16,
    paddingRight: 24,
    flex: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
    flex: 1
  },
  buttonText: {
    color: '#018349',
    fontWeight: '500',
    fontSize: 14
  }

});
