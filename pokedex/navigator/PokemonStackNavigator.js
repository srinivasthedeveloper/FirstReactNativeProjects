import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PokemonHome from '../PokemonHome';
import PokemonTab from '../PokemonTab';

const Stack = createStackNavigator();
export default function PokemonStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="PokemonHome">
      <Stack.Screen
        name="PokemonHome"
        component={PokemonHome}
        options={{
          title: 'Pokemons',
          headerTitleAlign: 'center',
          headerStyle: {
            // height: 10,
            backgroundColor: '#09f',
          },
        }}
      />
      <Stack.Screen name="Details" component={PokemonTab} />
    </Stack.Navigator>
  );
}
