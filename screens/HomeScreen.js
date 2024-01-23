import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button, View, Text } from "react-native";
import { Colors } from "../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FFF9F5",
  },
  itemContainer: {
    flex: 1 / 2,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  headerContainer: {
    padding: 10,
    alignSelf: "flex-start",
  },
  subHeaderContainer: {
    paddingTop: 1,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  titleHeaderText: {
    color: Colors.black,
    fontSize: 22,
  },
  subHeaderText: {
    color: Colors.red,
    fontSize: 16,
  },

  carouselContainer: {
    padding: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 1,
  },
  carouselText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  safetyGuideButton: {
    alignItems: "stretch",
    alignSelf: "center",
    backgroundColor: Colors.baseTeal, 
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: "90%",
  },
  safetyGuideButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: "center"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
});

const HomeScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeaderText}>Pacific Northwest</Text>
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>National Park Service</Text>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.carouselText}>Carousel</Text>
      </View>

      <TouchableOpacity
      style={styles.safetyGuideButton}
        onPress={() => navigation.navigate("SafetyGuide")} >
          <Ionicons name="ios-glasses" size={24} color={Colors.darkTeal} style={styles.icon} />
          <Text style={styles.safetyGuideButtonText}>Pacific Northwest Safety Guide</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-star"
            size={42}
            color={Colors.darkTeal}
            onPress={() => navigation.navigate("Saves")}
          />
        </View>

        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-bookmark"
            size={42}
            color={Colors.darkTeal}
            onPress={() => navigation.navigate("Saves")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-time"
            size={42}
            color={Colors.darkTeal}
            onPress={() => navigation.navigate("Saves")}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-warning"
            size={42}
            color={Colors.darkTeal}
            onPress={() => navigation.navigate("Alerts")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-newspaper"
            size={42}
            color={Colors.darkTeal}
            onPress={() => navigation.navigate("News")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-calendar"
            size={42}
            color={Colors.darkTeal}
            onPress={() => navigation.navigate("Events")}
          />
        </View>
      </View>
    </SafeAreaView>

    //Old buttons to different screens
    /* 
        <Button
          title="Go to Park Screen"
          onPress={() => navigation.navigate("Park")}
        />
        <Button
          title="Go to Safety Guide Screen"
          onPress={() => navigation.navigate("SafetyGuide")}
        />
        
        <Button
          // Favorites, Bookmarks, Recents
          title="Go to Saves Screen"
          onPress={() => navigation.navigate("Saves")}
        />
        <Button
          title="Go to Alerts Screen"
          onPress={() => navigation.navigate("Alerts")}
        />
        <Button
          title="Go to News Screen"
          onPress={() => navigation.navigate("News")}
        />
        <Button
          title="Go to Events Screen"
          onPress={() => navigation.navigate("Events")}
        />*/
  );
};

export default HomeScreen;
