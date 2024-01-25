import "react-native-gesture-handler";
import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SearchScreen from "./screens/SearchScreen.js";
import PassportScreen from "./screens/PassportScreen.js";

import {
  HomeStack,
  MapStack,
  SearchStack,
  PassportStack,
} from "./components/NavigationStacks.js";

const Tab = createBottomTabNavigator();

// all images from unsplash.com
const defaultProducts = [
  {
    id: 1,
    name: "Olympic National Park",
    description: "Lorem ipsum dolor sit amet",
  },
];

export default function App() {
  // // reset AsyncStorage
  // AsyncStorage.clear();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          initialParams={{}}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MapStack"
          component={MapStack}
          initialParams={{}}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          initialParams={{}}
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
          name="PassportStack"
          component={PassportStack}
          initialParams={{}}
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
  );
}
