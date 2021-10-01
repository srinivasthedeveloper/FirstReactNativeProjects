import React, {useState, useRef} from 'react';
import {StyleSheet, Button, View, Alert, Image} from 'react-native';

// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import ProgressBar from 'react-native-progress/Bar';
// import Progress from 'react-native-progress';
// import * as Progress from 'react-native-progress';
// import Image from 'react-native-image-progress';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {CropView} from 'react-native-image-crop-tools';

import axios from 'axios';

export default function ImageUploader() {
  const [croppedImage, setCroppedImage] = useState();
  const [image, SetImage] = useState(
    'file:///data/user/0/com.firstnativeproject/cache/rn_image_picker_lib_temp_b3c544c1-a684-45a4-8692-dbf04ff49ae0.jpg',
  );
  const [progress, setProgress] = useState(0);
  const cropViewRef = useRef();
  async function uploadImage() {
    try {
      var file = new FormData();
      file.append('image', {
        uri: image,
        name: 'userProfile.jpg',
        type: 'image/jpg',
      });
      const options = {
        onUploadProgress: progressEvent => {
          const {loaded, total} = progressEvent;
          const percent = Math.floor((loaded * 100) / total);

          if (percent != 100) {
            setProgress(percent / 100);
          } else {
            // console.log('uploaded');
            Alert.alert('uploaded', `${image} uploaded successfully`);
            setProgress(0);
          }
        },
      };
      const {data} = await axios.post(
        'https://nestjs-upload.herokuapp.com/',
        file,
        options,
      );
      // return data;
    } catch (error) {
      console.log(error.message);
    }
  }
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
        SetImage(response.assets[0].uri);
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
        SetImage(response.assets[0].uri);
        // uploadImage();
      }
    });
  };

  return (
    <View
      style={{justifyContent: 'center', flex: 1, width: '100%', padding: 10}}>
      {/* <Text style={{color: 'dodgerblue', alignSelf: 'center', fontSize: 30}}>
        {progress * 300}
      </Text> */}
      {/* <Image
        source={{uri: image}}
        // indicator={ProgressBar}
        style={{
          width: 320,
          height: 240,
        }}
      /> */}
      {/* <View style={{paddingBottom: 10}}> */}
      {/* <Progress.Bar style={{padding: 1}} progress={0.5} width={390} /> */}
      {/* </View> */}
      {/* <Progress.Pie progress={progress} size={50} /> */}
      {/* <Progress.Circle size={30} indeterminate={true} /> */}
      {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}
      <View style={{flexDirection: 'row'}}>
        <CropView
          sourceUrl={image}
          style={{width: 200, height: 270, backgroundColor: 'black'}}
          ref={cropViewRef}
          onImageCrop={res => setCroppedImage(res.uri)}
          keepAspectRatio
          aspectRatio={{width: 9, height: 16}}
        />
        <Image source={{uri: croppedImage}} style={{width: 200, height: 270}} />
      </View>
      <Button
        title="Crop Image"
        color="red"
        onPress={() => {
          cropViewRef.current.saveImage(true, 100);
        }}
      />
      <Button title="Upload Image" onPress={uploadPhoto} />
      <Button title="Capture Image" onPress={capturePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({});
