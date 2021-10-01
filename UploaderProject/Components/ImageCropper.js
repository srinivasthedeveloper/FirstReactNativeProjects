import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Button, View} from 'react-native';

import {CropView} from 'react-native-image-crop-tools';

export default function ImageCropper({route, navigation}) {
  // console.log(route.params);
  const [image, setCroppedImage] = useState(route.params.uri);
  const cropViewRef = useRef();
  return (
    <View>
      <CropView
        sourceUrl={route.params.uri}
        style={{width: '100%', height: '80%', backgroundColor: 'black'}}
        ref={cropViewRef}
        onImageCrop={res => {
          console.log(res);
          setCroppedImage(res.uri);
          navigation.navigate('Preview', {
            image: res.uri,
          });
        }}
        keepAspectRatio
        aspectRatio={{width: route.params.width, height: route.params.height}}
      />
      <Button
        title="Crop Image"
        color="red"
        onPress={() => {
          cropViewRef.current.saveImage(true, 100);
        }}
      />
      <View>
        <Button
          title="Rotate Left"
          onPress={() => {
            cropViewRef.current.rotateImage(false);
          }}
        />
        <Button
          title="Rotate Right"
          onPress={() => {
            cropViewRef.current.rotateImage(true);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
