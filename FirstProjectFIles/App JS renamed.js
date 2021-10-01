import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';

import StackNavigator from './navigators/StackNavigator';

import ApiUserPage from './components/ApiUserPage';
import ApiUserLogin from './components/ApiUserLogin';
// import FlatListComponent from './components/FlatListComponent';
// import RegForm from './components/RegForm';

// const Stack = createStackNavigator();
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <RegForm /> */}
        {/* <FlatListComponent /> */}
        {/* <Stack.Navigator initialRouteName="Login"> */}
        {/* <Stack.Screen name="Login" component={ApiUserLogin} />
          <Stack.Screen name="Feeds" component={ApiUserPage} /> */}
        {/* </Stack.Navigator> */}
        {/* <TabsNavigator /> */}
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
