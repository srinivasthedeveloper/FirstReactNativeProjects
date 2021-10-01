import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
function FlatListComponent(props) {
  const [Data, setData] = useState({
    fields: [
      {
        name: 'name',
        email: 'email.com',
        image: 'https://picsum.photos/0',
        id: 0,
      },
    ],
  });
  const addFeed = () => {
    setData({
      fields: [
        ...Data.fields,
        {
          name: 'name',
          email: 'email.com',
          image: 'https://picsum.photos/' + Data.fields.length.toString(),
          id: Data.fields.length,
        },
      ],
    });
    console.log(Data.fields);
  };
  const uploadPhoto = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.assets};
        // console.log(response.assets[0].uri);
        setData({
          fields: [
            ...Data.fields,
            {
              name: 'Emma Watson',
              email: 'idontknow@gmail.com',
              image: response.assets[0].uri,
              id: Data.fields.length,
            },
          ],
        });
      }
    });
  };
  // const [Data, setData] = useState({
  //   isLoading: false,
  //   fields: [{name: {first: ''}, picture: {thumbnail: ''}}],
  //   page: 5,
  //   seed: 1,
  //   error: null,
  //   isRefreshing: false,
  // });

  // const makeRemoteRequest = () => {
  //   const url = 'https://randomuser.me/api/?seed=${1}&page=${1}&results=20';
  //   setData({loading: true});
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       setData({
  //         page: Data.page + 5,
  //         fields: res.results,
  //         //   fields: page === 1 ? res.results : [...Data.fields, ...res.results],
  //         error: res.error || null,
  //         isLoading: false,
  //         isRefreshing: false,
  //       });
  //     })
  //     .catch(error => {
  //       setData({error, loading: false});
  //     });
  //   // console.log(Data);
  // };

  // useEffect(() => console.log(Data));
  return (
    <View>
      <FlatList
        data={Data.fields}
        renderItem={({item}) => (
          <View style={styles.flatListStyle}>
            <Text style={{padding: 5, fontSize: 30, fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Text style={{padding: 5, fontSize: 15, fontStyle: 'italic'}}>
              {item.email}
            </Text>
            <Image
              style={{width: '100%', height: 350}}
              source={{
                uri: item.image,
              }}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text style={styles.loader} onPress={addFeed}>
          More Feed
        </Text>
        <Text style={styles.loader} onPress={uploadPhoto}>
          Upload Feed
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  flatListStyle: {
    padding: 5,
    backgroundColor: '#fff',
    width: '100%',
    height: 500,
    borderColor: '#222',
    borderWidth: 10,
  },
  loader: {
    color: 'white',
    bottom: 60,
    padding: 15,
    borderRadius: 50,
    backgroundColor: 'dodgerblue',
    alignSelf: 'center',
  },
});

export default FlatListComponent;
