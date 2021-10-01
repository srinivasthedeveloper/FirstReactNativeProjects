import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, View, PermissionsAndroid} from 'react-native';

import {launchCamera} from 'react-native-image-picker';

export default function ImageUploader({navigation}) {
  const permission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  };

  // useEffect(() => {
  //   permission();
  // }, []);

  useEffect(() => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
      response => {
        response ? '' : permission();
        console.log(response);
      },
    );
  }, []);
  const [image, SetImage] = useState('');
  const capturePhoto = (page, width, height) => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
        // maxWidth: width,
        // maxHeight: height,
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
        // SetImage(response.assets[0].uri);
        navigation.navigate(page, {
          width: width,
          height: height,
          uri: response.assets[0].uri,
        });
        // uploadImage();
      }
    });
  };

  return (
    <View>
      <Button
        title="Pancard"
        color="red"
        onPress={() => capturePhoto('Cropper', 16, 9)}
      />
      <Button title="Document" onPress={() => capturePhoto('Cropper', 9, 16)} />
    </View>
  );
}

const styles = StyleSheet.create({});
