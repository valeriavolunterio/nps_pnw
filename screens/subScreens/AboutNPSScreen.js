import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../../styles/Fonts";


const AboutNPSScreen = () => {
return (
    <View style={styles.container}>
      {/* App section */}
      <View style={styles.section}>
        <Text style={styles.heading}>About The NPS</Text>
          <Text style={styles.body}>The National Park Service preserves unimpaired the natural and cultural 
          resources and values of the National Park System for the enjoyment, education, and inspiration of this 
          and future generations. The Park Service cooperated with partners to extend the benefits of natural 
          and cultural resource conservation and outdoor recreation throughout this country and the world.
          The National Park Service manages over 400 individual units covering more than 85 million acres in all 50 
          states, the District of Columbia, and US territories.
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
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    ...Fonts.header4,
  },
  body: {
    ...Fonts.body,
  },
});

export default AboutNPSScreen;