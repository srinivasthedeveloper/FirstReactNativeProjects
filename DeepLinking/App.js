import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import DeepStackNavigator from './DeepStackNavigator';
import linking from './Linking';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer linking={linking}>
        <DeepStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight - 100 : 0,
  },
});

export default App;
