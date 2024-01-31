import React, { useState } from 'react';
import { View, TextInput, Switch, Text, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [showParks, setShowParks] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);

  const handleSearch = () => {
    // Implement your search logic here based on searchText, showParks, and showPlaces
    console.log('Search for:', searchText);
    console.log('Show Parks:', showParks);
    console.log('Show Places:', showPlaces);
    // You can use the values to filter and display search results.
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
