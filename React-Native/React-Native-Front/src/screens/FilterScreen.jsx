import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
//TODO preguntar a las chicas el tema del width del input porque el ancho que dan en la el celu queda muy corto
//TODO preguntar animacion del input, a donde mandamos la etiqueta
//TODO no me toma el color del textInput

export const FilterScreen = () => {
  return (
    <View style={styles.containerScreen}>
      <StatusBar backgroundColor="white" />
      
      <View style={styles.container}>
        
        <Text style={styles.ubicationText}>Ubicación</Text>

        <View style={styles.ubicationInput}>
          
          <MaterialIcons style={styles.ubicationSearchIcon} name="search" size={24} color='#AAAAAA' />

          <TextInput style={styles.ubicationTextInput} placeholder="Barrio,localidad..."/>

          <MaterialCommunityIcons style={styles.ubicationCloseIcon} name="close-circle-outline" size={24} color='black' />

        </View>

        <View style={styles.separator}/>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    
  },
  container: {
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    width: '100%',
  },
  ubicationText: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  ubicationInput: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 4,
    color: '#AAAAAA'
  },
  ubicationTextInput: {
    flex: 1
  },
  ubicationSearchIcon: {
    padding: 15
  },
  ubicationCloseIcon: {
    paddingRight: 18
  },
  separator: {
    borderBottomColor: '#CAC4D0',
    borderWidth: 1,
  }
});
