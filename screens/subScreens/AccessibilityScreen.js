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


const AccessibilityScreen = () => {
return (
    <View style={styles.container}>
      {/* App section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Accessibility</Text>
          <Text style={styles.body}>At the National Park Service (NPS), we are committed to providing an 
          inclusive and welcoming experience for all visitors, including those with disabilities. To further 
          this commitment, we have designed our NPS app with accessibility in mind, aiming to make it a valuable 
          resource for everyone, regardless of their abilities
</Text>
<Text style={styles.header4}>Our Commitment</Text>
          <Text style={styles.body}>We value feedback from our users and are committed to 
          continuously improving the accessibility of our app.
           If you encounter any challenges or have suggestions for enhancements related 
           to accessibility, please don't hesitate to contact us. Your input is crucial in helping us create a more 
           inclusive experience for all.
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
  },
  body: {
    ...Fonts.body,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default AccessibilityScreen;