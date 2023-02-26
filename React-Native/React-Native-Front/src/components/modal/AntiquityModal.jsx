import React, { useContext } from 'react';
import {View, StyleSheet, Modal, Pressable, Text} from 'react-native';
import { FiltersContext } from '../../context/filters-context/FiltersContext';
import {  useAntiquitySelected } from '../../hooks/index';
import { FilterTextedCheckbox } from '../layout';

export const AntiquityModal = ({ isVisible, handleModalVisibility}) => {
  const {isBrandNewSelected, isUsedSelected, handleBrandNewSelected, handleUsedSelected} = useAntiquitySelected()
  const { handleFilters } = useContext(FiltersContext)
  
  const handleBrandNew = () => {
    handleFilters('antiquity', false)
    handleBrandNewSelected()
  }

  const handleUsed = () => {
    handleFilters('antiquity', true)
    handleUsedSelected()
  }

  return (
    <Modal visible={isVisible} transparent={true} animationType={"fade"} >
      <Pressable style={styles.opacityBackground} onPress={handleModalVisibility}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Antigüedad</Text>
          <View style={styles.optionsContainer}>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'A estrenar'} isChecked={isBrandNewSelected} setIsChecked={handleBrandNew}/>
            </Pressable>
            <Pressable style={styles.optionContainer}>
              <FilterTextedCheckbox text={'Usado'} isChecked={isUsedSelected} setIsChecked={handleUsed}/>
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
    height: 319,
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
    marginBottom: 24
  },
  optionsContainer: {
    flex: 4,
    paddingLeft: 16,
    paddingRight: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    flex: 2,
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