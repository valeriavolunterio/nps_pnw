import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";

// Create a functional component for the settings screen
const SettingsScreen = () => {
  // Function to handle the deletion of Passport
  const handleDeletePassport = async () => {
    try {
      // Clear user data from AsyncStorage or any other storage mechanism
      await AsyncStorage.clear();

      // Redirect to the login or onboarding screen
      navigation.navigate('Login'); // Replace 'Login' with your actual login screen route
    } catch (error) {
      console.error('Error deleting Passport:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* App section */}
      <View style={styles.section}>
        <Text style={styles.heading}>App</Text>
        <TouchableOpacity onPress={() => console.log('Navigate to Audio Description and Tours')}>
          <Text style={styles.link}>Audio Description and Tours</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Other Accessibility Features')}>
          <Text style={styles.link}>Other Accessibility Features</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Privacy Policy')}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to About the NPS')}>
          <Text style={styles.link}>About the NPS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to About this App')}>
          <Text style={styles.link}>About this App</Text>
        </TouchableOpacity>
      </View>

      {/* Passport section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Passport</Text>
        <TouchableOpacity onPress={handleDeletePassport}>
          <Text style={styles.link}>Delete Passport</Text>
        </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 5,
  },
});

export default SettingsScreen;






/* const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};
export default SettingsScreen;*/
