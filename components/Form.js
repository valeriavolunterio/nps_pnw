import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Button, CheckBox } from "@rneui/themed";
import { photoOptions } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  photoContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  photo: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    // marginTop: 5,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
  },
});

const Form = ({ handleFormSubmit, products }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    price: "",
    image: photoOptions[0],
    discounted: false,
  });

  const handleSubmit = () => {
    const newItem = {
      id: products.length + 1,
      ...formInput,
    };
    handleFormSubmit(newItem);
    setFormInput({
      name: "",
      description: "",
      price: "",
      image: photoOptions[0],
      discounted: false,
    });
  };

  const renderPhotoOption = ({ item }) => (
    <TouchableOpacity
      onPress={() => setFormInput({ ...formInput, image: item })}
      style={styles.photoContainer}
    >
      <Image source={item} style={styles.photo} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Select from Photos:</Text>
      <FlatList
        data={photoOptions}
        keyExtractor={(item) => item.toString()}
        renderItem={renderPhotoOption}
        numColumns={4}
      />
      <Image
        source={formInput.image}
        style={[styles.photo, { marginBottom: 15 }]}
      />
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFormInput({ ...formInput, name: text })}
        value={formInput.name}
        placeholder="Enter item name"
      />
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFormInput({ ...formInput, price: text })}
        value={formInput.price}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setFormInput({ ...formInput, description: text })
        }
        value={formInput.description}
        multiline={true}
        numberOfLines={6}
        placeholder="Enter description"
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox
          checked={formInput.discounted}
          onPress={() =>
            setFormInput({ ...formInput, discounted: !formInput.discounted })
          }
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={"checkbox-blank-outline"}
        />
        <Text style={styles.label}>Mark as Discounted - 20% off</Text>
      </View>
      <Button
        title="Create Listing"
        onPress={handleSubmit}
        buttonStyle={{
          borderRadius: 10,
          height: 60,
        }}
        titleStyle={{ fontWeight: "500", fontSize: 20 }}
        containerStyle={{
          maxWidth: "100%",
          marginTop: 15,
          marginBottom: 20,
        }}
        disabled={
          !formInput.name ||
          !formInput.description ||
          !/^\d+(\.\d{2})?$/.test(formInput.price)
        }
      />
    </SafeAreaView>
  );
};

export default Form;
