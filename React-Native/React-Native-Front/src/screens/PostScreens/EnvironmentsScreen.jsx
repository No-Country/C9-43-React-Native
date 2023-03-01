import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GreenButton, PostInputs } from "../../components";
import { IconHeader } from "../../components/layout";
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext";

export const EnvironmentsScreen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext(PublishPostContext);
  const { handlePublishProgress } = useContext(PublishProgressContext);

  const handleInputs = (name, input) => {
    handlePublishPost(name, input);
  };

  const handleAccept = () => {
    if (publishPost.ambiances === null || publishPost.ambiances === 0) {
      alert("Seleccione una opcion valida");
      return;
    }
    // Validar que el valor no sea menor o igual a 0
    if (publishPost.ambiances <= 0) {
      alert("Por favor ingrese una cantidad de ambientes valido");
      return;
    }
    handlePublishProgress("ambiances", 10);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconHeader
        icon={"close"}
        navigation={navigation}
        title={"Publicar anuncio"}
      />
      <View style={styles.descriptionInputcontainer}>
        <Text style={styles.title}>Ambientes</Text>

        <PostInputs
          titleAndPlaceholder={[
            {
              title: "Indicá la cantidad de ambientes",
              placeholder: "Ej: 2 ambientes",
              name: "ambiances",
              keyboard: "numeric",
            },
          ]}
          handleInputs={handleInputs}
          publishPost={publishPost}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={handleAccept}>
        <GreenButton text={"Aceptar"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 19,
    marginTop: 22,
  },
  descriptionInputcontainer: {
    flex: 7,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
