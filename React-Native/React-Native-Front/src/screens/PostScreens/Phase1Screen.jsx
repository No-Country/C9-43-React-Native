import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  GreenButton,
  SimpleHeader,
  UnregisteredMessage,
} from "../../components";
import { UserCredentialsContext } from "../../context/user-credentials-context/UserCredentialsContext";

export const Phase1Screen = ({ navigation }) => {
  const { userCredentials } = useContext(UserCredentialsContext);

  return (
    <View style={styles.container}>
      {!userCredentials.email ? (
        <>
          <SimpleHeader title={"Publicar"} />
          <UnregisteredMessage text={"publicar una propiedad"} screen={'Phase1Screen'}/>
        </>
      ) : (
        <>
          <View style={styles.mainImageContainer}>
            <Text style={styles.mainImageText}>
              Publicá tu anuncio de la manera más fácil y rápida!
            </Text>
            <Image
              style={styles.mainImage}
              source={require("../../../assets/images/Speech_Bubble.png")}
            />
            <Pressable
              style={styles.mainImageButton}
              onPress={() => navigation.navigate("Phase2Screen")}
            >
              <GreenButton text={"Publicar"} />
            </Pressable>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>
              ¡Las ventajas de{"\n"} publicar en HomeQuest!
            </Text>

            <View style={styles.textSubtitleContainer}>
              <Text style={styles.textSubtitle}>Simple</Text>

              <Text>Publicá tu anuncio en pocos y simples pasos.</Text>
            </View>

            <View style={styles.textSubtitleContainer}>
              <Text style={styles.textSubtitle}>Gratuito</Text>

              <Text>
                Ofrecemos la posibilidad de publicar un anuncio de manera
                gratuita.
              </Text>
            </View>

            <View style={styles.textSubtitleContainer}>
              <Text style={styles.textSubtitle}>Usuarios verificados</Text>

              <Text styles={styles.textSubtitleDescription}>
                Nuestros usuarios son confirmados por redes sociales e
                información personal.
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainImageContainer: {
    marginTop: 32,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },
  mainImageText: {
    marginTop: 30,
    width: 271,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  mainImage: {
    marginTop: 24,
  },
  mainImageButton: {
    width: 248,
    borderRadius: 4,
    marginTop: 25,
    marginBottom: 16,
  },
  mainImageButtonText: {
    fontWeight: "500",
    letterSpacing: 1.25,
    color: "#FFFFFF",
  },
  textContainer: {
    marginTop: 16,
    marginLeft: 16,
  },
  textTitle: {
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  textSubtitleContainer: {
    marginBottom: 11,
    width: 291,
  },
  textSubtitle: {
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  textSubtitleDescription: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "300",
  },
});
