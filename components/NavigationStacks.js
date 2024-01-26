// AppStack.js
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../styles/Colors.js";

import HomeScreen from "../screens/HomeScreen.js";
import MapScreen from "../screens/MapScreen.js";
import SearchScreen from "../screens/SearchScreen.js";
import PassportScreen from "../screens/PassportScreen.js";

import ParkScreen from "../screens/subScreens/ParkScreen.js";
import SafetyGuideScreen from "../screens/subScreens/SafetyGuideScreen.js";
import SavesScreen from "../screens/subScreens/SavesScreen.js";
import AlertsScreen from "../screens/subScreens/AlertsScreen.js";
import NewsScreen from "../screens/subScreens/NewsScreen.js";
import EventsScreen from "../screens/subScreens/EventsScreen";
import PassportEditScreen from "../screens/subScreens/PassportEditScreen";
import SettingsScreen from "../screens/subScreens/SettingsScreen.js";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        title: "",
        headerStyle: {
          backgroundColor: Colors.offWhite,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          //settings button (add black circle background>)
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="ellipsis-vertical" size={24} color={Colors.white} />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Settings")}>
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={Colors.darkestGray}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Park"
        component={ParkScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.lightTeal,
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
      {/* add conditional for fave, bookmarked, or recently viewed bg color*/}
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
          headerStyle: {
            backgroundColor: Colors.darkestGray,
          },
          headerRight: "",
        }}
      />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        title: "",
        headerStyle: {
          backgroundColor: Colors.offWhite,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="ellipsis-vertical" size={24} color={Colors.white} />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen
        name="MapStack"
        component={MapScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.green,
          },
        }}
      />
      <Stack.Screen
        name="Park"
        component={ParkScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.green,
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
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        title: "",
        headerStyle: {
          backgroundColor: Colors.darkTeal,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="ellipsis-vertical" size={24} color={Colors.white} />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="SearchStack" component={SearchScreen} />
      <Stack.Screen
        name="Park"
        component={ParkScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.lightTeal,
          },
          headerRight: "",
        }}
      />
      {/* <Stack.Screen name="Place" component={PlaceScreen} /> */}
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
    </Stack.Navigator>
  );
};

const PassportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        title: "",
        headerStyle: {
          backgroundColor: Colors.offWhite,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.darkestGray}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="PassportStack" component={PassportScreen} />
      <Stack.Screen name="PassportEdit" component={PassportEditScreen} />
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
    </Stack.Navigator>
  );
};

export { HomeStack, MapStack, SearchStack, PassportStack };
