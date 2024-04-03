// Import necessary components from react and react-native
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts";

const hours = ["8:00 AM - 5:00 PM", "9:00 AM - 6:00 PM", "10:00 AM - 7:00 PM"];
const days = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
  " "
);

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
  hours: {
    fontFamily: Fonts.body.fontFamily,
    color: Colors.darkGray,
    marginLeft: 120, // Adjust the marginLeft value to align the hours with the days
    paddingTop: 5,
    position: "absolute",
    marginTop: 30,
    //alignSelf: "flex-start", // Align the hours to the left
  },
  days: {
    flexDirection: "row",
    marginLeft: 20,
  },
});

// Define your new screen component
function ParkInformationScreen({ route, navigation }) {
  return (
    <ScrollView style={{ backgroundColor: Colors.offWhite }}>
      <View style={styles.container}>
        <Text style={styles.parkTitle}>Olympic National Park</Text>
        <View style={styles.horizontalRule} />
        <Text style={styles.openText}>Open Today: 24 Hours</Text>
        <View>
          <Text style={styles.hourTitle}>Hours</Text>
          <View>
            {days.map((day, index) => (
              <Text style={styles.days} key={index}>
                {day}
              </Text>
            ))}
          </View>
          <View style={styles.hours}>
            {hours.map((hour, index) => (
              <Text key={index}> {hour}</Text>
            ))}
          </View>
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
