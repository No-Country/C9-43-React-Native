import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
//TODO preguntar a las chicas el tema del width del input porque el ancho que dan en la el celu queda muy corto
//TODO preguntar animacion del input, a donde mandamos la etiqueta
//TODO no me toma el color del textInput

export const FilterScreen = () => {
  return (
    <View style={styles.containerScreen}>
      <StatusBar backgroundColor="white" />
      <View style={styles.container}>

      <View style={styles.ubication}>
        <Text style={styles.ubicationText}>Ubicación</Text>
        
        <TextInput
          label="Barrio,localidad..."
          variant="outlined"
          baseColor="#AAAAAA"
          
          leading={(props) => <MaterialIcons name="search" {...props} />}
          trailing={(props) => (
            <MaterialCommunityIcons
              name="close-circle-outline"
              color="black"
              {...props}
            />
          )}
          style={styles.ubicationInput}
        />
      </View>
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
    marginLeft: 16,
    alignSelf: "flex-start",
    width: 328,
  },
  ubication: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CAC4D0'
  },
  ubicationText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  ubicationInput: {
    width: 327,
    height: 56,
    marginTop: 2,
    marginBottom: 7
  },
});
