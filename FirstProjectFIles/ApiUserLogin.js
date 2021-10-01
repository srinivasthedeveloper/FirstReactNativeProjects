import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, Text, View, Alert} from 'react-native';
// import axios from 'axios';

export default function ApiUserLogin({navigation}) {
  const [user, setUser] = useState({name: '', email: '', password: ''});
  async function storeData() {
    if (
      user.name.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      try {
        await AsyncStorage.setItem('UserName', user.name);
        await AsyncStorage.setItem('UserEmail', user.email);
        await AsyncStorage.setItem('UserPassword', user.password);
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        // const d = await AsyncStorage.getItem('UserData');
        // console.log(JSON.parse(d));
        navigation.navigate('Drawer');
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('invalid input', 'Enter valid input on every fields');
    }
  }
  // const postApi = () => {
  //   axios
  //     .post('http://68.183.48.101:3333/users/register', {
  //       username: user.name,
  //       email: user.email,
  //       password: user.password,
  //     })
  //     .then(function (response) {
  //       // console.log(response.data.data.token.token);
  //       navigation.navigate('Drawer', response.data.data.token);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
  // };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          onChangeText={e =>
            setUser({name: e, email: user.email, password: user.password})
          }
          style={styles.inputs}
          placeholder="   Enter UserName"
        />
        <TextInput
          onChangeText={e =>
            setUser({name: user.name, email: e, password: user.password})
          }
          style={styles.inputs}
          placeholder="   Enter Email"
        />
        <TextInput
          onChangeText={e =>
            setUser({name: user.name, email: user.email, password: e})
          }
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="   Enter Password"
        />
        <View style={{paddingTop: 25}}>
          <Button title="Submit" onPress={storeData} />
          {/* <Button title="Submit" onPress={postApi} /> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: '30%',
  },
  inputs: {
    borderColor: 'dodgerblue',
    padding: 4,
    marginTop: 15,
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 50,
  },
});
