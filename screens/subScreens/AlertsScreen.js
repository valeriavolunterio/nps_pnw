import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors.js";
import { useParkData } from "../../data_management/parksDataContext.js";

const styles = StyleSheet.create({
  container: {
    //marginLeft: 23,
    flex: 1,
    overflow: "hidden",
    backgroundColor: Colors.lightOffWhite,
  },
  card: {
    backgroundColor: Colors.offWhite,
    width: 350,
    alignSelf: "center",
    borderRadius: 8,
    padding: 15,
    marginBottom: 25,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  horizontalRule: {
    borderBottomColor: "black", // Change color as needed
    opacity: 0.2,
    borderBottomWidth: 1,
    marginVertical: 6,
    width: "100%", // Adjust width as needed
  },
  heading: {
    ...Fonts.header4,
    marginTop: 20,
    marginLeft: 23,
    color: "#616E73",
  },
  subHeading: {
    ...Fonts.subheading,
    marginRight: 55,
    marginLeft: 8,
    paddingBottom: 10,
  },
  body: {
    ...Fonts.body,
    alignItems: "center",
    marginLeft: 8,
    paddingBottom: 13,
    marginRight: 55,
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

  const AlertsList = ({ alerts }) => {
    let filteredAlerts = alerts;
    if (route.params.parkCode) {
      filteredAlerts = filteredAlerts.filter(
        (alert) => alert.parkCode === route.params.parkCode
      );
    }

    const handlePress = (url) => {
      if (url && url !== "") {
        // Check if the URL is not empty
        Linking.openURL(url).catch((error) =>
          console.error("Error opening link:", error)
        );
      } else {
        console.warn("No link available for this alert.");
      }
    };
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

    console.log(alertData);
    const renderAlertItem = ({ item }) => (
      <View style={styles.container}>
        <Pressable style={styles.card} onPress={() => handlePress(item.link)}>
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
        </Pressable>
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
