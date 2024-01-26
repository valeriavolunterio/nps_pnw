import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const SearchParkFilterComponent = ({ onApplyFilters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (value) => {
    const updatedFilters = selectedFilters.includes(value)
      ? selectedFilters.filter((item) => item !== value)
      : [...selectedFilters, value];

    setSelectedFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      searchQuery,
      selectedFilters,
    });
  };

  return (
    <ScrollView>
      <View>
        <Text>Search Filters</Text>

        <View>
          <Text>Search:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>

        <Text>Filter by Type</Text>
        {[
          'National Park',
          'National Historic Park/Site',
          'National Recreation Area',
          'National Reserve',
          'National Monument',
        ].map((filterType) => (
          <View key={filterType}>
            <TouchableOpacity onPress={() => handleCheckboxChange(filterType)}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{filterType}</Text>
                <View style={{ width: 20, height: 20, borderColor: 'black', borderWidth: 1, marginLeft: 10 }}>
                  {selectedFilters.includes(filterType) && (
                    <View style={{ flex: 1, backgroundColor: 'black' }} />
                  )}
                </View>
              </View>
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

export default SearchParkFilterComponent;