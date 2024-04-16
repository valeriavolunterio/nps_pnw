import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors";

const AboutAppScreen = () => {
  return (
    <View style={styles.container}>
      {/* App section */}
      <View style={styles.section}>
        <Text style={styles.heading}>About This App</Text>
        <Text style={styles.body}>
          The National Park Service (NPS) Mobile App is the official app of the
          agency and provides trip planning content for visitors at a national
          and park level for all 400+ units.
        </Text>
        <Text style={styles.p2}>
          {"\n"}The Pacific Northwest (PNW) region covers 24 protected natural
          and cultural parks located in Washington, Oregon, and Idaho.
        </Text>
      </View>
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.offWhite,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    ...Fonts.header3,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
  },
  body: {
    ...Fonts.body,
  },
  p2: {
    marginTop: 10,
    ...Fonts.body,
  },
});

export default AboutAppScreen;
