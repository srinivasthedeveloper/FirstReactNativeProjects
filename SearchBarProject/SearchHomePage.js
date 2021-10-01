import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import {FlatList} from 'react-native-gesture-handler';

import filter from 'lodash.filter';

export default function SearchHomePage() {
  const [query, setQuery] = useState('');
  const [Data, setData] = useState({
    pokemons: [],
  });
  const [fullData, setFullData] = useState({pokemons: []});

  const handleSearch = text => {
    setQuery(text);
    if (text == '') {
      setData(fullData);
    } else {
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(Data.pokemons, pokemons => {
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

  const getApi = () => {
    if (query == '') {
      const len = Data.pokemons.length;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${len + 10}`)
        .then(function (response) {
          // console.log(response.data.results);
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
      // console.log(Data.pokemons);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <View>
      <TextInput
        onChangeText={e => handleSearch(e)}
        placeholder="🔍Search Here"
        style={{
          backgroundColor: '#ddd',
          borderWidth: 2,
          borderRadius: 50,
          textAlign: 'center',
        }}
      />
      <FlatList
        data={Data.pokemons}
        renderItem={({item}) => (
          <View style={styles.flatListStyle}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
        onEndReached={getApi}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
