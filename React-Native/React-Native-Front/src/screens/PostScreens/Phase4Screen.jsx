import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import {  PressableStages } from "../../components"
import {  IconHeader } from "../../components/layout"

export const Phase4Screen = ({ navigation }) => {
  return (
    <View style={ styles.container }>
        <IconHeader icon={'close'} title={'Publicar anuncio'} navigation={navigation}/>
        <View style={ styles.header }>
            <Image style={styles.headerIcon} source={require('../../../assets/icons/dollarHouse-icon.png')} />
            <Text style={ styles.headerText }>
                <Text style={ styles.headerTextSpan }>16%</Text> completado
            </Text>
        </View>

        <ScrollView style={ styles.multipleInputsContainer }>
            
            <PressableStages 
                title={'Tipo de inmueble'} 
                description={'¿Qué tipo de inmueble querés alquilar?'} 
                path={'Phase2Screen'}           
            />

            <PressableStages 
                title={'Descripción'} 
                description={'Agregá con un título y descripción de tu inmueble'}  
                path={'DescriptionScreen'}          
            />

            <PressableStages 
                title={'Ubicación'} 
                description={'Indica dónde está ubicado'}
                path={'LocationScreen'}            
            />

            <PressableStages 
                title={'Ambientes'} 
                description={'Indica la cantidad de ambientes'}
                path={'EnvironmentsScreen'}            
            />

            <PressableStages 
                title={'Características'} 
                description={'Indica cuántos dormitorios y baños tiene'}
                path={'CharacteristicsScreen'}            
            />

            <PressableStages 
                title={'Precio'} 
                description={'Indica a que precio querés publicarlo'}
                path={'PriceScreen'}            
            />

            <PressableStages 
                title={'Fotos'} 
                description={'Agregá fotos y planos del inmueble'}
                path={'PhotosScreen'}            
            />

            <PressableStages 
                title={'Contacto'} 
                description={'Agregá por donde querés que te contacten'}
                style={{borderBottomWidth: 0, paddingVertical: 9}}
                path={'ContactScreen'}          
            />

        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 24,
    },
    headerIcon: {
        width: 39,
        height: 31,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.1,
        alignSelf: 'center',
        marginLeft: 40
    },
    headerTextSpan: {
        fontWeight: '700',
        fontSize: 16
    },
    multipleInputsContainer: {
        marginHorizontal: 16,
    }
})
