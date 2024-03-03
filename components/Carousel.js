import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Dimensions, Image, Pressable } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 5,
  },
  item: {
    width: width - 40,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    marginHorizontal: 20, 
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)", 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    width: "100%",
  },
  miniTitle: {
    color: "#FFF",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    textAlign: "left",
    paddingBottom: 10, 
    paddingTop: 10,
  },
  title: {
    fontFamily: "Stoke-Regular",
    color: "#fff", // Title text color
    textAlign: "left", // Align title text to the right
    fontSize: 22,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#ccc",
  },
  activeDot: {
    backgroundColor: "#2C505E", // color of active dot
  },
});



const CarouselItem = ({ title, img, navigation }) => (
  <>
    <Pressable onPress={() => navigation.navigate("Park")}>
      <View style={[styles.item, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
        <Image source={{ uri: img }} style={{ width: "100%", height: "100%", borderRadius: 9 }} />
        <View style={styles.titleContainer}>
          <Text style={styles.miniTitle}>See something new</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Pressable>
  </>
);

const Dot = ({ active }) => (
  <View style={[styles.dot, active && styles.activeDot]} />
);

const SwipeCarousel = ({ data, navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const updateIndex = (event) => handleScroll(event);
    return () => {
      
    };
  }, [activeIndex]);

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((park, index) => (
          <CarouselItem key={index} title={park.title} img={park.img} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </View>
    </View>
  );
};

export default SwipeCarousel;



