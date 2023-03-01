import React from "react";
import { View, StyleSheet, FlatList, Image, Text, Pressable } from "react-native";
import HighlightedCard from "../components/HighlightedCard";
import { IconHeader } from '../components/layout'
import { FilterPriceModal } from "../components/modal";
import { FilterOrderByModal } from "../components/modal/FilterOrderByModal";
import { PropertyCard } from "../components/PropertyCard";
import { UsePriceModal, useOrderByModal } from "../hooks";

export const FilteredResultScreen = ({ navigation }) => {
  const { isPriceModalOpen, handleTogglePriceModal } = UsePriceModal()
  const { isOrderByModalOpen, handleToggleOrderByModal } = useOrderByModal()

  const HighlightedCards = [
    { key: 1, component: <PropertyCard /> },
    { key: 2, component: <PropertyCard /> },
    { key: 3, component: <PropertyCard /> },
    { key: 4, component: <PropertyCard /> },
  ];
  return (
    <View style={styles.container}>
      <IconHeader icon={'arrow-back'} title={'Ubicación'} navigation={navigation}/>
      <View style={styles.filterContainer}>        
          <Pressable style={styles.filtersButtons} onPress={() => navigation.navigate('Filtros avanzados')}>
            <Text style={styles.filtersButtonsText}>Filtros</Text>
          </Pressable>
          <Pressable style={styles.filtersButtons} onPress={handleTogglePriceModal}>
            <Text style={styles.filtersButtonsText}>Precio</Text>
          </Pressable>
          <Pressable style={styles.filtersButtons} onPress={handleToggleOrderByModal}>
            <Text style={styles.filtersButtonsText}>Ordenar</Text>
          </Pressable>
      </View>

      <FlatList
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
        snapToInterval={365}
        horizontal={false}
        infinite={true}
        data={HighlightedCards}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
      />

      {/* Modal */}
      <FilterPriceModal isVisible={isPriceModalOpen} handleModalVisibility={handleTogglePriceModal} />
      <FilterOrderByModal isVisible={isOrderByModalOpen} handleModalVisibility={handleToggleOrderByModal} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  filterContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignItems:"center",
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  filtersButtons: {
    width: 80,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 100,
    borderColor: "#D9D9D9",
    borderWidth: 1,
  },
  filtersButtonsText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1E1E1E",
    textAlign: 'center'
  },
  scroll: {
    marginTop: 7,
    
  }
  
});
