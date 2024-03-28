import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Text,
  Pressable,
  Linking,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapFilterComponent from "../components/MapFilter";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../styles/Fonts";
import { Colors } from "../styles/Colors.js";
import { useParkData } from "../data_management/parksDataContext.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    width: 300,
    height: 250,
    backgroundColor: "#FFF9F5",
  },
  calloutTitle: {
    fontFamily: "Stoke-Regular",
    color: "#2C505E",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 15,
    
  },
  calloutText: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonsContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 23,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.6, 
    shadowRadius: 1, 
  },
  buttonText: {
    fontFamily: "OpenSans-Regular",
    color: Colors.darkestGray,
    fontSize: 12,
  },
});


const MapScreen = ({ navigation }) => {

  const { parkData } = useParkData([]);
  //console.log(parkData)
  
  const handleDirections = (park) => {
    const { latitude, longitude } = park.coordinate;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
    // Handle directions button press
  };

  const initialRegion = {
    latitude: 47.5,
    longitude: -117, 
    latitudeDelta: 20, 
    longitudeDelta: 20, 
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map}  initialRegion={initialRegion}>
        {parkData.map((park) => (
          <Marker key={park.fullName}  coordinate={{ latitude: park.latitude, longitude: park.longitude }}
          title={park.fullName}>
            {/* Custom marker icon using Ionicons */}
            <Ionicons name="ios-pin" size={24} color={Colors.blue} />
            <Callout style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>{park.fullName}</Text>
              <Text style={styles.calloutText}>{park.type}</Text>
              <Text style={styles.calloutText}>
                Amenities: {park.amenities}
              </Text>
              <Text style={styles.calloutText}>
                Experience: {park.experience}
              </Text>
              <View style={styles.buttonsContainer}>
              <Pressable
                  backgroundColor={Colors.white}
                  style={styles.button}
                  onPress={() => handleDirections(park)}
                >
                  <Text style={styles.buttonText} color={Colors.darkGreen}>
                    Directions
                  </Text>
                </Pressable>
                <Pressable style={styles.button}>
                  <Text onPress={() => navigation.navigate("Park")} style={styles.buttonText}>View Page</Text>
                </Pressable>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View>
        <MapFilterComponent />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
