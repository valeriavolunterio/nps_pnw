import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../styles/Colors";
import { Fonts } from "../styles/Fonts";

const searchData = [
  { name: 'Whitman Mission National Historic Site', description: "Whitman Mission National Historic Site was established to focus on the continuing relevance..." },
  { name: 'Mount Rainer National Park', description: "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington.... " },
  { name: 'Olympic National Park', description: "Olympic National Park, a natural wonder on Washington's Olympic Peninsula, enchants with its..." },
  { name: 'Lewis and Clark National Historic Park', description: "Discover the rich heritage of the native people. Unfold the dramatic stories of America's most fam.." },
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
            <Text style={Fonts.header4}>{item.name}</Text>
            <Text style={Fonts.body}>{item.description}</Text>
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
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
    borderBottomColor: Colors.darkestGray,
    borderBottomWidth: 0.5,
  },
});

export default SearchScreen;


