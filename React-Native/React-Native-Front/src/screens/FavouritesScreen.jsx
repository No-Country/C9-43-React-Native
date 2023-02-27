import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FavouriteCard } from "../components/FavouriteCard";
import { SimpleHeader } from "../components/layout";
import { PropertyCard } from "../components/PropertyCard";

const HighlightedCards = [
  { key: 1, component: <FavouriteCard /> },
  { key: 2, component: <FavouriteCard /> },
  { key: 3, component: <FavouriteCard /> },
  { key: 4, component: <FavouriteCard /> },
];

export const FavouritesScreen = () => {
  return (
    <View style={styles.container}>
      <SimpleHeader title={'Favoritos'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        snapToInterval={365}
        horizontal={false}
        infinite={true}
        data={HighlightedCards}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
        style={styles.cardsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  cardsContainer: {
    marginTop: 15
  }
})
