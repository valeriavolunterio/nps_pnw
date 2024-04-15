import "react-native-gesture-handler";
import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "./styles/Colors.js";

import { AppLoading } from "expo";
import { fetchParkData } from "./data_management/npsAPI_connections.js";
import { useFonts } from "expo-font";

import {
  HomeStack,
  MapStack,
  SearchStack,
  PassportStack,
} from "./components/NavigationStacks.js";
import LoadingScreen from "./screens/LoadingScreen.js";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { ParkDataProvider } from "./data_management/parksDataContext.js";
import { UserProvider } from "./data_management/UserContext.js";
import {
  RecentParksProvider,
  BookmarkedParksProvider,
  FavoriteParksProvider,
} from "./data_management/StorageContext.js";

const Tab = createBottomTabNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchParkData();

        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataLoaded(true);
      }
    };

    fetchData();
  }, []);

  const [fontsLoaded] = useFonts({
    "Stoke-Regular": require("./assets/fonts/Stoke-Regular.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "MPLUS1-Regular": require("./assets/fonts/MPLUS1-Regular.ttf"),
    "MPLUS1p-Bold": require("./assets/fonts/MPLUS1p-Bold.ttf"),
  });

  if (!fontsLoaded || !dataLoaded) {
    return <LoadingScreen />; // Return a loading indicator here if fonts or data are still loading
  }

  return (
    <ParkDataProvider>
      <UserProvider>
        <RecentParksProvider>
          <BookmarkedParksProvider>
            <FavoriteParksProvider>
              <NavigationContainer>
                <Tab.Navigator
                  screenOptions={{
                    tabBarHideOnKeyboard: true, // Hide tab bar when keyboard is displayed
                    tabBarStyle: {
                      backgroundColor: Colors.lightOffWhite,
                      height: 60,
                      borderTopWidth: 1, // Top border width
                      paddingBottom: 5, // Bottom padding
                      paddingTop: 5, // Top padding
                    },
                  }}
                  tabBarOptions={{
                    activeTintColor: Colors.darkTeal,
                    inactiveTintColor: Colors.baseGray,
                    labelStyle: {
                      fontSize: 12, // Font size of tab labels
                      fontFamily: "OpenSans-Regular", // Font family of tab labels
                    },
                  }}
                >
                  <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                          name="home"
                          color={color}
                          size={30}
                        />
                      ),
                      headerShown: false,
                    }}
                  />
                  <Tab.Screen
                    name="Map"
                    component={MapStack}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                          name="map"
                          color={color}
                          size={28}
                        />
                      ),
                      headerShown: false,
                    }}
                  />
                  <Tab.Screen
                    name="Search"
                    component={SearchStack}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                          name="magnify"
                          color={color}
                          size={32}
                        />
                      ),
                      headerShown: false,
                    }}
                  />
                  <Tab.Screen
                    name="Passport"
                    component={PassportStack}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                          name="smart-card"
                          color={color}
                          size={28}
                        />
                      ),
                      headerShown: false,
                    }}
                  />
                </Tab.Navigator>
              </NavigationContainer>
            </FavoriteParksProvider>
          </BookmarkedParksProvider>
        </RecentParksProvider>
      </UserProvider>
    </ParkDataProvider>
  );
}
