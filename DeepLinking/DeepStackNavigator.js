import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeScreen from './Home';
import NotificationsScreen from './Screen1';
import ProfileScreen from './Screen2';

export default function DeepStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
