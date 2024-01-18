import "react-native-gesture-handler";
import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import SellItemScreen from "./screens/SellItemScreen.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// all images from unsplash.com
const defaultProducts = [
  {
    id: 1,
    name: "Handmade Crochet Poncho",
    description: "Lorem ipsum dolor sit amet",
    price: 39.99,
    image: require("./images/poncho.jpg"),
    discounted: true,
  },
  {
    id: 2,
    name: "Handmade Wooden Desk",
    description: "Consectetur adipiscing elit",
    price: 119.99,
    image: require("./images/wooden_desk.jpg"),
    discounted: false,
  },
  {
    id: 3,
    name: "Green Midcentury Arm Chair",
    description: "Sed do eiusmod tempor incididunt",
    price: 29.99,
    image: require("./images/green_chair.jpg"),
    discounted: false,
  },
  {
    id: 4,
    name: "Large Drafting Table or Desk",
    description: "Sed do eiusmod tempor incididunt",
    price: 99.99,
    image: require("./images/large_desk.jpg"),
    discounted: true,
  },
];

// all images from unsplash.com
export const photoOptions = [
  require("./images/shirt.jpg"),
  require("./images/camera.jpg"),
  require("./images/plant.jpg"),
  require("./images/tote.jpg"),
];

export default function App() {
  // // reset AsyncStorage
  // AsyncStorage.clear();

  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const asyncProduct = await AsyncStorage.getItem("products");
        if (asyncProduct != null) {
          setProducts(JSON.parse(asyncProduct));
        }
      } catch (err) {
        console.log("Error getting products from AsyncStorage:", err);
      }
    };
    getProducts();
  }, []);

  const saveProducts = async (updatedProducts) => {
    try {
      const asyncNewProducts = JSON.stringify(updatedProducts);
      await AsyncStorage.setItem("products", asyncNewProducts);
      setProducts(updatedProducts);
    } catch (err) {
      console.log("Error saving products to AsyncStorage:", err);
    }
  };

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Listings"
          component={HomeScreen}
          initialParams={{ products }}
        />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          initialParams={{ products }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Map"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
        >
          {() => (
            <SellItemScreen products={products} saveProducts={saveProducts} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
        >
          {() => (
            <SellItemScreen products={products} saveProducts={saveProducts} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Passport"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
        >
          {() => (
            <SellItemScreen products={products} saveProducts={saveProducts} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
