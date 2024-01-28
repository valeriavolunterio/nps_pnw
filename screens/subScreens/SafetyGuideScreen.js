import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Dimensions,
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
  },
  subHeading: {
    margin: 20,
  },
  beigeBackground: {
    flex: 1,
    backgroundColor: "#FFF9F5", // Beige color
    overflow: "hidden", // Clip overflow content
    width: "100%",
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

  bodyText: {
    ...Fonts.body,
    // marginTop: 20,
    // marginLeft: 20,
    // marginBottom: 2
    //margin: 10,
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
});

const SafetyGuideScreen = ({ route, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <View style={styles.beigeBackground}>
          <Text style={styles.headerText}> Dial 911 for Emergencies </Text>
          <Text style={styles.subHeading}>
            Olympic is a wilderness park filled with natural wonders and
            potential hazards. Your safety is not guaranteed. Regulations are
            strictly enforced to protect you and the park's resources
          </Text>
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
        <Text>Tides and Your Safety</Text>
        <Text style={styles.bodyText}>
          Always carry a tide table, topographic map, and keep track of the time
          whenever hiking along Olympic's coast
        </Text>
        <Text style={styles.bodyText}>
          Several points along the coast are only passable at lower tides. Check
          the NOAA Tide Predictions to see if your chosen days are appropriate
          for coastal travel.
        </Text>
        <Text style={styles.bodyText}>
          Always carry a tide chart, available at visitor centers and coastal
          ranger stations, to time your hikes accordingly.
        </Text>
        <Text style={styles.bodyText}>
          When hiking the coast, you will need a topographic map that shows you
          the headlands that are only passable at lower tides. This map along
          with your tide table are essential to safely enjoying this rugged
          wilderness. Maps can be purchased ahead of time online here, at some
          local gear shops, or in person at select visitor centers
        </Text>
        <Pressable>
          <Text>Read More</Text>
        </Pressable>
      </View>
      <View style={styles.cardContainer}>
        <Text>Wildlife Safety</Text>
        <Text style={styles.bodyText}>
          All park wildlife are potentially dangerous to humans and can
          sometimes be unpredictable.
        </Text>
        <Text style={styles.bodyText}>
          Here are some basic guidelines that may help lessen the threat of
          danger and will help to keep wildlife wild:
        </Text>
        <Text style={styles.bodyText}>
          Observe wildlife from a distance. All wildlife is protected in the
          park. Park regulations require that all visitors maintain a distance
          of at least 50 yards (half the length of a football field) between
          themselves and any park wildlife. Do not approach wildlife. If an
          animal approaches closer than 50 yards, move away to maintain the
          minimum required distance of separation.
        </Text>
        <Text style={styles.bodyText}>
          Never feed wild animals. This includes all park animals: birds,
          squirrels, marmots, deer, elk, otters etc., not just bears. Learning
          to beg for and/or rely on human foods is extremely harmful for all
          wild animals, big or small. Be careful not to leave wrappers, crumbs,
          or other food trash after picnicking or snacking on the trails.
          Feeding wildlife damages their health, alters natural behaviors, and
          exposes them to predators and other dangers. Feeding wildlife can also
          increase risks to you and other visitors.
        </Text>
        <Text style={styles.bodyText}>
          Avoid wildlife during sensitive times.This includes times when animals
          are mating, nesting, raising young, and during the winter.
        </Text>
        <Pressable>
          <Text>Read More</Text>
        </Pressable>
      </View>
      <View style={styles.cardContainer}>
        <Text>Bears</Text>
        <Text style={styles.bodyText}>
          Minimize bear encounters: keep a clean camp and store food properly.
        </Text>
        <Text style={styles.bodyText}>
          There have been several instances of aggressive bears in the Olympics.
          No injuries have been reported, but property was damaged and bears
          have acted in a threatening manner. If you meet a bear on the trail,
          give it a wide berth. If a bear comes into camp, make noise to scare
          the bear away. If it is intent on getting your food or other property,
          do not risk injury. In the face of repeated encounters, leave the
          area, with or without your property as appropriate. Notify park staff
          in all instances of food loss or property damage, or any other
          threatening acts by bears.
        </Text>
        <Pressable>
          <Text>Read More</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
export default SafetyGuideScreen;
