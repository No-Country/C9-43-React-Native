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
      <View>
        <Image
          style={styles.imagen}
          source={require("../../assets/icons/tune-icons.png")}
        />
        <Text>Precio</Text>
        <Text>Ordenar</Text>
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
  },

  imagen: {
    position: "absolute",
    top: 1,
    left: 20,
    height: 20,
  },
  scroll: {
    paddingTop: 10,
  },
});
