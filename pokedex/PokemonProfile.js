import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

export default function PokemonProfile({image, name}) {
  // console.log(image);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#222'},
  image: {width: '100%', height: '80%'},
  text: {
    textAlign: 'center',
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
