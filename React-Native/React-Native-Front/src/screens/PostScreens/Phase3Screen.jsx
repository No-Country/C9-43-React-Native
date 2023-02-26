import { useContext } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GreenButton, GreenPostButton, PostTopBar, TextedCheckbox } from "../../components";
import { FilterTextedCheckbox, IconHeader } from "../../components/layout";
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { usePublishPost, useSellRent } from "../../hooks";

export const Phase3Screen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext( PublishPostContext )
  const {isSellSelected, isRentSelected, handleRentSelected, handleSellSelected} = useSellRent()

  console.log(publishPost)

  const handleAccept = () => {
    const name = 'businessType'
    if (isSellSelected) {
      handlePublishPost(name, 'venta')
    } else if (isRentSelected) {
      handlePublishPost(name, 'alquiler')
    } else {
      alert('Seleccione una opcion')
      return 
    }
    navigation.navigate('Phase4Screen')
  }

  return (
    <View style={styles.container}>
      <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'} />

      <View style={styles.titlesContainer}>
        <View>
          <Text style={styles.title}>Nuevo anuncio</Text>
        </View>
          <Text style={styles.subtitle}>
            ¿Qué tipo de inmueble querés publicar?
          </Text>
      </View>

      <View style={styles.optionsContainer}>
        <FilterTextedCheckbox text="Venta" isChecked={isSellSelected} setIsChecked={handleSellSelected}/>
        <FilterTextedCheckbox text="Alquiler" isChecked={isRentSelected} setIsChecked={handleRentSelected}/>
      </View>
      <Pressable style={styles.buttonContainer} onPress={handleAccept}>
        <GreenButton text={'Aceptar'}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  titlesContainer: {
    marginLeft: 19,
    marginTop: 22,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    lineHeight: 32,
    fontSize: 14
  },
  optionsContainer: {
    flex: 5,
    marginTop: 32,
    marginLeft: 32,
    marginRight: 88
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 16
  }
});
