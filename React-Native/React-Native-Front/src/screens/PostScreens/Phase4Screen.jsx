import { Ionicons } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { PostTopBar, PressableStages } from "../../components"

export const Phase4Screen = () => {
  return (
    <View style={ styles.container }>
        
        <PostTopBar />

        <View style={ styles.header }>

            <Ionicons
                style={ styles.headerIcon } 
                name='home-outline' 
                color={ '#000000' } 
                size={40} 
            />

            <Text style={ styles.headerText }>
                <Text style={ styles.headerTextSpan }>16%</Text> completado
            </Text>
        </View>

        <View style={ styles.multipleInputsContainer }>
            
            <PressableStages 
                title={'Tipo de inmueble'} 
                description={'¿Qué tipo de inmueble querés alquilar?'}            
            />

            <PressableStages 
                title={'Descripción'} 
                description={'Agregá con un título y descripción de tu inmueble'}            
            />

            <PressableStages 
                title={'Ubicación'} 
                description={'Indica dónde está ubicado'}            
            />

            <PressableStages 
                title={'Ambientes'} 
                description={'Indica la cantidad de ambientes'}            
            />

            <PressableStages 
                title={'Características'} 
                description={'Indica cuántos dormitorios y baños tiene'}            
            />

            <PressableStages 
                title={'Precio'} 
                description={'Indica a que precio querés publicarlo'}            
            />

            <PressableStages 
                title={'Fotos'} 
                description={'Agregá fotos y planos del inmueble'}            
            />

            <PressableStages 
                title={'Contacto'} 
                description={'Agregá por donde querés que te contacten'}            
            />

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 64,
        marginTop: 44,
        marginLeft: 24
    },
    headerIcon: {
        width: 64,
        height: 64,
        textAlign: 'center',
        textAlignVertical: 'center'
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
        marginTop: 10
    }
})
