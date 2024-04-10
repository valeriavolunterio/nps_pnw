import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Linking,
  Dimensions,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { useParkData } from "../../data_management/parksDataContext.js";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts.js";

const { width } = Dimensions.get("window");

const EventsScreen = () => {
  const { eventsData } = useParkData();

  const renderEventsCard = ({ item }) => {
    const { title, recurrencedatestart, times, regresurl, parkfullname } = item;
    console.log(eventsData);
    const handlePress = () => {
      if (regresurl) {
        openLink(regresurl);
      } else {
        console.warn("No link available for this event.");
      }
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.card}>
          <Text style={[Fonts.body, { color: Colors.darkGray }]}>{parkfullname}</Text>
          <Text style={Fonts.subheading}>{title}</Text>
          <Text style={[
                        Fonts.button,
                        { color: Colors.green, paddingVertical: 5 },
                      ]}>{recurrencedatestart}</Text>
          {times && (
            <View style={styles.time}>
              {times.map((time, index) => (
                <Text key={index} style={{
                  color: Colors.darkGray,
                  fontWeight: "bold",
                }}>
                  {time.timestart} - {time.timeend}
                </Text>
              ))}
            </View>
          )}
          {regresurl && (
            <TouchableOpacity onPress={() => openLink(regresurl)}>
              <Text style={styles.link}>More Info</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Function to open the link in a browser or handle navigation
  const openLink = (regresurl) => {
    // Use Linking to open the URL
    Linking.openURL(regresurl).catch((error) =>
      console.error("Error opening link:", error)
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={eventsData}
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    color: "gray",
    marginBottom: 5,
  },
  park: {
    color: Colors.baseGray,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
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
  },
});

export default EventsScreen;
