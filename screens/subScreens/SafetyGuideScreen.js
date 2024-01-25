import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

const SafetyGuideScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Text>SafetyGuideScreen</Text>
    <Text>  Dial 911 for Emergencies </Text>
    <Text>Olympic is a wilderness park filled with natural 
      wonders and potential hazards. Your safety is not guaranteed. 
      Regulations are strictly enforced to protect you and the park's resources</Text>
    </SafeAreaView>
  );
};
export default SafetyGuideScreen;
