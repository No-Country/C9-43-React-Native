import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import HighlightedCard from "./HighlightedCard";

const HighlightedCards = [
  { key: 1, component: <HighlightedCard /> },
  { key: 2, component: <HighlightedCard /> },
  { key: 3, component: <HighlightedCard /> },
  { key: 4, component: <HighlightedCard /> },
];

const InfiniteCarousel = () => {
  const width = Dimensions.get("window").width;
  return (
    <View>
      <GestureHandlerRootView>
        <Carousel
          loop
          width={width}
          height={400}
          data={HighlightedCards}
          renderItem={({ index }) => <HighlightedCard key={index}/>}
        />
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InfiniteCarousel;
