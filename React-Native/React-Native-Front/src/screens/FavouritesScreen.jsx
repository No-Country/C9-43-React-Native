import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FavouriteCard from "../components/FavoriteCard";
import { SimpleHeader } from "../components/layout";

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
