import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Screen2({navigation}) {
  return (
    <View>
      <Text>Screen 2</Text>
      <Button title="Screen2" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({});
