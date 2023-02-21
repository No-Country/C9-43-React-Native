import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GreenButton, GreenPostButton, PostTopBar, TextedCheckbox } from "../../components";
import { IconHeader, FilterTextedCheckbox } from "../../components/layout";

export const Phase2Screen = ({ navigation }) => {
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
        <FilterTextedCheckbox text={"Departamento"} />

        <FilterTextedCheckbox text={"Casa"} />

        <FilterTextedCheckbox text={"Terreno"} />
      </View>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Phase3Screen")}>
        <GreenButton text={'Aceptar'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  titlesContainer: {
    marginTop: 22,
    marginLeft: 19,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    color: '#1E1E1E',
    lineHeight: 32,
  },
  optionsContainer: {
    flex: 5,
    marginTop: 32,
    marginLeft: 32,
    marginRight: 88,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 16
  }
});
