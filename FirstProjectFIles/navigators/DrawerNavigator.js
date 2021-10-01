import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ApiUserPage from '../components/ApiUserPage';
import UserProfilePage from '../components/UserProfilePage';
import ImageUploader from '../components/ImageUploader';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="upload">
      <Drawer.Screen name="upload" component={ImageUploader} />
      <Drawer.Screen name="Feeds" component={ApiUserPage} />
      <Drawer.Screen name="Profile" component={UserProfilePage} />
    </Drawer.Navigator>
  );
}
