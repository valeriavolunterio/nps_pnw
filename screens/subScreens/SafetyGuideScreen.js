import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable, SafeAreaView, View, Text } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { Fonts } from "../../styles/Fonts";

const styles = StyleSheet.create({
  bodyText: {
    ...Fonts.body,
  },
});

const SafetyGuideScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>SafetyGuideScreen</Text>
        <Text> Dial 911 for Emergencies </Text>
        <Text style={styles.bodyText}>
          Olympic is a wilderness park filled with natural wonders and potential
          hazards. Your safety is not guaranteed. Regulations are strictly
          enforced to protect you and the park's resources
        </Text>
      </View>
      <View>
        <Text>Tides and Your Safety</Text>
        <Text style={styles.bodyText}>
          Always carry a tide table, topographic map, and keep track of the time
          whenever hiking along Olympic's coast
        </Text>
        <Text style={styles.bodyText}>
          Several points along the coast are only passable at lower tides. Check
          the NOAA Tide Predictions to see if your chosen days are appropriate
          for coastal travel.
        </Text>
        <Text style={styles.bodyText}>
          Always carry a tide chart, available at visitor centers and coastal
          ranger stations, to time your hikes accordingly.
        </Text>
        <Text style={styles.bodyText}>
          When hiking the coast, you will need a topographic map that shows you
          the headlands that are only passable at lower tides. This map along
          with your tide table are essential to safely enjoying this rugged
          wilderness. Maps can be purchased ahead of time online here, at some
          local gear shops, or in person at select visitor centers
        </Text>
        <Pressable>
          <Text>Read More</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SafetyGuideScreen;
