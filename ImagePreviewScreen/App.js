import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import PushNotification, {Importance} from 'react-native-push-notification';

import ImagePreviewScreen from './Screens/ImagePreviewScreen';

function App() {
  const createNotificationChannel = () => {
    PushNotification.createChannel({
      channelId: 'channel-id', // (required)
      channelName: 'myChannel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
    });
  };
  useEffect(() => {
    SplashScreen.hide();
    createNotificationChannel();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImagePreviewScreen />
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
