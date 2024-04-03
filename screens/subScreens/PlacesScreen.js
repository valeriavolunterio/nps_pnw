import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

import { useParkData } from "../../data_management/parksDataContext.js";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    height: "100%",
    backgroundColor: Colors.lightOffWhite,
  },
  horizontalRule: {
    marginBottom: 20,
    borderBottomColor: "black", // Change color as needed
    opacity: 0.2,
    borderBottomWidth: 1,
    width: "100%", // Adjust width as needed
  },
  horizontalRulePlace: {
    marginTop: 30,
    borderBottomColor: "black", // Change color as needed
    opacity: 0.2,
    borderBottomWidth: 1,
    width: "100%", // Adjust width as needed
  },
  heading: {
    fontSize: 16,
    marginTop: 20,
    color: Colors.darkGray,
    ...Fonts.header4,
  },
  subHeading: {
    marginRight: 55,
    marginLeft: 8,
    paddingBottom: 10,
    ...Fonts.header4,
  },
  body: {
    alignItems: "center",
    marginLeft: 8,
    paddingBottom: 13,
    marginRight: 55,
    ...Fonts.body,
  },
  placeContainer: {
    flexDirection: "row",
    paddingBottom: 5,
    //flex: 1,
  },

  iconContainer: {
    //marginRight: 10,
    //flex: 1,
  },
});

const PlacesScreen = ({ route, navigation }) => {
  const { placeData } = useParkData([]);
  const { parkCode, parkName } = route.params;

  const filteredPlaces = placeData.filter((place) =>
    place.relatedParks.some((park) => park.parkCode === parkCode)
  );

  const renderPlace = ({ item }) => (
    <Pressable
      style={styles.placeContainer}
      onPress={() =>
        navigation.navigate("Place", {
          place: item,
        })
      }
    >
      <Ionicons
        name="ellipse"
        size={15}
        color={Colors.green} // Add conditional for color based on type
        style={styles.iconContainer}
      />
      <View style={styles.container}>
        <Text style={styles.subHeading}>{item.title}</Text>
        <Text style={styles.body} numberOfLines={2} ellipsizeMode="tail">
          {item.bodyText}
        </Text>
        <View style={styles.horizontalRulePlace} />
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.lightOffWhite }}>
      <View style={styles.container}>
        <Text style={styles.heading}>{parkName}</Text>
        <View style={styles.horizontalRule} />
        <FlatList
          data={filteredPlaces}
          renderItem={renderPlace}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlacesScreen;
