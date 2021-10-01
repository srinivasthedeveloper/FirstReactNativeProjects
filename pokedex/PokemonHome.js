// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
// import Modal from 'react-native-modal';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import filter from 'lodash.filter';

// const WalkthroughableText = walkthroughable(Text);

export default function PokemonHome({navigation, start}) {
  // console.log(start);
  // const [istouched, setTouched] = useState('show');
  useEffect(() => {
    getApi();
    // getTouch();
  }, []);
  //   const pokemonApi = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  const [query, setQuery] = useState('');
  const [Data, setData] = useState({
    pokemons: [],
  });
  const [fullData, setFullData] = useState({pokemons: []});
  const handleSearch = text => {
    setQuery(text);
    if (text === '') {
      setData(fullData);
    } else {
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(fullData.pokemons, pokemons => {
        // console.log(Data, pokemons.name);
        return contains(pokemons, formattedQuery);
      });
      // console.log(filteredData);
      setData({pokemons: filteredData});
      // setQuery(text);
    }
  };
  const contains = ({name}, query) => {
    if (name.includes(query)) {
      // console.log(name);
      return true;
    }
    return false;
  };
  // async function getTouch() {
  //   const temp = await AsyncStorage.getItem('isTouched');
  //   // console.warn(temp);
  //   if (temp === null) {
  //     console.log(temp);
  //     await AsyncStorage.setItem('isTouched', 'hide');
  //     start();
  //   }
  // }
  const getApi = () => {
    if (query == '') {
      const len = Data.pokemons.length;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${len + 10}`)
        .then(function (response) {
          setData({
            pokemons:
              len === 0
                ? response.data.results
                : [...Data.pokemons, ...response.data.results],
          });
          setFullData({
            pokemons:
              len === 0
                ? response.data.results
                : [...Data.pokemons, ...response.data.results],
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      {/* <Modal isVisible={true} onPress={() => console.log('hai')}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.text}>I am the modal content!</Text>
        </View>
      </Modal> */}
      {/* <CopilotStep text="Click on them to view details!" order={1} name="hello">
        <WalkthroughableText style={[styles.text]} onPress={() => start()}>
          Pokemon
        </WalkthroughableText>
      </CopilotStep> */}
      {/* <Button title="click me" onPress={getApi} /> */}
      {/* {istouched != 'true' && (
        <TouchableOpacity
          onPress={handleTouch}
          // onPress={() => setTouched(true)}
          style={styles.overlay}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', paddingBottom: 25}}>
              Hello Bro
            </Text>
            <Text>Click on the list items to know their details</Text>
          </View>
        </TouchableOpacity>
      )} */}
      {/* ) : ( */}
      <TextInput
        onChangeText={e => handleSearch(e)}
        placeholderTextColor="black"
        placeholder="Find Pokemons 🐸"
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: 24,
          backgroundColor: '#eee',
          borderWidth: 2,
          borderRadius: 50,
          textAlign: 'center',
        }}
      />
      <FlatList
        data={Data.pokemons}
        renderItem={({item}) => (
          <View style={styles.flatListStyle}>
            <Text
              style={styles.text}
              onPress={() =>
                navigation.navigate('Details', {
                  url: item.url,
                })
              }>
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={item => item.name}
        onEndReached={getApi}
        onEndReachedThreshold={0.5}
      />
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(225, 225, 225, 0.8)',
    // opacity: 0.8,
  },
  container: {flex: 1, backgroundColor: '#222'},
  text: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#333',
    textAlign: 'center',
    padding: 10,
    margin: 0,
    marginVertical: 4,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
// export default copilot()(PokemonHome);
