import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../styles/Colors";

const searchData = [
  { name: 'Whitman Mission National Historic Site', type: 'place' },
  { name: 'Mount Rainer National Park', type: 'park' },
  { name: 'Olympic National Park', type: 'park' },
  { name: 'Lewis and Clark National Historic Park', type: 'park' },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = searchData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          clearButtonMode="always"
          style={styles.searchBox}
          autoCapitalize="none"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.baseTeal,
  },
  searchBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#000",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  itemContainer: {
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});

export default SearchScreen;


