import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

export const IconHeader = ({ navigation, title, icon}) => {
  return (
    <View style={styles.fakeHeader}>
        <View style={styles.header}>
          <View style={styles.headerInternalContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons name={icon} size={24} color="black" />
            </Pressable>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fakeHeader: {
    overflow: 'hidden',
    paddingBottom: 6,
    marginTop: 30
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity:  0.8,
    shadowRadius: 4,
    elevation: 12,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 20,
    color: "#1C1B1F",
  },
  headerInternalContainer: {
    width: 251,
    flexDirection: "row",
    alignItems: "center",
  }
})
