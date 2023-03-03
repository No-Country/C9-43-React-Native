import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import { SettingsHeader } from '../components/layout';
//TODO ADD IMAGE PICKER

export const ProfileAndSettings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SettingsHeader navigation={navigation} title={'Perfil y configuración'}/>
      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileText}>Perfil</Text>
        <Text style={styles.profileDescriptionText}>La información que introduzcas aquí será visible a otros usuarios.</Text>
      </View>
      <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/no-avatar.png")}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Foto de Perfil</Text>
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.editText}>Pulsa aqui para modificarla</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.fullNameContainer}>
          <Text style={styles.fullNameBlackText}>Nombre Completo</Text>
          <Text style={styles.fullNameGrayText}>Oscar Ardila</Text>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileInfoContainer: {
    marginTop: 5,
    marginLeft: 22,
    marginRight: 20,
  },
  profileText: {
    fontWeight: '500',
    fontSize: 14
  },
  profileDescriptionText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    color: '#979797'
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
    marginLeft: 22,
    marginBottom: 13
  },
  profilePicture: {
    width: 67,
    height: 67,
  },
  nameContainer: {
    paddingStart: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    color: "#272727",
  },
  editText: {
    paddingStart: 5,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: "#979797",
  },
  fullNameContainer: {
    marginHorizontal: 14,
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CAC4D0'
  },
  fullNameBlackText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24
  },
  fullNameGrayText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    color: '#979797'
  }
})

