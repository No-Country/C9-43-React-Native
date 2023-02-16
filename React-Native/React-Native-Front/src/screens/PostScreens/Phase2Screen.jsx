import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GreenPostButton, PostTopBar, TextedCheckbox } from "../../components";

export const Phase2Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PostTopBar />

      <View style={styles.titlesContainer}>
        <View>
          <Text style={styles.title}>Nuevo anuncio</Text>
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            ¿Qué tipo de inmueble querés publicar?
          </Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <TextedCheckbox text={"Departamento"} />

        <TextedCheckbox text={"Casa"} />

        <TextedCheckbox text={"Terreno"} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Phase3Screen")}>
        <GreenPostButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  titlesContainer: {
    height: 68,
    marginLeft: 19,
    marginTop: 52,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  subtitleContainer: {
    marginTop: 10,
  },
  subtitle: {
    lineHeight: 32,
  },
  optionsContainer: {
    marginTop: 32,
    marginLeft: 32,
    marginRight: 88,
    marginBottom: 250,
  },
});
