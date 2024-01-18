import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import Form from "../components/Form";

const SellItemScreen = ({ products, saveProducts }) => {
  const navigation = useNavigation();

  const handleFormSubmit = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);
    navigation.navigate("Listings"); // Navigate to HomeScreen
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Form handleFormSubmit={handleFormSubmit} products={products} />
    </ScrollView>
  );
};

export default SellItemScreen;
