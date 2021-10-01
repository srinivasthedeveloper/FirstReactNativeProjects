import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import GoogleSignInHome from './GoogleSignInHome';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GoogleSignInHome />
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
