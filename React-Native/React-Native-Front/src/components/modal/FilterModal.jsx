import React from "react";
import { View, StyleSheet, Modal, Text, Pressable } from "react-native";
import { TextedCheckbox } from "../TextedCheckbox";

//TODO preguntar bien como se va a ver el modal, sobretodo la opacidad del fondo

export const FilterModal = ({ isVisible, handleModalVisibility }) => {

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade" onRequestClose={handleModalVisibility}>
      <View style={styles.mainContainer}>
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#808080aa',
    flex:1,
    justifyContent:'center'
  },
  container: {
    height: '70%',
    width: '70%',
    borderRadius: 50,
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
  },
  textTitle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 32,
    color: '#1C1B1F',
    padding: 24
  },
  optionsContainer: {
    paddingHorizontal: 16,
    flex: 3
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
    flex: 1
  },
  buttonText: {
    color: '#979797',
    fontWeight: '500',
    fontSize: 14
  }

});
