import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';

export default function IntroductionSwiper() {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      horizontal={false}
      //   autoplay={true}
      //   loop={true}
    >
      <View style={{flex: 1, backgroundColor: 'gold'}}>
        <Text>Hello Swiper</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'dodgerblue'}}>
        <Text>Beautiful</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'violet'}}>
        <Text>And simple</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  slider: {
    overflow: 'hidden', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
    marginVertical: 20,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: '#000000',
  },
  inactiveDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    backgroundColor: '#cccccc',
  },
  imageStyle: {
    marginTop: 40,
    marginBottom: 40,
  },
  titleStyle: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginBottom: 12,
  },
  descStyle: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
  textButton: {
    color: '#202020',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingVertical: 9,
    backgroundColor: '#fff000',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#fff000',
  },
});
