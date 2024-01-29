import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Pressable,} from 'react-native';
import { CheckBox } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is used for the filter icon
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../styles/Fonts';

const MapFilterComponent = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    parks: [],
    places: [],
    experiences: [],
    amenities: [],
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckboxChange = (category, value) => {
    const updatedFilters = { ...filters, [category]: [...filters[category]] };

    if (updatedFilters[category].includes(value)) {
      
      updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
    } else {
      
      updatedFilters[category] = [...updatedFilters[category], value];
    }

    setFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
    setModalVisible(false); 
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.filterButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="filter" size={24} color="white" />
        <Text style={styles.filterButtonText}>Filters</Text>
      </Pressable>

      {/* Pop-up filter component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView>
              
              <CheckBox
                value={filters.parks.includes('park')}
                onValueChange={() => handleCheckboxChange('parks', 'park')}
              />
              <Text>Park</Text>
              <CheckBox
                value={filters.parks.includes('park')}
                onValueChange={() => handleCheckboxChange('parks', 'park')}
              />
              <Text>Park</Text>
              

              
            </ScrollView>
            <TouchableOpacity onPress={handleApplyFilters} style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(80, 114, 87, 0.8)',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: 'bold',
    color: Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  applyButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MapFilterComponent;