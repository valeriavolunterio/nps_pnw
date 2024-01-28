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
//import ToggleSwitch from "../../components/Switch";
// import { styles } from "../../App";
import SlideSwitch from "../../components/SlideSwitch";
import { Colors } from "../../styles/Colors.js";

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
  slider: {
    flex: 1,
    alignItems: "center",
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
    imageUrl:
      "https://www.nps.gov/common/uploads/grid_builder/olym/crop16_9/37A477A2-DBD7-96C0-0C135C8028ED6CEF.jpg?width=640&quality=90&mode=crop",
    isOpen: true,
  },
  {
    id: 3,
    name: "Mount Rainier",
    imageUrl:
      "https://www.nps.gov/common/uploads/grid_builder/mora/crop16_9/F096F25E-1DD8-B71B-0BB2F7B3366C4901.JPG?width=640&quality=90&mode=crop",
    isOpen: true,
  },
  {
    id: 4,
    name: "North Cascades",
    imageUrl:
      "https://www.nps.gov/common/uploads/grid_builder/noca/crop16_9/E56D56D8-98A0-49D8-831F443EE2E6AB70.jpg?width=640&quality=90&mode=crop",
    isOpen: true,
  },
];

const ParkList = ({ data }) => {
  const renderParkCard = ({ item: park }) => (
    <View>
      <Image
        source={{ uri: park.imageUrl }}
        style={{ width: 100, height: 100 }}
      />
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
  const { screenName, headerColor } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: screenName,
      headerStyle: {
        backgroundColor: headerColor,
      },
    });
  }, [navigation, screenName, headerColor]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slider}>
        <SlideSwitch />
      </View>
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
