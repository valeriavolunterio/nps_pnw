import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Pressable, } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
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
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ScrollView>
              {/* PARKS */}
              <FilterSection title="Parks" style={styles.sectionHeaderText}>
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>National Park</Text>
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>Park</Text>
              </FilterSection>


               {/* PARKS */}
               <FilterSection title="Places">
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>National Park</Text>
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>Park</Text>
              </FilterSection>

               {/* PARKS */}
               <FilterSection title="Experiences">
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>National Park</Text>
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>Park</Text>
              </FilterSection>

               {/* PARKS */}
               <FilterSection title="Amenities"  style={styles.sectionHeaderText}>
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>National Park</Text>
                <CheckBox
                  value={filters.parks.includes('park')}
                  onValueChange={() => handleCheckboxChange('parks', 'park')}
                />
                <Text>Park</Text>
              </FilterSection>

              {/* Add more FilterSections for other categories */}

            </ScrollView>
            <Pressable onPress={() => setModalVisible(false)} style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Filters</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const FilterSection = ({ title, children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
        <Ionicons name={expanded ? 'chevron-down' : 'chevron-up'} size={24} color="black" />
      </TouchableOpacity>
      {expanded && <View style={styles.sectionContent}>{children}</View>}
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
  filterSection: {
    padding: 10,
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    maxHeight: '50%', // Take up half of the screen
  },
  applyButton: {
    backgroundColor: "#344A24",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20, // Added horizontal padding for better alignment
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    marginLeft: 10,
  },
});

export default MapFilterComponent;

