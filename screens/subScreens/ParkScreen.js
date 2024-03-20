import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import RoundedButton from "../../components/RoundedButton";
import { TealButton } from "../../components/TealButton";
import ToggleButton from "../../components/ToggleButtons";

import { useParkData } from "../../data_management/parksDataContext.js";
import {
  RecentParksContext,
  BookmarkedParksContext,
  FavoriteParksContext,
} from "../../data_management/StorageContext.js";

const { width } = Dimensions.get("window");

const ParkScreen = ({ route, navigation }) => {
  const { parkData, alertData } = useParkData([]);
  const { parkCode } = route.params;
  const selectedPark = parkData.find((park) => park.parkCode === parkCode);

  const { setRecentParks } = useContext(RecentParksContext);
  const { favoriteParks, setFavoriteParks } = useContext(FavoriteParksContext);
  const { bookmarkedParks, setBookmarkedParks } = useContext(
    BookmarkedParksContext
  );
  // Check if the park is bookmarked or favorited
  const isBookmarked = bookmarkedParks.includes(parkCode);
  const isFavorited = favoriteParks.includes(parkCode);

  useEffect(() => {
    setRecentParks((prevRecentParks) => {
      // Remove the parkCode if it already exists to add it as the most recent
      const updatedRecentParks = prevRecentParks.filter(
        (code) => code !== parkCode
      );
      // Add the parkCode to the beginning of the array to represent the most recent
      const newRecentParks = [parkCode, ...updatedRecentParks];

      // Limit the recentParks array to 5 parks
      const limitedRecentParks = newRecentParks.slice(0, 5);

      return limitedRecentParks;
    });
  }, [parkCode, setRecentParks]);

  return (
    <ScrollView style={styles.container}>
      {selectedPark && (
        <View style={styles.imageContainer}>
          {selectedPark.images.length > 0 ? (
            <Image
              source={{ uri: selectedPark.images[0].url }}
              style={styles.parkImage}
              resizeMode="cover"
              onError={(error) => console.log("Error loading image:", error)}
            />
          ) : (
            <Text style={{ color: "red" }}>Image not found</Text>
          )}
          <View style={styles.overlay}>
            <Text style={styles.title}>{selectedPark.fullName}</Text>
          </View>
        </View>
      )}

      <View style={styles.actionBtnContainer}>
        <View style={styles.actionBtns}>
          <View style={{ paddingHorizontal: 10 }}>
            <ToggleButton
              type="favorite"
              color={Colors.sepia}
              buttonSize={48}
              isToggled={isFavorited}
              onPress={() => {
                if (isFavorited) {
                  // Remove from favorites
                  const updatedFavorites = favoriteParks.filter(
                    (code) => code !== parkCode
                  );
                  setFavoriteParks(updatedFavorites);
                } else {
                  // Add to favorites
                  setFavoriteParks([...favoriteParks, parkCode]);
                }
              }}
            />
          </View>
          <View>
            <ToggleButton
              type="bookmark"
              color={Colors.baseTeal}
              buttonSize={48}
              isToggled={isBookmarked}
              onPress={() => {
                if (isBookmarked) {
                  // Remove from bookmarks
                  const updatedBookmarks = bookmarkedParks.filter(
                    (code) => code !== parkCode
                  );
                  setBookmarkedParks(updatedBookmarks);
                } else {
                  // Add to bookmarks
                  setBookmarkedParks([...bookmarkedParks, parkCode]);
                }
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <ToggleButton
              type="share"
              color={Colors.green}
              buttonSize={48}
              toggleState={false}
            />
          </View>
        </View>
      </View>
      <View style={styles.parkStatus}>
        <View style={styles.showInMapBtn}>
          <RoundedButton
            type="map"
            text="Show in Map"
            onPress={() => navigation.navigate("Map")}
          />
          <Text style={{ color: Colors.green, fontSize: 18 }}>Open Today:</Text>
          <Text style={{ color: Colors.black, fontSize: 18 }}>24 Hours</Text>
        </View>
        <View>
          <Text
            style={{
              color: Colors.darkGray,
              fontSize: 12,
              textAlign: "right",
              paddingRight: 20,
            }}
          >
            Entrance Pass Required
          </Text>
        </View>
      </View>

      {/* Park Events Section*/}

      <View style={styles.parkEvents}>
        <View style={styles.parkEventsDate}>
          <Text style={{ color: Colors.green, fontSize: 18 }}>MAR</Text>
          <Text style={{ color: Colors.green, fontSize: 18, paddingLeft: 5 }}>
            24
          </Text>
        </View>
        <View style={styles.parkEventsText}>
          <Text
            style={{ color: Colors.black, fontSize: 14, fontWeight: "bold" }}
          >
            Hurricane Ridge "It's Your Moon!" Telescope Program
          </Text>
          <Text style={{ color: Colors.black, fontSize: 14, paddingTop: 5 }}>
            7:30 PM - 8:30 PM
          </Text>
        </View>
      </View>

      <View style={styles.aboutPark}>
        <Text
          style={[Fonts.header3, { color: Colors.sepia, paddingBottom: 10 }]}
        >
          About This Park
        </Text>
        <Text>{selectedPark.description}</Text>
      </View>
      <TealButton.alerts
        onPress={() =>
          navigation.navigate("Alerts", { parkCode: selectedPark.parkCode })
        }
      />
      <TealButton.knowBefore
        onPress={() => navigation.navigate("SafetyGuide")}
      />
      <TealButton.places
        onPress={() =>
          navigation.navigate("Places", {
            parkCode: selectedPark.parkCode,
            parkName: selectedPark.fullName,
          })
        }
        title="Places to See"
      />
      <TealButton.parkInfo
        onPress={() => navigation.navigate("Park")}
        title="Park Information"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9F5",
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    zIndex: 99,
  },
  parkImage: {
    width: "100%",
    height: 250,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 25,
    width: "100%",
  },
  title: {
    fontFamily: "Stoke-Regular",
    color: "#fff", // Title text color
    textAlign: "left", // Align title text to the right
    fontSize: 22,
  },
  actionBtnContainer: {
    position: "absolute",
    top: 230,
    right: 10,
    zIndex: 99,
  },
  actionBtns: {
    zIndex: 99,
    flexDirection: "row",
  },
  parkStatus: {
    backgroundColor: "#FBF3EE",
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  parkEvents: {
    backgroundColor: "#FBF3EE",
    flexDirection: "row", // Change to row direction
    height: 100,
    width: width - 50,
    justifyContent: "space-between", // Distribute items along the main axis
    alignSelf: "center",
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    borderRadius: 10,
  },
  parkEventsDate: {
    paddingLeft: 20,
    alignItems: "center",
    marginVertical: 30,
    paddingRight: 30,
  },
  parkEventsText: {
    alignItems: "flex-start",
    marginVertical: 30,
    paddingRight: 90,
  },

  aboutPark: {
    backgroundColor: "#FBF3EE",
    height: 200,
    width: width - 50,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    borderRadius: 10,
    padding: 20,
  },
  aboutParkText: {
    fontFamily: "Body",
  },
  showInMapBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 35,
    width: "100%",
  },
});

export default ParkScreen;
