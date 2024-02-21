import React, { useState } from "react";
import { 
  View, 
  TextInput,
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView,
} from "react-native";
import { Colors } from "../styles/Colors";
import { Fonts } from "../styles/Fonts";
import { Colors } from "../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D8DA",
  },
  beigeBackground: {
    flex: 1,
    backgroundColor: "#FFF9F5",
    overflow: "hidden",
  },
  grayBackground: {
    flex: 1,
    backgroundColor: "#D3D8DA", // Gray color
  },
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  headerContainer: {
    padding: 10,
    alignSelf: "flex-start",
    marginTop: 90,
  },
  subHeaderContainer: {
    paddingTop: 1,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  titleHeaderText: {
    color: Colors.black,
    fontSize: 22,
    fontFamily: "Stoke-Regular",
  },
  subHeaderText: {
    color: Colors.red,
    fontSize: 16,
    fontFamily: "OpenSans-SemiBold",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  svgTriangle: {
    flex: 1,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  });




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


export default SearchScreen;