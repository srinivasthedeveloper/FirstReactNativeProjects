import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function UserProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function getData() {
    setName(await AsyncStorage.getItem('UserName'));
    setEmail(await AsyncStorage.getItem('UserEmail'));
    setPassword(await AsyncStorage.getItem('UserPassword'));
    // console.log(name, email, password);
    // const userStr = await AsyncStorage.getItem('UserData');
    // JSON.parse(userStr, (key, value) => {
    //   console.log(typeof key);
    // });
    // console.log(user);
  }
  return (
    <View>
      <Text onPress={getData}>Hai bro</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
