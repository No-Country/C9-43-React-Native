import React from "react";
import { FlatList, View } from "react-native";
import HighlightedCard from "./HighlightedCard";

const HighlightedCards = [
  { key: 1, component: <HighlightedCard /> },
  { key: 2, component: <HighlightedCard /> },
  { key: 3, component: <HighlightedCard /> },
  { key: 4, component: <HighlightedCard /> },
];

const HighlightedCarousel = () => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={385}
        horizontal={true}
        data={HighlightedCards}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default HighlightedCarousel;
