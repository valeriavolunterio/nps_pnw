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
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors.js";
import { useParkData } from "../../data_management/parksDataContext.js";

const styles = StyleSheet.create({
  container: {
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
    fontWeight: "600",
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

const AlertsScreen = ({ route, navigation }) => {
  const { alertData, parkData } = useParkData([]);

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
    let filteredAlerts = alerts;
    if (route.params.parkCode) {
      filteredAlerts = filteredAlerts.filter(
        (alert) => alert.parkCode === route.params.parkCode
      );
    }

    const alertsByPark = Array.from(
      new Set(filteredAlerts.map((alert) => alert.parkCode))
    );

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

    const renderAlertItem = ({ item }) => (
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          {/* display icon according to type */}
          <View style={styles.iconContainer}>
            <Ionicons
              name={iconMapping[item.category].name}
              size={30}
              color={iconMapping[item.category].color}
            />
          </View>
          {/*Text content on the right of icon */}
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>{item.title}</Text>
            <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    );

    const renderParkAlerts = ({ item: parkCode }) => {
      const parkAlerts = alerts.filter((alert) => alert.parkCode === parkCode);
      const park = parkData.find((park) => park.parkCode === parkCode);

      return (
        <View>
          <Text style={styles.heading}>{park.fullName}</Text>
          <View style={styles.horizontalRule} />
          <FlatList
            data={parkAlerts}
            renderItem={renderAlertItem}
            keyExtractor={(alert) => alert.id.toString()}
          />
        </View>
      );
    };

    return (
      <FlatList
        data={alertsByPark}
        renderItem={renderParkAlerts}
        keyExtractor={(parkCode) => parkCode}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AlertsList
        alerts={alertData.map((alert) => ({
          ...alert,
          park: parkData.find((park) => park.parkCode === alert.parkCode),
        }))}
      />
    </SafeAreaView>
  );
};

export default AlertsScreen;
