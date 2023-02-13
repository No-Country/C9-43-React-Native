import React from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import HighlightedCard from "../components/HighlightedCard";

export const FilteredResultScreen = () => {
  const HighlightedCards = [
    { key: 1, component: <HighlightedCard /> },
    { key: 2, component: <HighlightedCard /> },
    { key: 3, component: <HighlightedCard /> },
    { key: 4, component: <HighlightedCard /> },
  ];
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorFilter}>
        <Image
          style={styles.imagen}
          source={require("../../assets/icons/tune-icons.png")}
        />
        <View>
          <Text style={styles.button}>Filtros</Text>
        </View>

        <Text style={styles.button}>Precio</Text>

        <Text style={styles.button}>Ordenar</Text>
      </View>

      <FlatList
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
        snapToInterval={365}
        horizontal={false}
        infinite={true}
        data={HighlightedCards}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginVertical: 20,
    width: "100%",
  },
  contenedorFilter: {
    flexDirection: "row",
    width: "100%",
    top: 2,
    marginBottom: 20,
    alignItems:"center"
   
  },
  button: {
    fontSize: 13,
    paddingHorizontal: 14,
    
    fontWeight: "500",
    color: "#1E1E1E",
    borderLeftColor: 1,
    borderRadius: 50,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingVertical: 10,
    marginLeft:40
  },

  imagen: {
    top: 0,
    height: 25,
    left: 30,
  },
  scroll: {
    paddingTop: 5,
  },
});
