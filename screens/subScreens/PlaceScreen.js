import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

const placeData = [
  {
    name: "Hoh Rain Forest",
    type: "Geological Attraction",
    park: "Olympic National Park",
    season: "Year Round",
    description:
      "The Hoh Rainforest is a lush, enchanting oasis within Olympic National Park. Known for its ancient towering trees, vibrant mosses, and diverse plant and animal life, this unique ecosystem is a haven for nature enthusiasts. Exploring the moss-draped trails feels like stepping into a fairytale, and the soothing sound of raindrops on leaves creates a serene atmosphere.",
    visitorCenter: {
      name: "Hoh Rain Forest Visitor Center",
      address: "18113 Upper Hoh Rd.,\nForks, WA 98331",
      phone: "(360) 565-3000",
      hoursBold:
        "Open Friday-Sunday, 10 AM to 4:30 PM and closed January/February.",
      hoursCont: "Open daily in summer; Hours vary according to season.",
    },
  },
  // Add more place data as needed
];

const PlaceScreen = ({ route, navigation }) => {
  const place = placeData.find((item) => item.name === "Hoh Rain Forest");

  if (!place) {
    return (
      <SafeAreaView>
        <Text>Place not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={{ ...Fonts.header2 }}>{place.name}</Text>
        <View>
          {/* icon */}
          <Text>{place.type}</Text>
        </View>
        <Text>{place.park}</Text>
        <View>{/* add the buttons */}</View>
      </View>
      <View>
        <View>
          <Text>{place.season}</Text>
          <Text>{place.description}</Text>
        </View>
        <View>
          <Text>{place.visitorCenter.name}</Text>
          <Text>{place.visitorCenter.address}</Text>
          <Text>Phone: {place.visitorCenter.phone}</Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>
              {place.visitorCenter.hoursBold}
            </Text>
            {place.visitorCenter.hoursCont}
          </Text>
        </View>
        <View>
          <Text>Amenities</Text>
          {/* Map amenities */}
        </View>
        <View>
          <Text>Experiences</Text>
          {/* Map experiences */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9F5",
    flex: 1,
  },
  imageContainer: {
    marginBottom: 20,
    position: "relative",
  },
  parkImage: {
    width: "100%",
    height: 225,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 25,
    width: "100%",
  },
  title: {
    fontFamily: "Stoke-Regular",
    color: "#fff",
    textAlign: "left",
    fontSize: 22,
  },
});

export default PlaceScreen;
