import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Screen1"
        onPress={() => {
          navigation.navigate('Notifications');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
