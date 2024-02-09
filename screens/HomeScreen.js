import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  Dimensions,
  Pressable,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import { Colors } from "../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import SwipeCarousel from "../components/Carousel.js";
import { TealButton } from "../components/TealButton.js";
import { Fonts } from "../styles/Fonts.js";

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
  },
  subHeaderContainer: {
    paddingTop: 1,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  titleHeaderText: {
    color: Colors.black,
    fontSize: 22,
    fontFamily: "Stoke-Regular",
  },
  subHeaderText: {
    color: Colors.red,
    fontSize: 16,
    fontFamily: "OpenSans-SemiBold",
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
});

const HomeScreen = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    "Stoke-Regular": require("../assets/fonts/Stoke-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    ButtonFont: require("../assets/fonts/MPLUS1p-Bold.ttf"),
    "MPLUS1-Regular": require("../assets/fonts/MPLUS1-Regular.ttf"),
  });

  const navigateToSaves = (screenName, headerColor) => {
    navigation.navigate("Saves", { screenName, headerColor });
  };

  const [activeAlerts, setActiveAlerts] = useState([]); // State for active alerts

  const [parksAndAlerts, setParksAndAlerts] = useState([]);

  useEffect(() => {
    const fetchParksAndAlerts = async () => {
      const states = ["wa", "or", "id", "nv"]; // Add more states as needed
      const parksAndAlertsData = [];

      try {
        await Promise.all(
          states.map(async (state) => {
            const parksResponse = await fetch(
              `https://developer.nps.gov/api/v1/parks?stateCode=${state}`,
              {
                headers: {
                  "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
                },
              }
            );
            const parksData = await parksResponse.json();

            const alertsResponse = await fetch(
              `https://developer.nps.gov/api/v1/alerts?stateCode=${state}`,
              {
                headers: {
                  "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
                },
              }
            );
            const alertsData = await alertsResponse.json();

            parksData.data.slice(0, 3).forEach((park, index) => {
              if (index < 3) {
                const alert = alertsData.data.find(alert => alert.parkCode === park.parkCode);
                parksAndAlertsData.push({ park, alert });
              }
            });
          })
        );

        setParksAndAlerts(parksAndAlertsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchParksAndAlerts();
  }, []);

  const carouselData = [
    {
      miniTitle: "See Something New",
      title: "Olympic National Park",
      img: "https://www.nps.gov/npgallery/GetAsset/41e9450b-1dd8-b71b-0b41-ae6ab257056e/proxy/hires?",
    },

    { title: "Carousel Item 2" },
    { title: "Carousel Item 3" },
  ];


  if (!fontsLoaded) {
    return null;
  }


  
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
      </View>
      <View style={styles.triangleContainer}>
        <Svg style={styles.svgTriangle} height={width / 5} width={width}>
          <Polygon
            points={`0,0 ${width},0 ${width / 2},${width / 6} 0,0`}
            fill="#FFF9F5" // Beige color
          />
        </Svg>
      </View>

      <View style={styles.grayBackground}>
        {/* Active Alerts Section */}
        <View style={styles.alertContainer}>
  <Text style={styles.alertHeaderText}>Active Alerts</Text>
  {parksAndAlerts
    .filter(({ alert }) => alert) // Filter parks with active alerts
    .slice(0, 3) // Limit to a maximum of 3 parks
    .map(({ park, alert }) => (
      <View key={park.id} style={styles.alertItem}>
        {alert.description.toLowerCase().includes("close") ? (
          <Ionicons name="ios-warning" size={24} color={Colors.red} />
        ) : (
          <Ionicons name="ios-alert" size={24} color={Colors.yellow} />
        )}
        <View style={styles.alertTextContainer}>
          <Text style={Fonts.header4}>{park.fullName}</Text>
          {alert && <Text>{alert.title}</Text>}
        </View>
      </View>
    ))}
</View>


<View style={styles.alertContainer}>
  <Text style={styles.alertHeaderText}>Events</Text>
  {parksAndAlerts
    .filter(({ alert }) => alert) // Filter parks with active alerts
    .slice(0, 3) // Limit to a maximum of 3 parks
    .map(({ park, alert }) => (
      <View key={park.id} style={styles.alertItem}>
        {alert.description.toLowerCase().includes("close") ? (
          <Ionicons name="ios-warning" size={24} color={Colors.red} />
        ) : (
          <Ionicons name="ios-alert" size={24} color={Colors.yellow} />
        )}
        <View style={styles.alertTextContainer}>
          <Text style={Fonts.header4}>{park.fullName}</Text>
          {alert && <Text>{alert.title}</Text>}
        </View>
      </View>
    ))}
</View>





        {/* PNW News Section */}
        

        {/* PNW Events Section */}
        
      </View>
    </ScrollView>

    //Go to Park button
    /* 
       
       */
  );
};

export default HomeScreen;
