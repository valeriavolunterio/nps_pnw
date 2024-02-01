import React, { useState } from 'react';
import { View, TextInput, Switch, Text, Button, StyleSheet } from 'react-native';
//import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [showParks, setShowParks] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);

  const handleSearch = () => {
    // Sample data representing parks and places
    const data = [
      { name: 'Whitman Mission National Historic Site', type: 'place' },
      { name: 'Mount Rainer National Park', type: 'park' },
      { name: 'Olympic National Park', type: 'park' },
      { name: 'Lewis and Clark National Historic Park', type: 'park' },
    ];
  
    // Convert searchText to lowercase for case-insensitive comparison
    const searchTextLower = searchText.toLowerCase();
  
    // Filter the data based on search text, showParks, and showPlaces
    const filteredData = data.filter(item => {
      const matchesSearchText = item.name.toLowerCase().includes(searchTextLower);
      const matchesType = (showParks && item.type === 'park') || (showPlaces && item.type === 'place');
  
      return matchesSearchText && matchesType;
    });
  
    // Log or use the filteredData for displaying search results
    console.log('Filtered Data:', filteredData);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchBar
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        platform="ios" // or "android"
      />
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Text>Show Parks</Text>
        <Switch value={showParks} onValueChange={() => setShowParks(!showParks)} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Text>Show Places</Text>
        <Switch value={showPlaces} onValueChange={() => setShowPlaces(!showPlaces)} />
      </View>

      <Button title="Search" onPress={handleSearch} />

      {/* Add your search results component here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FFF9F5",
    justifyContent: undefined,
  },
  itemContainer: {
    flex: 1 / 2,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
  },
});

export default SearchScreen;
