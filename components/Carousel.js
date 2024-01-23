// CarouselComponent.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


function CarouselComponent() {
  const width = Dimensions.get('window').width;
  return (
      <View style={{ flex: 1 }}>
          <Carousel
              loop
              width={width}
              height={width / 2}
              autoPlay={true}
              data={[...new Array(6).keys()]}
              scrollAnimationDuration={1000}
              onSnapToItem={(index) => ('current index:', index)}
              renderItem={({ index }) => (
                  <View
                      style={{
                          flex: 1,
                          borderWidth: 1,
                          justifyContent: 'center',
                      }}
                  >
                      <Text style={{ textAlign: 'center', fontSize: 30 }}>
                          {index}
                      </Text>
                  </View>
              )}
          />
      </View>
  );
}

export default CarouselComponent;
