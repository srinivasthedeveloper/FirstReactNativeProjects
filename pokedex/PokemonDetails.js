import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

export default function PokemonDetails({url, hideTabView, showTabView}) {
  const moves = url;
  // console.log(moves);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moves</Text>
      <FlatList
        data={moves}
        renderItem={({item}) => (
          // <TouchableWithoutFeedback
          //   on={() => console.log('shit')}
          //   onPressOut={() => console.log('happens')}>
          <View style={{padding: 5}}>
            <Text style={styles.move}>{item.move.name}</Text>
          </View>
          // </TouchableWithoutFeedback>
        )}
        onScrollBeginDrag={hideTabView}
        onScrollEndDrag={showTabView}
        keyExtractor={item => item.move.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#222'},
  text: {
    textAlign: 'center',
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  move: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dodgerblue',
    backgroundColor: 'white',
  },
});
