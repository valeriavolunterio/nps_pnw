import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
// import { styles } from "../../App";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: 23,
    flex: 1,
    overflow: "hidden",
  },
  label: {
    marginLeft: 10,
  },
  horizontalRule: {
    borderBottomColor: "black", // Change color as needed
    opacity: 0.2,
    borderBottomWidth: 1,
    marginVertical: 6,
    width: "100%", // Adjust width as needed
  },
  heading: {
    fontSize: 16,
    marginTop: 20,
    color: "#616E73",
    fontFamily: "OpenSans-SemiBold",
    fontWeight: 600,
  },
  subHeading: {
    marginRight: 55,
    marginLeft: 8,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "OpenSans-SemiBold",
  },
  body: {
    alignItems: "center",
    marginLeft: 8,
    paddingBottom: 13,
    marginRight: 55,
    fontSize: 12,
  },
  alertContainer: {
    flexDirection: "row",
    paddingBottom: 5,
    //flex: 1,
  },

  iconContainer: {
    //marginRight: 10,
    //flex: 1,
  },
  textContainer: {
    //flex: 1,
  },
});

const activeAlerts = [
  {
    id: 1,
    park: "Crater Lake",
    type: "Closure",
    heading: "Rim Drive and North Entrance Road are CLOSED for the season",
    body: "Rim Drive and North Entrance Road are closed for the season. They will gradually open again beginning sometime in June depending on snowpack and plowing operations. The road to Rim Village remains open except when there is heavy snow. Hwy 62 is open.",
  },
  {
    id: 2,
    park: "Crater Lake",
    type: "Info",
    heading: "Steel Visitor Center is Closed for Construction",
    body: "The visitor center at park headquarters is currently closed for a major rehabilitation project. Restrooms are available at Rim Village and Goodbye Picnic Area.",
  },
  {
    id: 3,
    park: "Olympic",
    type: "Danger",
    heading: "Trail Closures Due to Wildfires",
    body: "Elwha River, Hayden Pass, Dosewallips: Dose Meadows to Hayden Pass, North Fork Quinault: Elip Creek to Low Divide, Skyline: Elip Creek Trail junction to Low Divide, Martins Park",
  },
  {
    id: 4,
    park: "Olympic",
    type: "Closure",
    heading:
      "Hurricane Ridge Road closed for demolition and preparation for winter",
    body: "Beginning on October 16, demolition and removal of the remaining Hurricane Ridge Day Lodge debris begins. This critical step in the ongoing efforts to restore visitor services and ensure public safety will require a temporary closure of the area.",
  },
  {
    id: 5,
    park: "San Juan",
    type: "Danger",
    heading: "Burn Ban in Effect",
    body: "The superintendent has issued a ban on outdoor and recreational fires due atmospheric conditions that have resulted in an increased risk of wildfire. This ban will remain in effect until further notice.",
  },
  {
    id: 6,
    park: "San Juan",
    type: "Caution",
    heading: "Wildlife Viewing Guidelines",
    body: "San Juan Island National Historical Park provides habitat for many species of animals. When you visit the park, you are visiting their home. Do not approach any wildlife within 75 ft/23 m (two school bus lengths).",
  },
];

const AlertsScreen = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    "Stoke-Regular": require("../../assets/fonts/Stoke-Regular.ttf"),
    "OpenSans-SemiBold": require("../../assets/fonts/OpenSans-SemiBold.ttf"),
    ButtonFont: require("../../assets/fonts/MPLUS1p-Bold.ttf"),
    "MPLUS1-Regular": require("../../assets/fonts/MPLUS1-Regular.ttf"),
  });
  // Check if fonts are loaded before rendering the component
  if (!fontsLoaded) {
    return null; //return a loading indicator here
  }

  const AlertsList = ({ alerts }) => {
    const iconMapping = {
      Closure: { name: "ios-remove-circle", color: "rgba(186, 52, 48, 1)" },
      Info: { name: "ios-information-circle", color: "rgba(48, 80, 163, 1)" },
      Danger: { name: "ios-warning", color: "rgba(104, 26, 14, 1)" },
      Caution: { name: "ios-warning", color: "rgba(224, 137, 73, 1)" },
    };
    // Group alerts by park
    const alertsByPark = alerts.reduce((acc, alert) => {
      if (!acc[alert.park]) {
        acc[alert.park] = [];
      }
      acc[alert.park].push(alert);
      return acc;
    }, {});

    const renderAlertItem = ({ item }) => (
      <View styles={styles.container}>
        <View style={styles.alertContainer}>
          {/* display icon according to type */}
          <View style={styles.iconContainer}>
            <Ionicons
              name={iconMapping[item.type].name}
              size={30}
              color={iconMapping[item.type].color}
            />
          </View>
          {/*Text content on the right of icon */}
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>{item.heading}</Text>
            <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
              {item.body}
            </Text>
          </View>
        </View>
      </View>
    );

    const renderParkAlerts = ({ item: park }) => (
      <View>
        <Text style={styles.heading}>{park} National Park</Text>
        <View style={styles.horizontalRule} />
        <FlatList
          data={alertsByPark[park]}
          renderItem={renderAlertItem}
          keyExtractor={(alert) => alert.id.toString()}
        />
      </View>
    );

    return (
      <FlatList
        data={Object.keys(alertsByPark)}
        renderItem={renderParkAlerts}
        keyExtractor={(park) => park}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <AlertsList alerts={activeAlerts} />
    </SafeAreaView>
  );
};

export default AlertsScreen;
