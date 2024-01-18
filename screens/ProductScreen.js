import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
});

const ProductScreen = ({ route, navigation }) => {
   const { products, productId } = route.params;
 const product = products.find((item) => item.id === productId);

navigation.setOptions({
     title: product.name,
   });
   return (
     <View style={styles.container}>
       <View style={styles.imageContainer}>
         <Image source={product.image} style={styles.productImage} />
       </View>
       <View style={styles.infoContainer}>
         <Text style={styles.productName}>{product.name}</Text>
         {product.discounted ? (
           <View style={{ flexDirection: "row" }}>
             <Text
               style={{
                 fontSize: 18,
                 textDecorationLine: "line-through",
                 marginRight: 5,
               }}
             >
               ${product.price}
             </Text>
             <Text style={{ fontSize: 18, color: "green", fontWeight: "bold" }}>
               ${(product.price * 0.8).toFixed(2)}
             </Text>
           </View>
         ) : (
           <Text style={{ fontSize: 18 }}>${product.price}</Text>
         )}
         <Text style={styles.productDescription}>{product.description}</Text>
       </View>
     </View>
   );
 };
export default ProductScreen;
