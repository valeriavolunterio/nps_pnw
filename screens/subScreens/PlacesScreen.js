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
    amenities: [
      "parking",
      "restrooms",
      "water",
      "information",
      "permits",
      "picnic",
      "accessible",
      "souvenirs",
    ],
    experiences: [
      "hiking",
      "fishing",
      "kayak",
      "trails",
      "wildlife",
      "camping",
    ],
  },
  {
    name: "Hurricane Ridge",
    type: "Geological Attraction",
    park: "Olympic National Park",
    season: "Year Round",
    description:
      "Hurricane Ridge is a must-visit destination within Olympic National Park, offering breathtaking panoramic views of the surrounding mountains, glaciers, and lush forests. During the summer and early fall months, this iconic spot becomes a hiker's paradise and a haven for nature enthusiasts. Visitors can embark on scenic hikes, capture stunning photographs, and witness diverse wildlife in their natural habitat. The ridge is especially renowned for its vibrant wildflower meadows, making it a paradise for botany enthusiasts and photographers alike.",
    visitorCenter: {
      name: "Hoh Rain Forest Visitor Center",
      address: "18113 Upper Hoh Rd.,\nForks, WA 98331",
      phone: "(360) 565-3000",
      hoursBold:
        "Open Friday-Sunday, 10 AM to 4:30 PM and closed January/February.",
      hoursCont: "Open daily in summer; Hours vary according to season.",
    },
    amenities: [
      "parking",
      "restrooms",
      "water",
      "information",
      "permits",
      "picnic",
      "accessible",
      "souvenirs",
    ],
    experiences: [
      "hiking",
      "fishing",
      "kayak",
      "trails",
      "wildlife",
      "camping",
    ],
  },
  {
    name: "Kalaloch and Ruby Beach",
    type: "Geological Attraction",
    park: "Olympic National Park",
    season: "Year Round",
    description:
      "Kalaloch and Ruby Beach, two stunning coastal gems nestled within Olympic National Park, offer nature enthusiasts a captivating blend of rugged beauty and pristine wilderness. Kalaloch boasts a windswept coastline with driftwood-strewn shores and awe-inspiring sea stacks, while Ruby Beach, just a short drive away, enchants visitors with its iconic sea stacks, tide pools teeming with marine life, and vibrant sunsets. Together, these beaches epitomize the Pacific Northwest's natural splendor, inviting hikers, photographers, and beachcombers to revel in the untamed allure of the Olympic Peninsula's coastline.",
    visitorCenter: {
      name: "Hoh Rain Forest Visitor Center",
      address: "18113 Upper Hoh Rd.,\nForks, WA 98331",
      phone: "(360) 565-3000",
      hoursBold:
        "Open Friday-Sunday, 10 AM to 4:30 PM and closed January/February.",
      hoursCont: "Open daily in summer; Hours vary according to season.",
    },
    amenities: [
      "parking",
      "restrooms",
      "water",
      "information",
      "permits",
      "picnic",
      "accessible",
      "souvenirs",
    ],
    experiences: [
      "hiking",
      "fishing",
      "kayak",
      "trails",
      "wildlife",
      "camping",
    ],
  },
  {
    name: "HSol Duc Valley",
    type: "Geological Attraction",
    park: "Olympic National Park",
    season: "Year Round",
    description:
      "Sol Duc Valley, a captivating sanctuary nestled within Olympic National Park, beckons nature enthusiasts with its lush rainforests, meandering river, and cascading waterfalls. Here, pristine wilderness meets serenity, as you traverse through old-growth forests adorned with moss-draped trees and vibrant ferns. The highlight of the valley is the enchanting Sol Duc Falls, a multi-tiered wonder that graces visitors with its powerful beauty. Whether you're a hiker, wildlife lover, or simply seeking tranquility, Sol Duc Valley offers an unforgettable escape into the heart of the Olympic Peninsula's natural wonders.",
    visitorCenter: {
      name: "Hoh Rain Forest Visitor Center",
      address: "18113 Upper Hoh Rd.,\nForks, WA 98331",
      phone: "(360) 565-3000",
      hoursBold:
        "Open Friday-Sunday, 10 AM to 4:30 PM and closed January/February.",
      hoursCont: "Open daily in summer; Hours vary according to season.",
    },
    amenities: [
      "parking",
      "restrooms",
      "water",
      "information",
      "permits",
      "picnic",
      "accessible",
      "souvenirs",
    ],
    experiences: [
      "hiking",
      "fishing",
      "kayak",
      "trails",
      "wildlife",
      "camping",
    ],
  },
];

const PlacesScreen = ({ route, navigation }) => {
  const { parkName } = route.params;

  const PlacesList = ({ places }) => {
    const renderPlace = ({ item }) => (
      <Pressable
        style={styles.placeContainer}
        // access in PlaceScreen with
        // const { place } = route.params;
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
        {/* Text content on the right of icon */}
        <View style={styles.textContainer}>
          <Text style={styles.subHeading}>{item.name}</Text>
          <Text style={styles.body} numberOfLines={2} ellipsizeMode="tail">
            {item.description}
          </Text>
          <View style={styles.horizontalRulePlace} />
        </View>
      </Pressable>
    );

    return (
      <FlatList
        data={places}
        renderItem={renderPlace}
        keyExtractor={(place) => place.name}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.lightOffWhite }}>
      <View style={styles.container}>
        <Text style={styles.heading}>{parkName}</Text>
        <View style={styles.horizontalRule} />
        <PlacesList places={placeData} />
      </View>
    </SafeAreaView>
  );
};

export default PlacesScreen;
