import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Linking,
  Dimensions,
  Image,
} from "react-native";
import { useParkData } from "../../data_management/parksDataContext.js";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts.js";

const EventsScreen = () => {
  const { newsData, parkData } = useParkData();

  const renderEventsCard = ({ item }) => {
    const { title, times, url, parkCode, lastIndexedDate, abstract, image } =
      item;
    const parkName =
      parkData.find((park) => park.parkCode === parkCode)?.fullName ||
      "Unknown Park";
    //console.log(newsData)
    const handlePress = () => {
      if (url) {
        openLink(url);
      } else {
        console.warn("No link available for this event.");
      }
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.park}>{parkName}</Text>
          <Text style={styles.date}>{lastIndexedDate}</Text>
          <Text style={styles.abstract}>{abstract}</Text>

          {times && (
            <View style={styles.time}>
              {times.map((time, index) => (
                <Text key={index} style={styles.time}>
                  {time.timestart} - {time.timeend}
                </Text>
              ))}
            </View>
          )}
          {/* {url && (
            <View>
              <Image source={{uri: image}} style={styles.image}/>
            </View>
          )} */}
          {url && (
            <TouchableOpacity onPress={() => openLink(url)}>
              <Text style={styles.link}>Read More</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Function to open the link in a browser or handle navigation
  const openLink = (url) => {
    // Use Linking to open the URL
    Linking.openURL(url).catch((error) =>
      console.error("Error opening link:", error)
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderEventsCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightOffWhite,
  },

  card: {
    backgroundColor: Colors.offWhite,
    width: 350,
    alignSelf: "center",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    color: "gray",
    marginBottom: 5,
  },
  abstract: {
    paddingVertical: 5,
  },
  park: {
    color: Colors.baseGray,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  time: {
    color: Colors.green,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  link: {
    color: Colors.sepia,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default EventsScreen;
