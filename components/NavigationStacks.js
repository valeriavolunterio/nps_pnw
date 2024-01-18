// AppStack.js
import { createStackNavigator } from "@react-navigation/stack";

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

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Park" component={ParkScreen} />
      <Stack.Screen name="SafetyGuide" component={SafetyGuideScreen} />
      <Stack.Screen name="Saves" component={SavesScreen} />
      <Stack.Screen name="Alerts" component={AlertsScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Park" component={ParkScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Park" component={ParkScreen} />
    </Stack.Navigator>
  );
};

const PassportStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Passport" component={PassportScreen} />
      <Stack.Screen name="PassportEdit" component={PassportEditScreen} />
    </Stack.Navigator>
  );
};

export { HomeStack, MapStack, SearchStack, PassportStack };
