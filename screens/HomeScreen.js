import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Pressable,
} from "react-native";
import { Colors } from "../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
// import Shadow from 'react-native-shadow-2';
import { useFonts } from "expo-font";
import SwipeCarousel from "../components/Carousel.js";
import { TealButton } from "../components/TealButton.js";
import { Fonts } from "../styles/Fonts.js";
import { useParkData } from "../data_management/parksDataContext.js";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D8DA",
  },
  beigeBackground: {
    flex: 1,
    backgroundColor: "#FFF9F5",
    overflow: "hidden",
  },
  grayBackground: {
    flex: 1,
    backgroundColor: "#D3D8DA", // Gray color
  },
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  headerContainer: {
    padding: 10,
    alignSelf: "flex-start",
    marginTop: 90,
    ...Fonts.body,
  },
  subHeaderContainer: {
    paddingTop: 1,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  titleHeaderText: {
<<<<<<< Updated upstream
    color: Colors.black,
    fontSize: 22,
    fontFamily: "Stoke-Regular",
  },
  subHeaderText: {
    color: Colors.sepia,
    fontSize: 16,
    fontFamily: "OpenSans-SemiBold",
    fontWeight: "bold",
=======
    ...Fonts.header1
  },
  subHeaderText: {
    ...Fonts.subheading,
    color: Colors.sepia,
>>>>>>> Stashed changes
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
    color: Colors.white,
    fontSize: 16,
    fontFamily: "ButtonFont",
    textAlign: "center",
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
  triangleContainer: {
    alignItems: "center",
    borderRadius: 10,
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
  alertContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    paddingHorizontal: 30,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  alertHeaderText: {
    fontFamily: "MPLUS1-Regular",
    fontSize: 18,
    color: Colors.black,
    marginBottom: 20,
  },
  alertItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  alertTextContainer: {
    marginLeft: 10, // Add spacing between the warning icon and text
  },
  viewMoreButton: {
    alignSelf: "flex-end",
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.baseTeal,
    borderRadius: 5,
  },
  viewMoreButtonText: {
    color: Colors.white,
    ...Fonts.body,
  },
});

const HomeScreen = ({ navigation }) => {
  const { parkData, alertData, newsData, eventsData } = useParkData([]);

  useEffect(() => {
    // // clear park data AsyncStorage for testing
    // AsyncStorage.removeItem("recentParks");
    // AsyncStorage.removeItem("favoriteParks");
    // AsyncStorage.removeItem("bookmarkedParks");

    console.log("HomeScreen rendered");
  }, []);

  const [fontsLoaded] = useFonts({
    "Stoke-Regular": require("../assets/fonts/Stoke-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    ButtonFont: require("../assets/fonts/MPLUS1p-Bold.ttf"),
    "MPLUS1-Regular": require("../assets/fonts/MPLUS1-Regular.ttf"),
  });
  // for alerts icons
  const iconMapping = {
    "Park Closure": {
      name: "ios-remove-circle",
      color: Colors.red,
    },
    Information: {
      name: "ios-information-circle",
      color: Colors.blue,
    },
    Danger: {
      name: "ios-warning",
      color: Colors.darkRed,
    },
    Caution: {
      name: "ios-warning",
      color: Colors.yellow,
    },
  };

  const navigateToSaves = (screenName, headerColor) => {
    navigation.navigate("Saves", { screenName, headerColor });
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the parksData array and take the first 3 elements
  const shuffledParksData = shuffleArray(parkData);
  const carouselData = shuffledParksData.slice(0, 3).map((park) => ({
    title: park.fullName,
    img: park.images.length > 0 ? park.images[0].url : "default_image_url",
    parkCode: park.parkCode,
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.beigeBackground}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleHeaderText}>Pacific Northwest</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeaderText}>National Park Service</Text>
        </View>

        {/* Carousel Section */}
        <View>
          <SwipeCarousel data={carouselData} navigation={navigation} />
        </View>

        {/* PNW Safety Guide Button */}
        <View>
          {/* Use the safetyGuide button */}
          <TealButton.safetyGuide
            style={{ height: 500 }}
            onPress={() => navigation.navigate("SafetyGuide")}
          />
        </View>

        {/* Icon Grid Section */}
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="ios-star"
              size={42}
              color={Colors.darkTeal}
              onPress={() => navigateToSaves("Favorites", Colors.sepia)}
            />
          </View>

          <View style={styles.iconContainer}>
            <Ionicons
              name="ios-bookmark"
              size={42}
              color={Colors.darkTeal}
              onPress={() => navigateToSaves("Bookmarks", Colors.baseTeal)}
            />
          </View>
          <View style={styles.iconContainer}>
            <Ionicons
              name="ios-time"
              size={42}
              color={Colors.darkTeal}
              onPress={() => navigateToSaves("Recently Viewed", Colors.green)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="ios-warning"
              size={42}
              color={Colors.darkTeal}
              onPress={() =>
                navigation.navigate("Alerts", { parkFilter: null })
              }
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
      </View>
      <View style={styles.triangleContainer}>
        <Svg style={styles.svgTriangle} height={width / 5} width={width}>
          <Polygon
            points={`0,0 ${width},0 ${width / 2},${width / 6} 0,0`}
            fill="#FFF9F5" // Beige color
          />
        </Svg>
      </View>

      {/* PNW Active Alerts Section */}
      <View style={styles.grayBackground}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertHeaderText}>Active Alerts</Text>
          {alertData
            .slice(0, 3) // Limit to a maximum of 3 parks
            .map((alert) => {
              const park = parkData.find(
                (park) => park.parkCode === alert.parkCode
              );
              if (!park || typeof park.fullName !== "string") {
                // If park is undefined or park.fullName is not a string, skip rendering this alert
                console.error(
                  "Active Alert Park not found or fullName is not a string for parkCode:",
                  alert
                );
                return null;
              }
              return (
                <View key={alert.id} style={styles.alertItem}>
                  <Ionicons
                    name={iconMapping[alert.category].name}
                    size={24}
                    color={iconMapping[alert.category].color}
                  />
                  <View style={styles.alertTextContainer}>
                    {/* <Text style={Fonts.header4}>{park.fullName}</Text> */}
                    <Text style={Fonts.subheading}>{alert.title}</Text>
                    <Text style={[Fonts.body, { color: Colors.darkGray }]}>
                      {park.fullName}
                    </Text>
                  </View>
                </View>
              );
            })}
          <Pressable
            style={styles.viewMoreButton}
            onPress={() => navigation.navigate("Alerts", { parkFilter: null })}
          >
            <Text style={styles.viewMoreButtonText}>View More</Text>
          </Pressable>
        </View>

        {/* PNW News Section */}

        <View style={styles.alertContainer}>
          <Text style={styles.alertHeaderText}>Pacific Northwest News</Text>
          {newsData
            .slice(0, 3) // Limit to a maximum of 3 parks
            .map((article) => {
              const parkCodes = article.parkCode
                .split(",")
                .map((code) => code.trim());
              const park = parkData.find(
                (park) =>
                  park.parkCode === article.parkCode ||
                  parkCodes.includes(park.parkCode)
              );
              if (!park || !park.fullName) {
                // If park is undefined or park.fullName is undefined, skip rendering this alert
                console.error(
                  "News Park not found or missing fullName for parkCode:",
                  article.parkCode
                );
                return null;
              }
              return (
                <View key={article.id} style={styles.alertItem}>
                  <View style={styles.alertTextContainer}>
                    <Text style={Fonts.header4}>{article.title}</Text>
                    <Text style={[Fonts.body, { color: Colors.darkGray }]}>
                      {park.fullName}
                    </Text>
                  </View>
                </View>
              );
            })}
          <Pressable
            style={styles.viewMoreButton}
            onPress={() => navigation.navigate("News", { parkFilter: null })}
          >
            <Text style={styles.viewMoreButtonText}>View More</Text>
          </Pressable>
        </View>

        {/* PNW Events Section */}

        <View style={styles.alertContainer}>
          <Text style={styles.alertHeaderText}>Events in the Area</Text>
          {eventsData
            .slice(0, 3) // Limit to a maximum of 3 parks
            .map((event) => {
              const park = parkData.find(
                (park) => event.siteCode === park.siteCode
              );
              if (!park || !park.fullName) {
                // If park is undefined or park.fullName is undefined, skip rendering this alert
                console.error(
                  "Event Park not found or missing fullName for parkCode:",
                  event.siteCode
                );
                return null;
              }
              return (
                <View key={event.id} style={styles.alertItem}>
                  <View style={styles.alertTextContainer}>
                    {park && (
                      <Text style={[Fonts.body, { color: Colors.darkGray }]}>
                        {park.fullName}
                      </Text>
                    )}
                    <Text style={Fonts.subheading}>{event.title}</Text>
                    <Text
                      style={[
                        Fonts.button,
                        { color: Colors.green, paddingVertical: 5 },
                      ]}
                    >
                      {event.date}
                    </Text>
                    {event.times && (
                      <View>
                        {event.times.map((time, index) => (
                          <Text
                            key={index}
                            style={{
                              color: Colors.darkGray,
                              fontWeight: "bold",
                            }}
                          >
                            {time.timestart} - {time.timeend}
                          </Text>
                        ))}
                      </View>
                    )}
                  </View>
                </View>
              );
            })}
          <Pressable
            style={styles.viewMoreButton}
            onPress={() => navigation.navigate("Events", { parkFilter: null })}
          >
            <Text style={styles.viewMoreButtonText}>View More</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>

    //Go to Park button
    /* 
       
       */
  );
};

export default HomeScreen;
