import React from "react";
import { FlatList, View } from "react-native";
import FavouriteCard from "../components/FavoriteCard";

const HighlightedCards = [
  { key: 1, component: <FavouriteCard /> },
  { key: 2, component: <FavouriteCard /> },
  { key: 3, component: <FavouriteCard /> },
  { key: 4, component: <FavouriteCard /> },
];

const FavouritesScreen = () => {
  return (
    <View
      style={{
        overflow: "hidden",
        marginLeft: 15,
        marginRight: 15,
      }}
    >
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

export default FavouritesScreen;
