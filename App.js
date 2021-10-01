import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        You are looking at the default app js switch the app js file in index.js
        to see more
      </Text>
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
