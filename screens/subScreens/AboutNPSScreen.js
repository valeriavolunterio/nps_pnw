import React, { useState, useEffect, useContext } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
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
<Text style={styles.header4}>website</Text>
<Pressable onPress={() => navigation.navigate("https://www.nps.gov/index.htm")}>
<Text style={styles.link}>Visit Us Here</Text>
</Pressable>
<Text style={styles.header4}>Contact Us</Text>
<Pressable onPress={() => navigation.navigate("https://www.nps.gov/aboutus/contactus.htm")}>
<Text style={styles.link}>Contact Information</Text>
</Pressable>
<Text style={styles.header4}>Our Commitment</Text>
          <Text style={styles.body}>We value feedback from our users and are committed to 
          continuously improving the accessibility of our app.
           If you encounter any challenges or have suggestions for enhancements related 
           to accessibility, please don't hesitate to contact us. Your input is crucial in helping us create a more inclusive experience for all.
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
    ...Fonts.header3,
    marginBottom: 10,
    marginTop: 10,
  },
  header4: {
    ...Fonts.header4,
    marginBottom: 10,
    marginTop: 10,
  },
  body: {
    ...Fonts.body,
  },
  link: {
    ...Fonts.link,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default AboutNPSScreen;