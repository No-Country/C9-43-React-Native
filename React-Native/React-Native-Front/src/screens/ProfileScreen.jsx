import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import { ProfileHeader } from '../components/layout';

//TODO BOTTOM COLOR WHEN SELECTED ALSO CHECK ICON THAT CHANGE THE HEIGHT OF THE MIDDLE SECTION

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const [option, setOption] = useState('publish')

  const handleOption = (str) => {
    setOption(str)
  }

  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <View style={styles.internalContainer}>
        <Image source={require('../../assets/profile-test-image.png')} />
        <Text style={styles.nameText}>Guadalupe Gomez</Text>
        <View style={styles.shadowContainer}>
          <View style={styles.middleContainer}>
            <Pressable style={styles.middleInternalContainer} onPress={() => handleOption('publish')}>
              <Image source={option === 'publish' ? require('../../assets/icons/settings-dollarHouse-icon.png') : require('../../assets/icons/dollarHouse-black-icon.png')} style={option === 'publish' ? styles.dollarHouseIconSelected : styles.dollarHouseIcon}/>
              <Text style={[styles.middleText, option === 'publish' ? styles.selectedText : null]}>Publicaciones</Text>
              <View style={styles.selectedBorderBottom} />
            </Pressable>
            <Pressable style={[styles.middleInternalContainer, styles.selected]} onPress={() => handleOption('message')}>
              <Image source={ option === 'message' ? require('../../assets/icons/message-icon.png') : require('../../assets/icons/message-icon.png')} style={[ option === 'message' ? styles.iconSelected : null]}/>
              <Text style={[styles.middleText, option === 'message' ? styles.selectedText : null]}>Mensajes</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.optionContainer}>
          { option === 'publish' ? (
            <>
            <Image style={styles.houseImage} source={require('../../assets/icons/bigGreenHouse-icon.png')} />
            <Text style={styles.optionDescriptionText}>Todavía no creaste ninguna publicación.</Text>
            </>
          ) : (
            <>
              <Image source={require('../../assets/icons/messageBig-icon.png')} style={styles.messageBigIcon}/>
              <Text style={styles.optionDescriptionText}>Todavia no hiciste ninguna consulta o alguien te envió un mensaje.</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  internalContainer: {
    alignItems: 'center',
    marginTop: 18
  },
  nameText: {
    marginVertical: 25,
    fontWeight: '500',
    fontSize: 19,
    lineHeight: 24
  },
  shadowContainer: {
    overflow: 'hidden',
    paddingVertical: 5,
    width: '100%',
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    elevation: 12,
    height: 72
  },
  middleInternalContainer: {
    alignItems: 'center',
  },
  middleText: {
    marginTop: 12,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#1E1E1E'
  },
  iconSelected: {
    tintColor: '#018349',
    
  },
  dollarHouseIconSelected: {
    // width: 30,
    // height: 30
  },
  dollarHouseIcon: {
    // width: 25,
    // height: 25
  },
  selected: {

  },
  selectedText: {
    color: '#018349'
  },
  optionContainer: {
    marginVertical: 12,
    paddingVertical: 15,
    alignItems: 'center'
  },
  optionDescriptionText: {
    marginTop: 10,
    width: 220,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 21
  },
  houseImage: {
    width: 144,
    height: 114
  },
  selectedBorderBottom: {
    // marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#018349'
  },
  messageBigIcon: {
    width: 144,
    height: 114
  }
})
