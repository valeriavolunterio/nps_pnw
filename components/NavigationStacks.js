import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Colors } from "../styles/Colors.js";
import { Fonts } from "../styles/Fonts.js";

import HomeScreen from "../screens/HomeScreen.js";
import MapScreen from "../screens/MapScreen.js";
import SearchScreen from "../screens/SearchScreen.js";
import PassportScreen from "../screens/PassportScreen.js";

import ParkInformationScreen from "../screens/subScreens/ParkInformationScreen.js";
import ParkScreen from "../screens/subScreens/ParkScreen.js";
import PlaceScreen from "../screens/subScreens/PlaceScreen.js";
import PlacesScreen from "../screens/subScreens/PlacesScreen.js";
import SafetyGuideScreen from "../screens/subScreens/SafetyGuideScreen.js";
import SavesScreen from "../screens/subScreens/SavesScreen.js";
import AlertsScreen from "../screens/subScreens/AlertsScreen.js";
import NewsScreen from "../screens/subScreens/NewsScreen.js";
import EventsScreen from "../screens/subScreens/EventsScreen.js";
import PassportEditScreen from "../screens/subScreens/PassportEditScreen.js";
import PassportSignUpScreen from "../screens/subScreens/PassportSignUpScreen.js";
import ScannerScreen from "../screens/subScreens/ScannerScreen.js";
import SettingsScreen from "../screens/subScreens/SettingsScreen.js";
import AboutNPSScreen from "../screens/subScreens/AboutNPSScreen.js";
import AboutThisAppScreen from "../screens/subScreens/AboutThisAppScreen.js";
import AccessibilityScreen from "../screens/subScreens/AccessibilityScreen.js";
import PrivacyPolicyScreen from "../screens/subScreens/PrivacyPolicyScreen.js";

import { SettingsButton } from "./SettingsButton.js";
import { BackButton } from "./BackButton.js";

const Stack = createStackNavigator();

const headerStyles = {
  title: "",
  headerStyle: {
    backgroundColor: Colors.offWhite,
  },
  headerTintColor: Colors.white,
  headerTitleAlign: "center",
  headerTitleStyle: {
    ...Fonts.header2,
  },
  headerLeft: () => <BackButton />,
  headerRight: () => <SettingsButton />,
};
const HomeStack = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...headerStyles,
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerLeft: () => null, headerTransparent: true }}
      />
      <Stack.Screen
        name="Park"
        component={ParkScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          title: "Places to See",
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Place"
        component={PlaceScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="SafetyGuide"
        component={SafetyGuideScreen}
        options={{
          title: "PNW Safety Guide",
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen
        name="ParkInformation"
        component={ParkInformationScreen}
        options={{
          title: "Park Information",
          headerStyle: {
            backgroundColor: Colors.green,
          },
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen
        name="Saves"
        component={SavesScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: Colors.lightTeal,
          },
        }}
      />
      <Stack.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          title: "Active Alerts",
          headerStyle: {
            backgroundColor: Colors.sepia,
          },
        }}
      />
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: "NPS: PNW News",
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          title: "Events in the Area",
          headerStyle: {
            backgroundColor: Colors.green,
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Accessibility"
        component={AccessibilityScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About NPS"
        component={AboutNPSScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About App"
        component={AboutThisAppScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
    </Stack.Navigator>
  );
};

const MapStack = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...headerStyles,
        headerStyle: {
          backgroundColor: Colors.green,
        },
      }}
    >
      <Stack.Screen
        name="MapStack"
        component={MapScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: Colors.green,
          },
        }}
      />
      <Stack.Screen
        name="Park"
        component={ParkScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Accessibility"
        component={AccessibilityScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About NPS"
        component={AboutNPSScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About App"
        component={AboutThisAppScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          title: "Places to See",
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Place"
        component={PlaceScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          title: "Active Alerts",
          headerStyle: {
            backgroundColor: Colors.sepia,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SearchStack = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...headerStyles,
      }}
    >
      <Stack.Screen
        name="SearchStack"
        component={SearchScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Park"
        component={ParkScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Place"
        component={PlaceScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          title: "Places to See",
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Accessibility"
        component={AccessibilityScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About NPS"
        component={AboutNPSScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About App"
        component={AboutThisAppScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          title: "Active Alerts",
          headerStyle: {
            backgroundColor: Colors.sepia,
          },
        }}
      />
      <Stack.Screen
        name="SafetyGuide"
        component={SafetyGuideScreen}
        options={{
          title: "PNW Safety Guide",
          headerStyle: {
            backgroundColor: Colors.baseTeal,
          },
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen
        name="ParkInformation"
        component={ParkInformationScreen}
        options={{
          title: "Park Information",
          headerStyle: {
            backgroundColor: Colors.green,
          },
          headerTintColor: Colors.white,
        }}
      />
    </Stack.Navigator>
  );
};

const PassportStack = () => {
  return (
    <Stack.Navigator screenOptions={headerStyles}>
      <Stack.Screen
        name="PassportStack"
        component={PassportScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen name="PassportEdit" component={PassportEditScreen} />
      <Stack.Screen name="PassportSignUp" component={PassportSignUpScreen} />
      <Stack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Accessibility"
        component={AccessibilityScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About NPS"
        component={AboutNPSScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
      <Stack.Screen
        name="About App"
        component={AboutThisAppScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack, MapStack, SearchStack, PassportStack };
