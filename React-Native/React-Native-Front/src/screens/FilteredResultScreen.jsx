import React from "react";
import { View, StyleSheet, FlatList, Image, Text, Pressable } from "react-native";
import HighlightedCard from "../components/HighlightedCard";
import { IconHeader } from '../components/layout'
import { FilterPriceModal } from "../components/modal";
import { FilterOrderByModal } from "../components/modal/FilterOrderByModal";
import { UsePriceModal, useOrderByModal } from "../hooks";

export const FilteredResultScreen = ({ navigation }) => {
  const { isPriceModalOpen, handleTogglePriceModal } = UsePriceModal()
  const { isOrderByModalOpen, handleToggleOrderByModal } = useOrderByModal()
  

  const HighlightedCards = [
    { key: 1, component: <HighlightedCard /> },
    { key: 2, component: <HighlightedCard /> },
    { key: 3, component: <HighlightedCard /> },
    { key: 4, component: <HighlightedCard /> },
  ];
  return (
    <View style={styles.container}>
      <IconHeader icon={'arrow-back'} title={'Ubicación'} navigation={navigation}/>
      <View style={styles.filterContainer}>
        <Image
          style={styles.imagen}
          source={require("../../assets/icons/tune-icons.png")}
        />
        <View style={styles.internalFilterContainer}>
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
    marginRight: 31,
    marginBottom: 10
  },
  internalFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '68%'
  },
  filtersButtons: {
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
