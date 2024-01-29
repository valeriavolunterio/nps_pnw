import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

import Birding from "../../assets/SVG/birding";

const EventsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Birding />
    </SafeAreaView>
  );
};
export default EventsScreen;
