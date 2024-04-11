import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Text,
  Pressable,
  Linking,
  Platform,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapFilterComponent from "../components/MapFilter";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../styles/Fonts";
import { Colors } from "../styles/Colors.js";
import { useParkData } from "../data_management/parksDataContext.js";
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
    marginBottom: 10,
  },
  buttonsContainer: {
    marginTop: 15,
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
    ...Fonts.button,
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

const MapScreen = ({ navigation }) => {
  const { parkData: itemData } = useParkData([]);
  console.log(itemData);

  const handleDirections = (item) => {
    if (item && item.latitude && item.longitude) {
      const { latitude, longitude } = item;
      let url = "";
      if (Platform.OS === "android") {
        url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      } else if (Platform.OS === "ios") {
        url = `http://maps.apple.com/?daddr=${latitude},${longitude}`;
      }

      if (url !== "") {
        Linking.openURL(url);
      } else {
        console.log("Platform not supported for directions.");
      }
    } else {
      console.log("Invalid park data for directions.");
    }
    setScreenState("directionsClicked");
  };

  const getSVGIcon = (type, name) => {
    if (SVGIcons[type][name]) {
      const IconComponent = SVGIcons[type][name];
      return <IconComponent width={28} height={28} fill={Colors.darkTeal} />;
    }
    return <View></View>; // Return a default icon or handle the case when the amenity name doesn't match any icon
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
        {itemData.map((item) => (
          <Marker
            key={item.fullName}
            coordinate={{
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude),
            }}
            title={item.fullName}
            onCalloutPress={() =>
              navigation.navigate("Park", { parkCode: item.parkCode })
            }
          >
            <Ionicons name="ios-pin" size={24} color={Colors.blue} />
            <Callout style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>{item.fullName}</Text>
              <Text style={styles.calloutText}>{item.type}</Text>
              <Text style={styles.calloutText}>Activities:</Text>
              <Text style={styles.calloutTextItems}>
                {item.activities
                  .map((activity) => activity.name)
                  .slice(0, 3)
                  .join(", ")}
              </Text>
              <Text style={styles.calloutText}>Topics:</Text>
              <Text style={styles.calloutTextItems}>
                {item.topics
                  .map((topics) => topics.name)
                  .slice(0, 3)
                  .join(", ")}
              </Text>
              <View style={styles.buttonsContainer}>
                <Pressable
                  backgroundColor={Colors.white}
                  style={styles.button}
                  onPress={() => handleDirections(item)}
                >
                  <Text style={styles.buttonText} color={Colors.darkGreen}>
                    Directions
                  </Text>
                </Pressable>
                <View
                  style={styles.button}
                  // onPress={() =>
                  //   navigation.navigate("Park", { parkCode: item.parkCode })
                  // }
                >
                  <Text style={styles.buttonText}>View Park</Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View>{/* <MapFilterComponent /> */}</View>
    </SafeAreaView>
  );
};

export default MapScreen;
