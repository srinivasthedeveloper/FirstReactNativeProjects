import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Image, Button} from 'react-native';

import Swiper from 'react-native-swiper';

export const IMAGE_WIDTH = Dimensions.get('window').width - 30;
export const IMAGE_HEIGHT = Dimensions.get('window').height - 250;

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Alert} from 'react-native';

export default function ImagePreviewSwiper() {
  const [slides, setSlides] = useState([
    {
      image: 'https://source.unsplash.com/random/200x200?sig=0',
    },
  ]);
  const uploadPhoto = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response.assets[0].uri);
        setSlides([
          ...slides,
          {
            image: response.assets[0].uri,
          },
        ]);
        // uploadImage();
      }
    });
  };
  const capturePhoto = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response.assets[0].uri);
        setSlides([
          ...slides,
          {
            image: response.assets[0].uri,
          },
        ]);
        // uploadImage();
      }
    });
  };
  const addImage = () => {
    setSlides([
      ...slides,
      {
        image: `https://source.unsplash.com/random/200x200?sig=${slides.length}`,
      },
    ]);
  };
  return (
    <View style={{flex: 1}}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        // horizontal={false}
        autoplay={true}
        loop={true}>
        {slides.map(item => {
          return (
            <View style={styles.slide}>
              <Image style={styles.imageStyle} source={{uri: item.image}} />
            </View>
          );
        })}
      </Swiper>
      <View
        style={{
          backgroundColor: '#ddd',
          paddingTop: 30,
          paddingBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Button title="Add Image" onPress={() => addImage()} />
        <Button
          title="Done"
          color="gold"
          onPress={() => Alert.alert('completed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  imageStyle: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 40,
  },
});
