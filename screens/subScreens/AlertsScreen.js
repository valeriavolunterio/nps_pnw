import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";
// import { styles } from "../../App";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    marginLeft: 10,
  },
  horizontalRule: {
    borderBottomColor: "black", // Change color as needed
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "100%", // Adjust width as needed
  },
});

const activeAlerts = [
  {
    id: 1,
    park: "Crater Lake",
    type: "Closure",
    heading: "Rim Drive and North Entrance Road are CLOSED for the season",
    body: "Rim Drive and North Entrance Road are closed for the season. They will gradually open again beginning sometime in June depending on snowpack and plowing operations. The road to Rim Village remains open except when there is heavy snow. Hwy 62 is open.",
  },
  {
    id: 2,
    park: "Crater Lake",
    type: "Info",
    heading: "Steel Visitor Center is Closed for Construction",
    body: "The visitor center at park headquarters is currently closed for a major rehabilitation project. Restrooms are available at Rim Village and Goodbye Picnic Area.",
  },
  {
    id: 3,
    park: "Olympic",
    type: "Danger",
    heading: "Trail Closures Due to Wildfires",
    body: "Elwha River, Hayden Pass, Dosewallips: Dose Meadows to Hayden Pass, North Fork Quinault: Elip Creek to Low Divide, Skyline: Elip Creek Trail junction to Low Divide, Martins Park",
  },
  {
    id: 4,
    park: "Olympic",
    type: "Closure",
    heading:
      "Hurricane Ridge Road closed for demolition and preparation for winter",
    body: "Beginning on October 16, demolition and removal of the remaining Hurricane Ridge Day Lodge debris begins. This critical step in the ongoing efforts to restore visitor services and ensure public safety will require a temporary closure of the area.",
  },
];

const AlertsList = ({ alerts }) => {
  // Group alerts by park
  const alertsByPark = alerts.reduce((acc, alert) => {
    if (!acc[alert.park]) {
      acc[alert.park] = [];
    }
    acc[alert.park].push(alert);
    return acc;
  }, {});

  const renderAlertItem = ({ item }) => (
    <View>
      {/* display icon according to type */}
      <Text>{item.heading}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">
        {item.body}
      </Text>
    </View>
  );

  const renderParkAlerts = ({ item: park }) => (
    <View>
      <Text>{park} National Park</Text>
      <View style={styles.horizontalRule} />
      <FlatList
        data={alertsByPark[park]}
        renderItem={renderAlertItem}
        keyExtractor={(alert) => alert.id.toString()}
      />
    </View>
  );

  return (
    <FlatList
      data={Object.keys(alertsByPark)}
      renderItem={renderParkAlerts}
      keyExtractor={(park) => park}
    />
  );
};

const AlertsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AlertsList alerts={activeAlerts} />
    </SafeAreaView>
  );
};
export default AlertsScreen;
