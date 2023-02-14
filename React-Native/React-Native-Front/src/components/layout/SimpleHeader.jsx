import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const SimpleHeader = ({ title }) => {
  return (
    <View style={styles.fakeHeader}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
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
    paddingVertical: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity:  0.8,
    shadowRadius: 4,
    elevation: 12,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: "400",
    fontSize: 16,
    color: "#1C1B1F",
  },
})
