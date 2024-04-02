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
import { Fonts } from "../../styles/Fonts";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useParkData } from "../../data_management/parksDataContext.js";
import {
  RecentParksContext,
  BookmarkedParksContext,
  FavoriteParksContext,
} from "../../data_management/StorageContext.js";
// import { FlatList, ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.offWhite,
    alignItems: "center",
    flex: 1,
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
    paddingBottom: 15,
    padding: 35,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 17,
    paddingRight: 40,
    padding: 15,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 10,
    elevation: 5, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  parkTitle: {
    fontSize: 16,
    fontFamily: Fonts.header4.fontFamily,
    paddingBottom: 3,
  },
  directionsButton: {
    borderRadius: 23,
    backgroundColor: Colors.white,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  directionsText: {
    fontSize: 12,
    letterSpacing: 0.18,
    color: Colors.green,
    fontFamily: Fonts.subheading.fontFamily,
  },
  designation: {
    fontSize: 14,
    letterSpacing: 0.21,
    fontFamily: Fonts.body.fontFamily,
    color: Colors.darkGray,
  },
  recentlyAdded: {
    marginLeft: 25,
    justifyContent: "space-between",
    width: "85%",
    marginTop: 40,
    fontFamily: Fonts.header4.fontFamily,
  },
  status: {
    borderRadius: 9,
    backgroundColor: Colors.sepia,
    color: Colors.white,
    fontFamily: Fonts.body.fontFamily,
    alignSelf: "flex-start",
    marginTop: 17,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  mapIcon: {
    position: "absolute",
    alignSelf: "flex-start",
    alignItems: "center",
    color: Colors.green,
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
    <Pressable
      onPress={() => navigation.navigate("Park", { parkCode: park.parkCode })}
    >
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: park.images[0].url }}
            style={{ width: 100, height: 100, borderRadius: 5 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.parkTitle}>{park.name}</Text>
            {/* {icon toggle} */}
            <Text style={styles.designation}>{park.designation}</Text>
            <View style={styles.status}>
              <ParkOpenStatus
                hours={park.operatingHours[0].standardHours}
                parkName={park.fullName}
              />
            </View>
          </View>
        </View>
        <View style={styles.directionsButton}>
          <Pressable onPress={() => navigation.navigate("Map")}>
            <View style={styles.mapIcon}>
              {/* <MaterialCommunityIcons name="map" /> */}
            </View>
            <Text style={styles.directionsText}>Directions</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.slider}>
        <SlideSwitch />
      </View> */}
      {/* <Toggle> */}
      {/* Sort Container */}
      <View style={styles.recentlyAdded}>
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
