import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { FavouriteCard } from "../components/FavouriteCard";
import { SimpleHeader, UnregisteredMessage } from "../components/layout";
import { UserCredentialsContext } from "../context/user-credentials-context/UserCredentialsContext";

const HighlightedCards = [
  { key: 1, component: <FavouriteCard /> },
  { key: 2, component: <FavouriteCard /> },
  { key: 3, component: <FavouriteCard /> },
  { key: 4, component: <FavouriteCard /> },
];

export const FavouritesScreen = () => {
  const { userCredentials } = useContext(UserCredentialsContext);
  const [userFavourites, setUserFavourites] = useState([]);
  const userId = userCredentials.userId;

  useEffect(() => {
    const response = async () => {
      await axios
        .get(
          `https://home-quest-app.onrender.com/api/v1/users/${userId}/favorites`,
          {
            headers: {
              Authorization: `Bearer ${userCredentials.token}`,
            },
          }
        )
        .then((res) => {
          if (res.data.favorite) {
            setUserFavourites(res.data.favorite);
          }
        })
        .catch((err) => console.log(err));
    };
    response();
  }, [userCredentials]);

  return (
    <View style={styles.container}>
      <SimpleHeader title={"Favoritos"} />

      {!userCredentials.email ? (
        <UnregisteredMessage text={"guardar favoritos"} />
      ) : userFavourites.length > 1 ? (
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
      ) : (
        <View style={styles.noFavcontainer}>
          <Image source={require("../../assets/icons/no-fav-icon.png")} />
          <Text style={styles.noFavText}>
            Aquí encontrarás tus{"\n"} propiedades favoritas.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardsContainer: {
    marginTop: 15,
  },
  noFavcontainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 32,
  },
  noFavText: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
  },
});
