import React from "react";
import { StyleSheet, SafeAreaView, Button, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapFilterComponent from "../components/MapFilter";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F5",
  },
  map: {
    flex: 1,
  },
});

const nationalParksData = [
  {
    id: 1,
    name: "Olympic National Park",
    coordinate: {
      latitude: 47.8021,
      longitude: -123.6044,
    },
  },
  // Add more national parks here...
];

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Park Screen"
        onPress={() => navigation.navigate("Park")}
      />
      <MapView style={styles.map}>
        {nationalParksData.map((park) => (
          <Marker
            key={park.id}
            coordinate={park.coordinate}
            title={park.name}
          >
            {/* Custom marker icon using Ionicons */}
            <Ionicons name="ios-pin" size={24} color="#B87044" />
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
