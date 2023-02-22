import { Ionicons } from "@expo/vector-icons";
import { Image } from 'react-native'

export const tabIconOptions = ( route, color, focused ) => {
    console.log(focused)
    switch( route.name ){

        case 'Buscar':
            return <Image style={{width: 17.49, height: 17.49}} source={require('../../assets/icons/search-icon.png')} />

        case 'Favoritos':
            return <Image style={{width: 20, height: 18.35}} source={require('../../assets/icons/favorite-icon.png')} />


        case 'Publicar':
            return <Image style={{width: 24, height: 19}} source={require('../../assets/icons/dollarHouse-icon.png')} />
            

        case 'Mensajes':
            return <Image style={{width: 19.15, height: 20}} source={require('../../assets/icons/message-icon.png')} />

        case 'Menú':
            return <Image style={{width: 18.19, height: 13}} source={require('../../assets/icons/menu-icon.png')} />
    }

    
}