import React from 'react';
import {StyleSheet, Button, View, Image} from 'react-native';
// import {Button} from 'react-native-elements/dist/buttons/Button';

export default function ImagePreview({route, navigation}) {
  console.log(route.params);
  return (
    <View>
      <Image
        source={{uri: route.params.image}}
        style={{width: '100%', height: undefined, aspectRatio: 1}}
        resizeMode="contain"
      />
      <Button title="Retake" />
      <Button title="Upload" />
    </View>
  );
}

const styles = StyleSheet.create({});
