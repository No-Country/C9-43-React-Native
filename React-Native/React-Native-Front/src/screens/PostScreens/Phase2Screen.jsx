import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Phase2Screen = () => {
  return (
    <View style={ styles.container }>

        <View style={ styles.topBar }>
            <Ionicons 
                name="close"
                style={ styles.topBarIcon } 
                size={24} 
                color="black" 
            />

            <Text style={ styles.topBarText }>
                Publicar anuncio
            </Text>
        </View>

        <View
            style={ styles.titlesContainer }
        >
            <View>
                <Text
                    style={ styles.title }
                >
                    Nuevo anuncio
                </Text>
            </View>

            <View style={ styles.subtitleContainer }>
                <Text
                    style={ styles.subtitle }
                >
                    ¿Qué tipo de inmueble querés publicar?
                </Text>
            </View>
        </View>

        <View style={ styles.optionsContainer }>
            <View style={ styles.option }>

                <Text style={ styles.optionText }>
                    Departamento
                </Text>

                <BouncyCheckbox 
                    style={ styles.optionCheckBox }
                    innerIconStyle={{ borderRadius: 0 }}
                    iconStyle={{ borderRadius: 0 }}
                    fillColor={ '#000000'}
                    unfillColor={ '#FFFFFF' }
                    bounceEffectIn={ 1 }
                    bounceEffectOut={ 1 }
                />

            </View>

            <View style={ styles.option }>

                <Text style={ styles.optionText }>
                    Casa
                </Text>

                <BouncyCheckbox 
                    style={ styles.optionCheckBox }
                    innerIconStyle={{ borderRadius: 0 }}
                    iconStyle={{ borderRadius: 0 }}
                    fillColor={ '#000000'}
                    unfillColor={ '#FFFFFF' }
                    bounceEffectIn={ 1 }
                    bounceEffectOut={ 1 }
                />

            </View>

            <View style={ styles.option }>

                <Text style={ styles.optionText }>
                    Terreno
                </Text>

                <BouncyCheckbox 
                    style={ styles.optionCheckBox }
                    innerIconStyle={{ borderRadius: 0 }}
                    iconStyle={{ borderRadius: 0 }}
                    fillColor={ '#000000'}
                    unfillColor={ '#FFFFFF' }
                    bounceEffectIn={ 1 }
                    bounceEffectOut={ 1 }
                />

            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flexDirection: 'row',
        top: 38,
        width: '100%',
        backgroundColor: '#D9D9D9',
        height: 64,
        alignItems: 'center'
    },
    topBarIcon: {
        marginLeft: 21
    },
    topBarText: {
        fontSize: 16,
        color: '#1C1B1F',
        marginLeft: 21,
    },
    titlesContainer: {
        height: 68,
        marginLeft: 19,
        marginTop: 52
    },
    title: {
        fontSize: 24,
        lineHeight: 32
    },
    subtitleContainer:{
        marginTop: 10
    },
    subTitle: {
        lineHeight: 32
    },
    optionsContainer: {
        marginTop: 32,
        marginLeft: 32,
        marginRight: 88
    },
    option: {
        flexDirection: 'row',
        marginBottom: 32
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        letterSpacing: 0.5,
    }
})