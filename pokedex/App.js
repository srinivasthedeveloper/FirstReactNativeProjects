import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import PokemonStackNavigator from './navigator/PokemonStackNavigator';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const linkingData = {
    prefixes: ['pokedex://myapp'],
    config: {
      initialRouteName: 'Home',
      screens: {
        Home: 'home',
        Screen1: {
          path: 'screen1/:id',
          parse: {
            id: id => `${id}`,
          },
        },
        Screen2: {
          path: 'screen2/:id',
          parse: {
            id: id => `${id}`,
          },
        },
      },
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer linking={linkingData}>
        <PokemonStackNavigator />
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
