import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
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

  const handleCheckboxChange = (category, value) => {
    const updatedFilters = { ...filters, [category]: [...filters[category]] };

    if (updatedFilters[category].includes(value)) {
      // Remove the filter if it already exists
      updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
    } else {
      // Add the filter if it doesn't exist
      updatedFilters[category] = [...updatedFilters[category], value];
    }

    setFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={handleApplyFilters}>
        <Ionicons name="filter" size={24} color="white" />
        <Text style={styles.filterButtonText}>Filters</Text>
      </TouchableOpacity>
      {/* Pop-up filter component */}
      
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
});

export default MapFilterComponent;
