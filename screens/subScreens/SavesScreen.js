import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";
// import { styles } from "../../App";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    marginLeft: 10,
  },
  horizontalRule: {
    borderBottomColor: "black", // Change color as needed
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "100%", // Adjust width as needed
  },
});

const savedParks = [
  {
    id: 1,
    name: "Crater Lake",
    imageUrl:
      "https://www.nps.gov/common/uploads/grid_builder/crla/crop16_9/963F4262-C1C0-E248-ADC5F94443A1B88B.jpg?width=640&quality=90&mode=crop",
    isOpen: false,
  },
  {
    id: 2,
    name: "Olympic",
    imageUrl: "https://example.com/sample-image.jpg",
    isOpen: true,
  },
  {
    id: 3,
    name: "Mount Rainier",
    imageUrl: "https://example.com/sample-image.jpg",
    isOpen: true,
  },
  {
    id: 4,
    name: "North Cascades",
    imageUrl: "https://example.com/sample-image.jpg",
    isOpen: true,
  },
];

const ParkList = ({ data }) => {
  const renderParkCard = ({ item: park }) => (
    <View>
      <Image source={park.imageUrl} style={{ width: 100, height: 100 }} />
      <Text>{park.name}</Text>
      {/* {icon toggle} */}
      <Text>National Park</Text>
      <Text>{park.isOpen ? "Open" : "Closed"}</Text>
      <Pressable>
        {/* {map icon} */}
        <Text>Directions</Text>
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderParkCard}
      keyExtractor={(park) => park.id.toString()}
    />
  );
};

const SavesScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Toggle> */}
      {/* Sort Container */}
      <View>
        <Text>Recently Added</Text>
        {/* {SortIcon} */}
        <View style={styles.horizontalRule} />
      </View>
      <ParkList data={savedParks} />
    </SafeAreaView>
  );
};
export default SavesScreen;
