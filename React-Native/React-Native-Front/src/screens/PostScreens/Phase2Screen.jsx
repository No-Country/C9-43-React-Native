import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GreenButton} from "../../components";
import { IconHeader, FilterTextedCheckbox } from "../../components/layout";
import { PublishPostContext } from "../../context/publish-post-context/PublishPostContext";
import { PublishProgressContext } from "../../context/publish-progress-context/PublishProgressContext";
import { usePropertyType, usePublishPost } from "../../hooks";

export const Phase2Screen = ({ navigation }) => {
  const { publishPost, handlePublishPost } = useContext( PublishPostContext )
  const { handlePublishProgress } = useContext(PublishProgressContext)
  const {isApartmentSelected, isHouseSelected, isLandSelected, handleIsApartmentSelected, handleIsHouseSelected, handleIsLandSelected} = usePropertyType()


  const handleAccept = () => {
    const name = 'propertyType'
    if (isApartmentSelected) {
      handlePublishPost(name, 'departamento')
    } else if (isHouseSelected) {
      handlePublishPost(name, 'casa')
    } else if (isLandSelected) {
      handlePublishPost(name, 'terreno')
    } else {
      alert('Seleccione una opcion')
      return
    }
    handlePublishProgress(name, 15)
    navigation.navigate("Phase3Screen")
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
        <FilterTextedCheckbox text={"Departamento"} isChecked={isApartmentSelected} setIsChecked={handleIsApartmentSelected}/>

        <FilterTextedCheckbox text={"Casa"} isChecked={isHouseSelected} setIsChecked={handleIsHouseSelected}/>

        <FilterTextedCheckbox text={"Terreno"} isChecked={isLandSelected} setIsChecked={handleIsLandSelected}/>
      </View>
      <Pressable style={styles.buttonContainer} onPress={handleAccept}>
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
