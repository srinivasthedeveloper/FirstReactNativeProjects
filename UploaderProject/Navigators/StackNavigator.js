import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ImageUploader from '../Components/ImageUploader';
import ImageCropper from '../Components/ImageCropper';
import ImagePreview from '../Components/ImagePreview';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Upload">
      <Stack.Screen name="Uploader" component={ImageUploader} />
      <Stack.Screen name="Cropper" component={ImageCropper} />
      <Stack.Screen name="Preview" component={ImagePreview} />
    </Stack.Navigator>
  );
}
