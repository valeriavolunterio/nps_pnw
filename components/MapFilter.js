import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

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
    <ScrollView>
      <View>
        <Text>Places</Text>
        {/* Filters for Places */}
        {['Geological', 'Historical', 'Overlook'].map((place) => (
          <View key={place}>
            <TouchableOpacity
              onPress={() => handleCheckboxChange('places', place)}
            >
              <Text>{place}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View>
        <Text>Experiences</Text>
        {/* Filters for Experiences */}
        {[
          'Backcountry Hiking',
          'Camping',
          'Climbing',
          'Diving',
          'Fishing',
          'Kayak/Canoe',
          'Skiing',
          'Swimming',
          'Trails',
          'Wildlife Viewing',
        ].map((experience) => (
          <View key={experience}>
            <TouchableOpacity
              onPress={() => handleCheckboxChange('experiences', experience)}
            >
              <Text>{experience}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View>
        <Text>Amenities</Text>
        {/* Filters for Amenities */}
        {[
          'Accessibility',
          'Parking',
          'Public Restrooms',
          'Drinking Water',
          'Food',
          'Information',
          'Permits and Passes',
          'Souvenir and Supplies',
          'Picnic Tables',
          'Fuel',
        ].map((amenity) => (
          <View key={amenity}>
            <TouchableOpacity
              onPress={() => handleCheckboxChange('amenities', amenity)}
            >
              <Text>{amenity}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity onPress={handleApplyFilters}>
        <Text>Apply filters</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MapFilterComponent;