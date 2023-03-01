import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FavouriteCard } from "../components/FavouriteCard";
import { SimpleHeader, UnregisteredMessage } from "../components/layout";
import { PropertyCard } from "../components/PropertyCard";
import { UserCredentialsContext } from "../context/user-credentials-context/UserCredentialsContext";

const HighlightedCards = [
  { key: 1, component: <FavouriteCard /> },
  { key: 2, component: <FavouriteCard /> },
  { key: 3, component: <FavouriteCard /> },
  { key: 4, component: <FavouriteCard /> },
];

export const FavouritesScreen = () => {
  const { userCredentials } = useContext(UserCredentialsContext)

  return (
    <View style={styles.container}>
      <SimpleHeader title={'Favoritos'} />

      {
        userCredentials.email ? (<UnregisteredMessage text={'guardar favoritos'}/>) : (
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
        )
      }
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
