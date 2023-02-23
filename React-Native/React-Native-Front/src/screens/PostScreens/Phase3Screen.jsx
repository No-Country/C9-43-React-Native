import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GreenButton, GreenPostButton, PostTopBar, TextedCheckbox } from "../../components";
import { FilterTextedCheckbox, IconHeader } from "../../components/layout";
import { useSellRent } from "../../hooks";

export const Phase3Screen = ({ navigation }) => {
  const {isSellSelected, isRentSelected, handleRentSelected, handleSellSelected} = useSellRent()
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
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Phase4Screen")}>
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
