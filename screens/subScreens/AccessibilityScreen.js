import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../../styles/Fonts";


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

export default AccessibilityScreen;