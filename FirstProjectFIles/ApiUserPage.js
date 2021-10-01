import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import axios from 'axios';

function ApiUserPage({route, navigation}) {
  const [user, setUser] = useState({
    fields: [{email: '', name: {first: ''}, picture: {large: ''}}],
  });
  // const token = route.params.refreshToken;

  const getApi = () => {
    console.log(user.fields.length);
    const len = user.fields.length;
    axios
      .get(`https://randomuser.me/api/?seed=${len}&page=1&results=1`)
      .then(function (response) {
        console.log(response.data.results);
        setUser({
          fields:
            len === 0
              ? response.data.results
              : [...user.fields, ...response.data.results],
        });
        // console.log(user.fields);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <View>
      <FlatList
        data={user.fields}
        renderItem={({item}) => (
          <View
            style={{
              padding: 5,
              borderWidth: 2,
              borderColor: 'black',
            }}>
            <Text>{item.name.first}</Text>
            <Text>{item.email}</Text>
            {/* <Text>{item.picture.large}</Text> */}
            <Image
              style={{
                width: '100%',
                height: 350,
                borderWidth: 2,
                borderColor: 'black',
              }}
              source={{
                uri: item.picture.large,
              }}
            />
          </View>
        )}
        keyExtractor={item => item.email}
        onEndReached={getApi}
        onEndReachedThreshold={0.5}
      />
      {/* <Text onPress={getApi}>More Feed</Text> */}
    </View>
  );
}

export default ApiUserPage;
