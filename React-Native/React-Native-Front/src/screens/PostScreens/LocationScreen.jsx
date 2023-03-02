import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GreenButton, PostInputs } from "../../components";
import { IconHeader } from "../../components/layout";
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext";

export const LocationScreen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext(PublishPostContext);
  const { handlePublishProgress } = useContext(PublishProgressContext);


  const MIN_DESCRIPTION_LENGTH = 3;

  console.log(publishPost);

  const handleInputs = (name, input) => {
    handlePublishPost(name, input);
  };

  const handleAccept = () => {
    if (publishPost.city.length === 0 || publishPost.region.length === 0) {
      alert("No dejes campos vacios");
      return;
    }
    // Validacion de caracteres minimos (20)
    if (
      publishPost.city.length < MIN_DESCRIPTION_LENGTH ||
      publishPost.region.length < MIN_DESCRIPTION_LENGTH
    ) {
      alert(
        `La descripción debe tener al menos ${MIN_DESCRIPTION_LENGTH} caracteres`
      );
      return;
    }
    handlePublishProgress("location", 10);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconHeader
        icon={"close"}
        title={"Publicar anuncio"}
        navigation={navigation}
      />
      <View style={styles.descriptionInputContainer}>
        <Text style={styles.title}>Ubicación</Text>

        <PostInputs
          titleAndPlaceholder={[
            {
              title: "Indicá en que ciudad está ubicado",
              placeholder: "Ej: Quilmes",
              name: "city",
            },
            {
              title: 'Indicá en que provincia está ubicado',
              placeholder: 'Ej: Buenos Aires',
              name: 'region'
            },
            {
              title: 'Indicá dirección aproximada',
              placeholder: 'Ej: Colón al 300',
              name: 'address'
            }
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
  descriptionInputContainer: {
    flex: 7,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
