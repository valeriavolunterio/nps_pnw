import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Colors } from "../styles/Colors";
import { Fonts } from "../styles/Fonts";
import { useParkData } from "../data_management/parksDataContext";

const MAX_DESCRIPTION_LENGTH = 100; // Maximum length of the short description

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { parkData } = useParkData([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = parkData.filter((item) =>
    item.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to truncate the description to a maximum length
  const truncateDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return description;
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
        keyExtractor={(item) => item.parkCode}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate("Park", { parkCode: item.parkCode })
            }
          >
            <Text style={Fonts.header4}>{item.fullName}</Text>
            <Text style={Fonts.body}>
              {truncateDescription(item.description)}
            </Text>
          </Pressable>
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
