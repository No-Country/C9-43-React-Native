import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { PublishPostContext } from "../context/publish-post-context/PublishPostContext";

// Recibe un arreglo de objetos. Cada arreglo de segundo nivel debe contener un título en la posicion 0 y un placeholder en la posición 1. Ejemplo: [ { title: 'Agrega un título', placeholder: 'Ej: Departamento de 2 ambientes y 1 baño'}, { title: 'Describí tu inmueble', placeholder: 'Ej: Departamento amplio a 3 cuadras del centro, amplio, ubicado en un tercer piso} ].

export const PostInputs = ({
  titleAndPlaceholder = [
    { title: "", placeholder: "", name: "", keyboard: "" },
  ],
  type = "",
  handleInputs,
  publishPost,
}) => {

  return (
    <View style={styles.container}>
      {titleAndPlaceholder.map((input) => {
        const { title, placeholder, name, keyboard } = input;

        if (type === "price") {
          return (
            <View key={`${title} ${placeholder}`}>
              <Text key={title} style={styles.title}>
                {title}
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  key={placeholder}
                  style={styles.input}
                  placeholder={placeholder}
                  placeholderTextColor={"#979797"}
                  autoComplete="off"
                  keyboardType="numeric"
                  onChangeText={(text) => handleInputs(name, text)}
                  value={publishPost[name]}
                />

                <View >
                  {/* <Pressable
                    style={[
                      styles.buttonPesos,
                      currency === "pesos"
                        ? { backgroundColor: "#018349" }
                        : { backgroundColor: "#fff" },
                    ]}
                    onPress={() => handleCurrency("pesos")}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        currency === "pesos"
                          ? { color: "#fff" }
                          : { color: "#018349" },
                      ]}
                    >
                      $
                    </Text>
                  </Pressable> */}

                  <Pressable
                    style={styles.buttonDolares}
                  >
                    <Text
                      style={styles.buttonText}
                    >
                      USD
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }

        return (
          <View key={`${title} ${placeholder}`}>
            <Text key={title} style={styles.title}>
              {title}
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                key={placeholder}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={"#979797"}
                autoComplete="off"
                onChangeText={(text) => handleInputs(name, text)}
                keyboardType={keyboard ? keyboard : "default"}
                value={publishPost[name]}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 19,
    marginRight: 29,
  },
  title: {
    lineHeight: 32,
    color: "#1C1B1F",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    marginTop: 21,
    marginBottom: 35,
    borderBottomWidth: 4,
    borderBottomColor: "#D9D9D9",
  },
  input: {
    flex: 1,
    fontSize: 14,
    letterSpacing: 0.1,
    height: 24,
  },
  // buttonsContainer: {
  //   flexDirection: "row",
  //   width: 35,
  //   height: 20,
  //   borderWidth: 1,
  //   borderColor: "#018349",
  //   borderRadius: 4,
  // },
  buttonText: {
    fontWeight: '500',
    fontSize: 11,
    padding: 2,
    color: '#fff',
  },
  // buttonPesos: {
  //   justifyContent: "center",
  //   width: 25,
  //   borderRightWidth: 1,
  //   borderRightColor: "#018349",
  // },
  buttonDolares: {
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 12,
    width: 35,
    height: 28,
    borderRadius: 7,
    backgroundColor: '#018349'
  },
});
