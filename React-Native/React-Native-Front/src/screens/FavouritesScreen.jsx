import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
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
  const [userFavourites, setUserFavourites] = useState()
  const userId = userCredentials.userId
  console.log(userId)

  const handleFav = async () => {
    try{
      const response = await axios.get(`https://home-quest-app.onrender.com/api/v1/users/${userId}/favorites`, {
        headers: {
          'Authorization': `Bearer ${userCredentials.token}`
        }
      })
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <View style={styles.container}>
      <SimpleHeader title={'Favoritos'} />

      {
        !userCredentials.email ? (<UnregisteredMessage text={'guardar favoritos'}/>) : (
          <>
          <Button title="Presionar" onPress={handleFav}/>
          
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
      </>
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
