import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Linking,
  Dimensions,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../../data_management/firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";
import UserContext from "../../data_management/UserContext";

const { width } = Dimensions.get("window");

const AboutNPSScreen = () => {
  return (
    <View style={styles.container}>
      {/* App section */}
      <View style={styles.section}>
        <Text style={styles.heading}>About The NPS</Text>
        <Text style={styles.body}>
          The National Park Service preserves unimpaired the natural and
          cultural resources and values of the National Park System for the
          enjoyment, education, and inspiration of this and future generations.
          The Park Service cooperated with partners to extend the benefits of
          natural and cultural resource conservation and outdoor recreation
          throughout this country and the world.
        </Text>
        <Text style={styles.p2}>
          The National Park Service manages over 400 individual units covering
          more than 85 million acres in all 50 states, the District of Columbia,
          and US territories.
        </Text>

        <Text style={styles.header4}>Website</Text>
        <View style={styles.horizontalRule} />
        <Pressable
          onPress={() => Linking.openURL("https://www.nps.gov/index.htm")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.link}>Visit Us Here</Text>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>
        </Pressable>
        <View style={styles.horizontalRule} />

        <Text style={styles.header4}>Contact Us</Text>

        <View style={styles.horizontalRule} />
        <Pressable
          onPress={() =>
            Linking.openURL("https://www.nps.gov/aboutus/contactus.htm")
          }
        >
          <View style={styles.iconContainer}>
            <Text style={styles.link}>Contact Information</Text>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>
        </Pressable>
        <View style={styles.horizontalRule} />
        <Text style={styles.body2}>
          Contact us for questions or technical issues with the app.
        </Text>
      </View>
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.offWhite,
    flex: 1,
    padding: 20,
    padding: 15,
    borderRadius: 5,
    borderBottomColor: Colors.darkestGray,
    borderBottomWidth: 0.5,
  },
  section: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  heading: {
    ...Fonts.header3,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
  },
  header4: {
    ...Fonts.header4,
    marginTop: 20,
    color: Colors.darkGray,
  },
  body: {
    ...Fonts.body,
  },
  body2: {
    ...Fonts.body,
    marginTop: 10,
  },
  p2: {
    marginTop: 10,
    ...Fonts.body,
  },
  link: {
    ...Fonts.button,
  },
  horizontalRule: {
    borderBottomColor: Colors.lightGray, // Change color as needed
    borderBottomWidth: 1,
    width: width - 40, // Adjust width as needed
    marginTop: 10,
    marginBottom: 10, // Adjust margin as needed
  },
  icon: {
    fontSize: 20,
    color: Colors.darkGray,
    alignSelf: "flex-end",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
});

export default AboutNPSScreen;
