import { Ionicons } from "@expo/vector-icons";

export const tabIconOptions = ( route, color ) => {
    let iconName;

    switch( route.name ){

        case 'Buscar':
            iconName = 'search';
            break;

        case 'Favoritos':
            iconName = 'heart';
            break;

        case 'Publicar':
            iconName = 'home-outline';
            break;

        case 'Mensajes':
            iconName = 'chatbox-ellipses-outline';
            break;

        case 'Menú':
            iconName = 'menu';
            break;
    }

    return <Ionicons name={iconName} color={color} size={22} />
}