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
import { useNavigation } from "@react-navigation/native";
import { SVGIcons } from "../components/SVGIcons.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    width: 330,
    height: 300,
    padding: 10,
    backgroundColor: "#FFF9F5",
  },
  calloutTitle: {
    fontFamily: "Stoke-Regular",
    color: "#2C505E",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
  calloutText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    marginBottom: 5,
    color: Colors.baseTeal,
  },
  calloutTextItems: {
    fontSize: 14,
    color: Colors.darkTeal,
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
  gridItem: {
    width: "16%", 
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

const MapScreen = () => {
  const { parkData } = useParkData([]);
  const navigation = useNavigation();
  console.log(parkData);

  

  const handleDirections = (park) => {
    const { latitude, longitude } = park.coordinate;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
    // Handle directions button press
  };

  const getSVGIcon = (type, name) => {
    if (SVGIcons[type][name]) {
      const IconComponent = SVGIcons[type][name];
      return <IconComponent width={28} height={28} fill={Colors.darkTeal} />;
    }
    // Return a default icon or handle the case when the amenity name doesn't match any icon
    return <View></View>;
  };

  const initialRegion = {
    latitude: 47.5,
    longitude: -117,
    latitudeDelta: 20,
    longitudeDelta: 20,
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {parkData.map((park) => (
          <Marker
            key={park.fullName}
            coordinate={{
              latitude: parseFloat(park.latitude), // Convert string to float
              longitude: parseFloat(park.longitude),
            }}
            title={park.fullName}
          >
            {/* Custom marker icon using Ionicons */}
            <Ionicons name="ios-pin" size={24} color={Colors.blue} />
            <Callout style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>{park.fullName}</Text>
              <Text style={styles.calloutText}>{park.type}</Text>
              <Text style={styles.calloutText}>Amenities:</Text>
              <Text style={styles.calloutTextItems}>
              {park.activities.map((activity, index) => (
                <View key={index} style={styles.gridItem}>
                  {getSVGIcon("amenities", activity)}
                  <Text />
                </View>
              ))}
              </Text>
              <Text style={styles.calloutText}>Experiences:</Text>
              <Text style={styles.calloutTextItems}>
              {park.topics.map((experience, index) => (
                <View key={index} style={styles.gridItem}>
                  {getSVGIcon("experiences", experience)}
                  <Text />
                </View>
              ))}
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
                <Pressable
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("Park", { parkCode: park.parkCode })
                  }
                >
                  <Text style={styles.buttonText}>View Park</Text>
                </Pressable>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View>
        {/* <MapFilterComponent /> */}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
