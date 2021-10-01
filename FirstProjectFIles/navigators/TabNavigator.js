import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={StackNavigator} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;
