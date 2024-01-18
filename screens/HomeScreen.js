import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/SearchBar.js";
import DiscountedFilter from "../components/DiscountedItemsFilter.js";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FFF9F5",
  },
  itemContainer: {
    flex: 1 / 2,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  itemInfo: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

const HomeScreen = ({ route, navigation }) => {
  const [products, setProducts] = useState(route.params.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [discounted, setDiscounted] = useState(false);

  useEffect(() => {
    setProducts(route.params.products);
  }, [route.params.products]);

  const renderProduct = ({ item }) => {
    const onPress = () => {
      navigation.navigate("Product", { products, productId: item.id });
    };

    return (
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Image
          source={item.image}
          style={styles.itemImage}
          resizeMode="cover"
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          {item.discounted ? (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "line-through",
                  marginRight: 5,
                }}
              >
                ${item.price}
              </Text>
              <Text
                style={{ fontSize: 12, color: "green", fontWeight: "bold" }}
              >
                ${(item.price * 0.8).toFixed(2)}
              </Text>
            </View>
          ) : (
            <Text style={{ fontSize: 12 }}>${item.price}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <DiscountedFilter discounted={discounted} setDiscounted={setDiscounted} />

      <FlatList
        data={
          discounted
            ? filteredProducts.filter((product) => product.discounted)
            : filteredProducts
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
