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
        headerStyle: {
          backgroundColor: Colors.offWhite,
        },
        headerTintColor: Colors.darkGray,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.darkGray}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ title: "" }}
      />
      <Stack.Screen name="Park" component={ParkScreen} />
      <Stack.Screen name="SafetyGuide" component={SafetyGuideScreen} />
      {/* add conditional for fave, bookmarked, or recently viewed */}
      <Stack.Screen name="Saves" component={SavesScreen} />
      <Stack.Screen name="Alerts" component={AlertsScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.darkGray}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="MapStack" component={MapScreen} />
      <Stack.Screen name="Park" component={ParkScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.darkGray}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="SearchStack" component={SearchScreen} />
      <Stack.Screen name="Park" component={ParkScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const PassportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.darkGray}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="PassportStack" component={PassportScreen} />
      <Stack.Screen name="PassportEdit" component={PassportEditScreen} />
    </Stack.Navigator>
  );
};

export { HomeStack, MapStack, SearchStack, PassportStack };
