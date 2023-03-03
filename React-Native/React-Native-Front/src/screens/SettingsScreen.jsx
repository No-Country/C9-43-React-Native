import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import { SettingsHeader } from '../components/layout';

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SettingsHeader navigation={navigation} title={'Configuración'}/>
      <Pressable style={styles.optionsSubContainer} onPress={() => navigation.navigate('ProfileAndSettings')}>
          <Text style={styles.optionsText}>Perfil y configuración de la cuenta</Text>
        </Pressable>
        <Pressable style={styles.optionsSubContainer} >
          <Text style={styles.optionsText}>Notificaciones</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  optionsSubContainer: {
    paddingVertical: 18,
    marginLeft: 18,
    marginRight: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#CAC4D0",
  },
  optionsText: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
  },
})

