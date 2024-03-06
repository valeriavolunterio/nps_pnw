import "react-native-gesture-handler";
import * as React from "react";
import { useState, useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppLoading } from "expo";
import {
  fetchParkData,
  fetchAlertData,
} from "./serverConnections/npsAPI_connections.js";
import { useFonts } from "expo-font";
import { Fonts } from "./styles/Fonts.js";

import {
  HomeStack,
  MapStack,
  SearchStack,
  PassportStack,
} from "./components/NavigationStacks.js";
import LoadingScreen from "./screens/LoadingScreen.js";

import { collection, onSnapshot } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";

import { db } from "./src/config/firebase.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import {
  ParkDataProvider,
  useParkDataContext,
} from "./serverConnections/parksDataContext.js";

const firebaseConfig = {
  apiKey: "AIzaSyABwX5Wog6cD-X1uy3zjy0m-GvRr9wrTsw",
  authDomain: "fb-database-4cc25.firebaseapp.com",
  projectId: "fb-database-4cc25",
  storageBucket: "fb-database-4cc25.appspot.com",
  messagingSenderId: "102511707539",
  appId: "1:102511707539:web:e27990139dd6008d4c5466",
  measurementId: "G-DKDSMPRDL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
const analytics = getAnalytics(app);

const Tab = createBottomTabNavigator();

export default function App() {
  const [parksData, setParksData] = useState([]);
  const [alertsData, setAlertsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parksResponse = await fetchParkData();
        const alertsResponse = await fetchAlertData();

        setParksData(parksResponse);
        setAlertsData(alertsResponse);

        const response = await fetch(
          `https://firestore.googleapis.com/v1/projects/fb-database-4cc25/databases/(default)/documents/users/`
        );
        const data = await response.JSON();
        console.log(data);

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
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            initialParams={{ parksData: parksData, alertsData: alertsData }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapStack}
            initialParams={{ parksData: parksData }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStack}
            initialParams={{ parksData: parksData }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={size}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Passport"
            component={PassportStack}
            initialParams={{ parksData: parksData }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="smart-card"
                  color={color}
                  size={size}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ParkDataProvider>
  );
}
