import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { Fonts } from "../../styles/Fonts";

import { Colors } from "../../styles/Colors";
import Svg, { Polygon } from "react-native-svg";

const { width } = Dimensions.get("window"); // Define width here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D8DA",
  },
  headerContainer: {
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    marginLeft: 60,
    fontSize: 16,
    //...Fonts.subheading,
  },
  subHeading: {
    margin: 20,

    fontWeight: "bold",
    fontSize: 14,
  },
  beigeBackground: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#FFF9F5", // Beige color
    overflow: "hidden", // Clip overflow content
    width: "100%",
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  listHeading: {
    marginBottom: 2,
    fontWeight: 400,
    fontSize: 18,
    ...Fonts.header3,
  },
  listSubHeading: {
    marginRight: 130,
    marginBottom: 18,
    fontWeight: 700,
    //...Fonts.body2,
    fontStyle: "italic",
  },
  listItemText: {
    ...Fonts.body,
    // marginTop: 20,
    // marginLeft: 20,
    marginBottom: -5,
    //paddingTop: 10,
    //margin: 10,
  },
  listItemText2: {
    ...Fonts.body,
    // marginTop: 20,
    // marginLeft: 20,
    marginBottom: -5,
    paddingTop: 10,
    //margin: 10,
  },
  readMore: {
    flexDirection: "row-reverse",
    //...Fonts.subheading,
    ...Colors.darkGray,
    textDecorationLine: "underline",
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
  tideImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  tidesImage: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    resizeMode: "contain", // Adjust as needed
    marginBottom: -130,
    marginTop: -50,
    marginRight: 10,
  },
});

const SafetyGuideScreen = ({ route, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <View style={styles.beigeBackground}>
          <Text style={styles.headerText}> Dial 911 for Emergencies </Text>
          <View>
            <Text style={styles.subHeading}>
              Olympic is a wilderness park filled with natural wonders and
              potential hazards. Your safety is not guaranteed. Regulations are
              strictly enforced to protect you and the park's resources
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.triangleContainer}>
        <Svg style={styles.svgTriangle} height={width / 5} width={width}>
          <Polygon
            points={`0,0 ${width},0 ${width / 2},${width / 6} 0,0`}
            fill="#FFF9F5" // Beige color
          />
        </Svg>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.tideImageContainer}>
          <Image
            style={styles.tidesImage}
            source={require("../../assets/tides.jpg")}
          />
        </View>
        <Text style={styles.listHeading}>Tides and Your Safety</Text>
        <Text style={styles.listSubHeading}>
          <Text style={{ fontWeight: "bold" }}>Always</Text> carry a tide table,
          topographic map, and keep track of the time whenever hiking along
          Olympic's coast
        </Text>

        <View style={styles.listItemContainer}>
          {/* <Text style={{ fontSize: 20, marginBottom: 55 }}>{"\u2022"}</Text> */}
          <Text style={styles.listItemText2}>
            {"\u2022"}Several points along the coast are only passable at lower
            tides. Check the NOAA Tide Predictions to see if your chosen days
            are appropriate for coastal travel.{"\n"}
          </Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemText}>
            {"\u2022"}Always carry a tide chart, available at visitor centers
            and coastal ranger stations, to time your hikes accordingly.{"\n"}{" "}
          </Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemText}>
            {"\u2022"}When hiking the coast, you will need a topographic map
            that shows you the headlands that are only passable at lower tides.
            This map along with your tide table are essential to safely enjoying
            this rugged wilderness. Maps can be purchased ahead of time online
            here, at some local gear shops, or in person at select visitor
            centers{"\n"}
          </Text>
        </View>
        <View style={styles.readMore}>
          <Pressable>
            <Text>Read More</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.listHeading}>Wildlife Safety</Text>
        <Text style={styles.listSubHeading}>
          <Text style={{ fontWeight: "bold" }}>
            All park wildlife are potentially dangerous to humans and can
            sometimes be unpredictable.
          </Text>
        </Text>
        <View style={styles.listItemContainer}>
          {/* <Text style={{ fontSize: 20, marginBottom: 55 }}>{"\u2022"}</Text> */}
          <Text style={styles.listItemText}>
            {"\u2022"}
            <Text style={{ fontWeight: "bold" }}>
              Observe wildlife from a distance.
            </Text>{" "}
            All wildlife is protected in the park. Park regulations require that
            all visitors maintain a distance of at least 50 yards (half the
            length of a football field) between themselves and any park
            wildlife. Do not approach wildlife. If an animal approaches closer
            than 50 yards, move away to maintain the minimum required distance
            of separation.
            {"\n"}
          </Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemText}>
            {"\u2022"}Never feed wild animals. This includes all park animals:
            birds, squirrels, marmots, deer, elk, otters etc., not just bears.
            Learning to beg for and/or rely on human foods is extremely harmful
            for all wild animals, big or small. Be careful not to leave
            wrappers, crumbs, or other food trash after picnicking or snacking
            on the trails. Feeding wildlife damages their health, alters natural
            behaviors, and exposes them to predators and other dangers. Feeding
            wildlife can also increase risks to you and other visitors.{"\n"}{" "}
          </Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemText}>
            {"\u2022"}Avoid wildlife during sensitive times.This includes times
            when animals are mating, nesting, raising young, and during the
            winter.{"\n"}
          </Text>
        </View>
        <View style={styles.readMore}>
          <Pressable>
            <Text>Read More</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.listHeading}>Bears</Text>
        <Text style={styles.listSubHeading}>
          <Text>
            Minimize bear encounters: keep a clean camp and store food properly.
          </Text>
        </Text>

        <View style={styles.listItemContainer}>
          {/* <Text style={{ fontSize: 20, marginBottom: 55 }}>{"\u2022"}</Text> */}
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItemText}>
            There have been several instances of aggressive bears in the
            Olympics. No injuries have been reported, but property was damaged
            and bears have acted in a threatening manner. If you meet a bear on
            the trail, give it a wide berth. If a bear comes into camp, make
            noise to scare the bear away. If it is intent on getting your food
            or other property, do not risk injury. In the face of repeated
            encounters, leave the area, with or without your property as
            appropriate. Notify park staff in all instances of food loss or
            property damage, or any other threatening acts by bears.{"\n"}
          </Text>
        </View>
        <View style={styles.readMore}>
          <Pressable>
            <Text>Read More</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
export default SafetyGuideScreen;
