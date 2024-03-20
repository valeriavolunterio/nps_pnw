import React, { useState, useEffect, useContext } from "react";
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
import SlideSwitch from "../../components/SlideSwitch";
import ParkOpenStatus from "../../components/ParkOpenStatus.js";
import { Colors } from "../../styles/Colors.js";

import { useParkData } from "../../data_management/parksDataContext.js";
import {
  RecentParksContext,
  BookmarkedParksContext,
  FavoriteParksContext,
} from "../../data_management/StorageContext.js";

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

const SavesScreen = ({ route, navigation }) => {
  const { screenName, headerColor } = route.params;

  const { parkData, alertData } = useParkData([]);

  const { recentParks } = useContext(RecentParksContext);
  const { bookmarkedParks } = useContext(BookmarkedParksContext);
  const { favoriteParks } = useContext(FavoriteParksContext);

  useEffect(() => {
    navigation.setOptions({
      title: screenName,
      headerStyle: {
        backgroundColor: headerColor,
      },
    });
  }, [navigation, screenName, headerColor]);

  if (screenName === "Recently Viewed") {
    savedParks = parkData.filter((park) => recentParks.includes(park.parkCode));
  } else if (screenName === "Bookmarks") {
    savedParks = parkData.filter((park) =>
      bookmarkedParks.includes(park.parkCode)
    );
  } else if (screenName === "Favorites") {
    savedParks = parkData.filter((park) =>
      favoriteParks.includes(park.parkCode)
    );
  } else {
    console.error("Invalid screenName");
  }
  const renderParkCard = ({ item: park }) => (
    <View>
      <Image
        source={{ uri: park.images[0].url }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{park.name}</Text>
      {/* {icon toggle} */}
      <Text>{park.designation}</Text>
      <View>
        {/* <ParkOpenStatus hours={park.operatingHours[0].standardHours} /> */}
      </View>
      <Pressable>
        {/* {map icon} */}
        <Text>Directions</Text>
      </Pressable>
    </View>
  );

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
      <FlatList
        data={savedParks}
        renderItem={renderParkCard}
        keyExtractor={(park) => park.id.toString()}
      />
    </SafeAreaView>
  );
};
export default SavesScreen;
