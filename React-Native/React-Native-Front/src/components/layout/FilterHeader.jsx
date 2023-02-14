import { MaterialIcons } from '@expo/vector-icons';
import {View, StyleSheet, Pressable, Text} from 'react-native';

export const FilterHeader = ({ navigation, onPress }) => {
  return (
    <View style={styles.fakeHeader}>
        <View style={styles.header}>
          <View style={styles.headerInternalContainer}>
            <Pressable onPress={() => navigation.navigate("MainScreen")}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </Pressable>
            <Text style={styles.headerText}>Filtros avanzados</Text>
          </View>
          <Pressable onPress={onPress}>
            <Text style={styles.headerCleanText}>Limpiar</Text>
          </Pressable>
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
  headerCleanText: {
    fontWeight: "500",
    fontSize: 15,
    color: "#018349",
  },
  headerInternalContainer: {
    width: 251,
    flexDirection: "row",
    alignItems: "center",
  }
})

