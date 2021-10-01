import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, Animated, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import PokemonProfile from './PokemonProfile';
import PokemonDetails from './PokemonDetails';
// import PokemonHome from './PokemonHome';

import axios from 'axios';

// const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

export default function PokemonTab({route, navigation}) {
  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'home':
        return <PokemonProfile jumpTo={jumpTo} image={image} name={name} />;
      case 'details':
        return (
          <PokemonDetails
            jumpTo={jumpTo}
            url={url}
            hideTabView={hideView}
            showTabView={showView}
          />
        );
      // case 'more':
      //   return <PokemonHome jumpTo={jumpTo} />;
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  const hideView = () => {
    setAnimated(true);
    Animated.timing(topPosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false, // <-- neccessary
    }).start();
    setVisibility(false);
  };
  const showView = () => {
    setAnimated(true);
    setVisibility(true);
    Animated.timing(topPosition, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false, // <-- neccessary
    }).start();
  };
  const layout = useWindowDimensions();
  const [name, setName] = useState('pokemon');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [isAnimated, setAnimated] = useState(false);
  const topPosition = useRef(new Animated.Value(0)).current;
  // console.log(route.params);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: name},
    {key: 'details', title: 'Details'},
    // {key: 'more', title: 'more'},
  ]);
  async function getApi() {
    await axios
      .get(route.params.url)
      .then(async function (response) {
        await setUrl(response.data.moves);
        await setName(response.data.name);
        await setImage(response.data.sprites.front_default);
        // setUrl();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <TabView
      style={{backgroundColor: '#222'}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      tabBarPosition="top"
      keyboardDismissMode="on-drag"
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: 'white',
            height: '100%',
            borderRadius: 50,
          }}
          bounces={true}
          pressColor="gold"
          renderLabel={({route, focused, color}) => (
            <Text
              style={
                focused
                  ? {
                      color: 'gold',
                      fontSize: 20,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      padding: 4,
                    }
                  : {color: '#fff', fontSize: 20, padding: 4}
              }>
              {route.title}
            </Text>
          )}
          style={[
            visibility
              ? {
                  // position: 'static',
                  // height: 0,
                  // padding: 5,
                  margin: 10,
                  backgroundColor: 'tomato',
                  borderRadius: 50,
                }
              : {height: 0, padding: 0, margin: 0},
            isAnimated ? {opacity: topPosition} : {opacity: 1},
          ]}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
