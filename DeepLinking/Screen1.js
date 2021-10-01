import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Screen1({navigation}) {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button title="Screen2" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({});
