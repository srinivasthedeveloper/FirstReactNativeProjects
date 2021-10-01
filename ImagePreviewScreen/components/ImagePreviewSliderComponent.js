import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function ImagePreviewSlider({
  renderScreen,
  data,
  timeDelay = 5000,
}) {
  const slider = useRef();
  let indx = 0;
  slider.current ? slider.current.goToSlide(data.length - 1) : null;
  useEffect(() => {
    const t = setInterval(() => autoPlay(), timeDelay);
    return () => {
      if (t) clearInterval(t);
    };
  }, [data]);
  const autoPlay = () => {
    indx++;
    if (indx == data.length) {
      indx = 0;
    }
    slider.current.goToSlide(indx);
  };
  return (
    <AppIntroSlider
      ref={slider}
      onSlideChange={e => (indx = e)}
      renderItem={renderScreen}
      data={data}
      dotStyle={styles.dotStyle}
      activeDotStyle={[styles.dotStyle, {backgroundColor: 'black'}]}
      showPrevButton={false}
      showNextButton={false}
      showDoneButton={false}
      keyExtractor={item => item.key}
    />
  );
}

const styles = StyleSheet.create({
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: 'grey',
  },
  inactiveDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    backgroundColor: '#cccccc',
  },
});
