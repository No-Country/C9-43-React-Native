import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Pressable } from "react-native";
import { useOrderBy } from "../../hooks/useOrderBy";
import { FilterTextedCheckbox } from "../layout";
import RoundedCheckboxGroup, {
  ICheckboxButton,
} from "react-native-rounded-checkbox-group";

//TODO preguntar por la opacidad del fondo

export const FilterOrderByModal = ({ isVisible, handleModalVisibility }) => {
  const{ isRelevant, handleIsRelevant, isCheap, handleIsCheap, isExpensive, handleIsExpensive, isNew, handleIsNew } = useOrderBy()

  return (
    <Modal visible={isVisible} transparent={true} animationType={"fade"} >
      <Pressable style={styles.opacityBackground} onPress={handleModalVisibility}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Ordenar</Text>
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'Relevancia'} isChecked={isRelevant} setIsChecked={handleIsRelevant} />
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'Más caro'} isChecked={isExpensive} setIsChecked={handleIsExpensive}/>
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'Más barato'} isChecked={isCheap} setIsChecked={handleIsCheap}/>
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'Más nuevo'} isChecked={isNew} setIsChecked={handleIsNew}/>
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
    height: 369,
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
    flex: 3
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
