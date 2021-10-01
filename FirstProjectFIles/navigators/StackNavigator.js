import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ApiUserLogin from '../components/ApiUserLogin';
import DrawerNavigator from './DrawerNavigator';
const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: 'MY APP',
          headerStyle: {
            // height: 10,
            backgroundColor: '#09f',
          },
        }}
      />
      <Stack.Screen name="Login" component={ApiUserLogin} />
      {/* <Stack.Screen name="Messages" component={Messages} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
}
