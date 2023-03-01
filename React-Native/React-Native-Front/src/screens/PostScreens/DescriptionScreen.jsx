import { useContext, useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { GreenButton, PostInputs } from "../../components";
import { IconHeader } from "../../components/layout";
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext";

export const DescriptionScreen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext(PublishPostContext);
  const { handlePublishProgress } = useContext(PublishProgressContext);

  const MIN_DESCRIPTION_LENGTH = 20;

  const handleInputs = (name, input) => {
    handlePublishPost(name, input);
  };

  const handleAccept = () => {
    if (
      publishPost.title.length === 0 ||
      publishPost.description.length === 0
    ) {
      alert("No dejes campos vacios");
      return;
    }
    // Validacion de caracteres minimos (20)
    if (publishPost.description.length < MIN_DESCRIPTION_LENGTH) {
      alert(
        `La descripción debe tener al menos ${MIN_DESCRIPTION_LENGTH} caracteres`
      );
      return;
    }

    handlePublishProgress("description", 10);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconHeader
        icon={"close"}
        navigation={navigation}
        title={"Publicar anuncio"}
      />
      <View style={styles.descriptionInputsContainer}>
        <Text style={styles.title}>Descripción</Text>

        <PostInputs
          titleAndPlaceholder={[
            {
              title: "Agregá un título",
              placeholder: "Ej: Departamento de 2 ambientes y 1 baño",
              name: "title",
            },
            {
              title: "Describí tu inmueble",
              placeholder: "Ej: Departamento de 2 ambientes y 1 baño",
              name: "description",
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
  descriptionInputsContainer: {
    flex: 7,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 4,
  },
});
