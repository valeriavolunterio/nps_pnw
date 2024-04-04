// Import necessary components from react and react-native
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts";

import { useParkData } from "../../data_management/parksDataContext.js";

const { width } = Dimensions.get("window");

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "center",
    marginVertical: 20,
    //marginHorizontal: 15,
    paddingLeft: 17,
    paddingRight: 25,
    padding: 15,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 10,
    elevation: 5, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: width - 40,
  },
  horizontalRule: {
    borderBottomColor: Colors.lightGray, // Change color as needed
    borderBottomWidth: 1,
    width: width - 40, // Adjust width as needed
    marginLeft: 20,
  },
  parkTitle: {
    fontFamily: Fonts.header4.fontFamily,
    color: Colors.darkGray,
    marginLeft: 20,
    paddingTop: 25,
    fontSize: 16,
  },
  cardTitle: {
    fontFamily: Fonts.subheading.fontFamily,
    fontSize: 14,
    color: Colors.darkTeal,
    paddingBottom: 10,
  },
  cardAddress: {
    fontFamily: Fonts.subheading.fontFamily,
    flexDirection: "row",
    marginRight: 175,
    paddingBottom: 10,
  },
  cardPhone: {
    position: "absolute",
    alignSelf: "flex-end",
    marginLeft: 10,
    fontFamily: Fonts.subheading.fontFamily,
  },
  cardInformation: {
    paddingTop: 5,
  },
  openText: {
    fontFamily: Fonts.header3.fontFamily,
    fontSize: 16,
    color: Colors.darkGreen,
    marginLeft: 20,
    paddingTop: 15,
  },
  hourTitle: {
    fontFamily: Fonts.body.fontFamily,
    color: Colors.darkGray,
    marginLeft: 20,
    paddingTop: 15,
  },
  days: {
    marginLeft: 20,
    fontFamily: Fonts.body.fontFamily,
    color: Colors.darkGray,
  },
  hours: {
    fontFamily: Fonts.body.fontFamily,
    color: Colors.darkGray,
    marginRight: 25,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

// Define your new screen component
function ParkInformationScreen({ route, navigation }) {
  const { parkData } = useParkData([]);
  const { parkCode } = route.params;

  const selectedPark = parkData.find((park) => park.parkCode === parkCode);
  const operatingHours = selectedPark.operatingHours[0].standardHours;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayKeys = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  console.log(operatingHours);
  // Get today's day name
  const today = new Date().getDay(); // Sunday - 0, Monday - 1, etc.
  const todayKey = dayKeys[today - 1] || dayKeys[6]; // Adjust for Sunday being 0
  const openToday = operatingHours[todayKey];

  return (
    <ScrollView style={{ backgroundColor: Colors.offWhite }}>
      <View style={styles.container}>
        <Text style={styles.parkTitle}>{selectedPark.fullName}</Text>
        <View style={styles.horizontalRule} />
        <Text style={styles.openText}>Open Today: {openToday}</Text>
        <View>
          <Text style={styles.hourTitle}>Hours</Text>
          {days.map((day, index) => (
            <View key={index} style={styles.rowContainer}>
              <Text style={styles.days}>{day}</Text>
              <Text style={styles.hours}>{operatingHours[dayKeys[index]]}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.horizontalRule} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>
          Olympic National Park Visitor Center
        </Text>
        <View>
          <Text style={styles.cardAddress}>
            3002 Mount Angeles Road, Port Angeles, WA 98362
          </Text>
          <Text style={styles.cardPhone}>Phone:(360) 565-3130</Text>
        </View>
        <Text style={{ fontWeight: "bold" }}>
          Open 9 AM - 4 PM in fall and winter. Hours vary according to season.
        </Text>
        <Text style={styles.cardInformation}>
          Call visitors center for current hours.
        </Text>
      </View>
    </ScrollView>
  );
}

// Export your new screen component
export default ParkInformationScreen;
