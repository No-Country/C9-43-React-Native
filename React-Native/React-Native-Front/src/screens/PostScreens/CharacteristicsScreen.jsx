import { CheckBox } from "@rneui/base"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { GreenButton, GreenPostButton, PostInputs, PostTopBar } from "../../components"
import { IconHeader, FilterTextedCheckbox } from "../../components/layout"
import { useGarageSelected } from "../../hooks"

export const CharacteristicsScreen = ({ navigation }) => {
  const { isGarageSelected, isGarageNotSelected, handleGarageSelected, handleGarageNotSelected} = useGarageSelected()

  return (
    <View style={ styles.container }>
      <IconHeader icon={'close'} navigation={navigation} title={'Publicar anuncio'}/>
      <ScrollView >
        <View style={styles.descriptionInputsContainer}>
          <Text style={ styles.title }>
              Características
          </Text>

          <PostInputs 
            titleAndPlaceholder={[ 
              { 
                title:'Indicá la cantidad de m²',
                placeholder: 'Ej: 45 m²'
              },
              {
                title: '¿Cuántos dormitorios tiene?',
                placeholder: 'Ej: 2'
              },
              {
                  title: '¿Cuántos baños tiene?',
                  placeholder: 'Ej: 1'
              },
              {
                title: '¿En que año fue construida la propiedad?',
                placeholder: 'Ej: 2018'
              }
            ]}
          />
          <View style={styles.garageContainer}>
            <Text style={styles.garageText}>¿La propiedad, posee garage?</Text>
            <View style={ styles.garageOption }>
              <Text style={ styles.optionText }>
              Sí
              </Text>
              <CheckBox
                iconType="material-community"
                checkedIcon='checkbox-marked'
                uncheckedIcon='checkbox-blank-outline'
                checkedColor="#018349"
                checked={isGarageSelected}
                onPress={handleGarageSelected}
              />
            </View>
            <View style={ styles.garageOption }>
              <Text style={ styles.optionText }>
              No
              </Text>
              <CheckBox
                iconType="material-community"
                checkedIcon='checkbox-marked'
                uncheckedIcon='checkbox-blank-outline'
                checkedColor="#018349"
                checked={isGarageNotSelected}
                onPress={handleGarageNotSelected}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.goBack()}>
        <GreenButton text={'Aceptar'} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title: {
      fontSize: 26,
      lineHeight: 32,
      marginLeft: 19,
      marginTop: 22
    },
    descriptionInputsContainer: {
      // flex: 7
    },
    garageContainer: {
      marginHorizontal: 16,
    },
    garageText: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 32,
      color: '#1C1B1F'
    },
    garageOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '30%' 
    },
    optionText: {
        fontSize: 16,
        letterSpacing: 0.5,
    },
    buttonContainer: {
      // flex: 1,
      marginBottom: 22,
      marginHorizontal: 16
    }
})
