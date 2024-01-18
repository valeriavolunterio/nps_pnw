import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    marginBottom: 0,
  },
});

const SearchBar = ({ products, setFilteredProducts }) => {
  const [search, setSearch] = useState("");

  const handleChangeText = (text) => {
    setSearch(text);
    handleSearch(text);
  };

  const handleSearch = (search) => {
    if (search === "") {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search products"
      value={search}
      onChangeText={handleChangeText}
    />
  );
};

export default SearchBar;
