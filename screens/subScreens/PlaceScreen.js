import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";
import { SVGIcons } from "../../components/SVGIcons";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import ToggleButton from "../../components/ToggleButtons";
import RoundedButton from "../../components/RoundedButton";

const { width } = Dimensions.get("window"); // Define width here

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
      hoursCont: " Open daily in summer; Hours vary according to season.",
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

  // Function to get the SVG icon for an amenity
  const getSVGIcon = (type, name) => {
    if (SVGIcons[type][name]) {
      const IconComponent = SVGIcons[type][name];
      return <IconComponent width={28} height={28} fill={Colors.darkTeal} />;
    }
    // Return a default icon or handle the case when the amenity name doesn't match any icon
    return <View></View>;
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <View style={styles.tealBackground}>
            <View style={styles.cardContainer}>
              <Text style={styles.headerText}>{place.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 5,
                  marginBottom: 35,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="ellipse"
                    size={15}
                    color={Colors.green} // Add conditional for color based on type
                  />
                  <Text style={styles.typeText}>{place.type}</Text>
                </View>
                <View>
                  <Text style={styles.parkText}>{place.park}</Text>
                </View>
              </View>
            </View>
            <View style={styles.actionBtnContainer}>
              <View style={styles.actionBtns}>
                <View style={{ paddingHorizontal: 10 }}>
                  <ToggleButton
                    type="favorite"
                    color={Colors.sepia}
                    buttonSize={48}
                    toggleState={true}
                  />
                </View>
                <View>
                  <ToggleButton
                    type="bookmark"
                    color={Colors.baseTeal}
                    buttonSize={48}
                    toggleState={true}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <ToggleButton
                    type="share"
                    color={Colors.green}
                    buttonSize={48}
                    toggleState={false}
                  />
                </View>
              </View>
            </View>
            <View style={styles.showInMapBtn}>
              <RoundedButton
                type="map"
                text="Show in Map"
                onPress={() => navigation.navigate("Map")}
              />
            </View>
          </View>
          <View style={styles.triangleContainer}>
            <Svg style={styles.svgTriangle} height={width / 5} width={width}>
              <Polygon
                points={`0,0 ${width},0 ${width / 2},${width / 6} 0,0`}
                fill={Colors.lightTeal} // Light Teal color
              />
            </Svg>
          </View>
        </View>
        <View>
          <View style={styles.cardContainer}>
            <Text style={styles.seasonTitle}>Season: {place.season}</Text>
            <Text style={styles.description}>{place.description}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.visitorCenter}>{place.visitorCenter.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.address}>{place.visitorCenter.address}</Text>
              <Text style={styles.phone}>
                Phone: {place.visitorCenter.phone}
              </Text>
            </View>
            <Text>
              <Text style={{ fontWeight: "bold" }}>
                {place.visitorCenter.hoursBold}
              </Text>
              {place.visitorCenter.hoursCont}
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.amenitiesText}>Amenities</Text>
            <View style={styles.gridContainer}>
              {place.amenities.map((amenity, index) => (
                <View key={index} style={styles.gridItem}>
                  {getSVGIcon("amenities", amenity)}
                  <Text />
                </View>
              ))}
            </View>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.experienceText}>Experiences</Text>
            <View style={styles.gridContainer}>
              {place.experiences.map((experience, index) => (
                <View key={index} style={styles.gridItem}>
                  {getSVGIcon("experiences", experience)}
                  <Text />
                </View>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9F5",
    flex: 1,
  },
  headerText: {
    color: Colors.darkTeal,
    ...Fonts.header2,
    marginBottom: 15,
  },
  typeText: {
    ...Fonts.subheading,
    fontSize: 12,
    marginLeft: 5,
    letterSpacing: 0.18,
  },
  parkText: {
    ...Fonts.subheading,
    fontSize: 12,
    letterSpacing: 0.18,
    color: Colors.baseTeal,
    textAlign: "right",
    marginRight: 0,
    flexWrap: "wrap",
  },
  seasonTitle: {
    ...Fonts.header4,
    fontSize: 16,

    marginBottom: 12,
  },
  description: {
    ...Fonts.body,
    fontSize: 12,
  },
  visitorCenter: {
    color: Colors.darkTeal,
    ...Fonts.subheading,

    fontSize: 14,
    letterSpacing: 0.21,
    marginBottom: 7,
  },
  address: {
    ...Fonts.header4,
    fontSize: 12,

    letterSpacing: 0.18,
    marginBottom: 10,
  },
  phone: {
    fontSize: 12,
    marginLeft: 95,
    marginBottom: 20,
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
  svgTriangle: {
    flex: 1,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  triangleContainer: {
    alignItems: "center",
    borderRadius: 10,
  },
  tealBackground: {
    flex: 1,
    backgroundColor: Colors.lightTeal, // Beige color
    overflow: "hidden", // Clip overflow content
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 5,
    elevation: 5, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  actionBtnContainer: {
    position: "absolute",
    top: 140,
    right: 10,
    zIndex: 99,
    left: 230,
  },
  actionBtns: {
    zIndex: 99,
    flexDirection: "row",
  },
  showInMapBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    top: 140,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 10,
    marginLeft: 30,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  gridItem: {
    width: "16%", // Adjust as needed for the number of columns
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  amenitiesText: {
    ...Fonts.subheading,
    color: Colors.green,

    fontSize: 16,
  },
  experienceText: {
    ...Fonts.subheading,
    color: Colors.green,

    fontSize: 16,
  },
});

export default PlaceScreen;
