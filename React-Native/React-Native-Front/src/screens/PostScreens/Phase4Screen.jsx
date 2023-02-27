import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GreenButton, PressableStages } from "../../components";
import { IconHeader } from "../../components/layout";
import { PostModal } from "../../components/modal/PostModal";
import { useModal } from "../../hooks";
import * as Progress from "react-native-progress";
import { useContext } from "react";
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext";

export const Phase4Screen = ({ navigation }) => {
  const { publishPost } = useContext(PublishPostContext);
  const { publishProgress } = useContext(PublishProgressContext);
  const { isModalOpen, handleToggleModal } = useModal();

  const progress = Object.values(publishProgress).reduce(
    (prev, curr) => prev + curr,
    0
  );
  
  console.log(publishProgress)


  const handlePublish = () => {
    if (progress === 100) {
      handleToggleModal()
    }
  }
 
  return (
    <View style={styles.container}>
      <IconHeader
        icon={"close"}
        title={"Publicar anuncio"}
        navigation={navigation}
      />
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <Image
            style={styles.headerIcon}
            source={require("../../../assets/icons/dollarHouse-icon.png")}
          />
          <Progress.Circle
            style={styles.progressCircle}
            size={60}
            progress={progress / 100}
            color={"#018349"}
            unfilledColor={"#D9D9D9"}
            borderColor={"#D9D9D9"}
            thickness={5}
          />
        </View>
        <Text style={styles.headerText}>
          <Text style={styles.headerTextSpan}>{progress}%</Text> completado
        </Text>
      </View>

      <ScrollView style={styles.multipleInputsContainer}>
        <PressableStages
          title={"Tipo de inmueble"}
          description={"¿Qué tipo de inmueble querés alquilar?"}
          path={"Phase2Screen"}
          isChecked={publishPost.propertyType && publishPost.businessType}
        />

        <PressableStages
          title={"Descripción"}
          description={"Agregá con un título y descripción de tu inmueble"}
          path={"DescriptionScreen"}
          isChecked={publishPost.title && publishPost.description}
        />

        <PressableStages
          title={"Ubicación"}
          description={"Indica dónde está ubicado"}
          path={"LocationScreen"}
          isChecked={publishPost.city && publishPost.region}
        />

        <PressableStages
          title={"Ambientes"}
          description={"Indica la cantidad de ambientes"}
          path={"EnvironmentsScreen"}
          isChecked={publishPost.ambiances}
        />

        <PressableStages
          title={"Características"}
          description={"Indica cuántos dormitorios y baños tiene"}
          path={"CharacteristicsScreen"}
          isChecked={
            publishPost.sqMeters &&
            publishPost.bedrooms &&
            publishPost.bathrooms &&
            publishPost.antiquity 
          }
        />

        <PressableStages
          title={"Precio"}
          description={"Indica a que precio querés publicarlo"}
          path={"PriceScreen"}
          isChecked={publishPost.price}
        />

        <PressableStages
          title={"Fotos"}
          description={"Agregá fotos y planos del inmueble"}
          path={"PhotosScreen"}
          isChecked={publishPost.pictures.length >= 1}
        />

        <PressableStages
          title={"Contacto"}
          description={"Agregá por donde querés que te contacten"}
          path={"ContactScreen"}
          isChecked={publishPost.phone}
        />

        <Pressable style={styles.buttonContainer} onPress={handlePublish}>
          <GreenButton text={"Publicar"} />
        </Pressable>
      </ScrollView>

      {/* MODAL */}
      <PostModal
        isModalOpen={isModalOpen}
        handleToggleModal={handleToggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 24,
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressCircle: {
    right: 50,
  },
  headerIcon: {
    width: 39,
    height: 31,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.1,
    alignSelf: "center",
  },
  headerTextSpan: {
    fontWeight: "700",
    fontSize: 16,
  },
  multipleInputsContainer: {
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 5,
  },
});
