import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'slideOne',
    title: "We've got all the ingredients",
    desc:
      'We are a one-stop technology-driven platform for all your legal needs from startups, established businesses and much more.',
    // image: require('../images/intro_one.png'),
    bg: '#59b2ab',
  },
  {
    key: 'slideTwo',
    title: 'Company registration in 10 mins!',
    desc:
      'Carol, our interactive chatbot will help you register your company going paperless on the fly.',
    // image: require('../images/intro_two.png'),
    bg: '#febe29',
  },
  {
    key: 'slideFour',
    title: 'Make payment in a jiffy',
    desc:
      'You are always a step away from buying a service and making payments.',
    // image: require('../images/intro_four.png'),
    bg: '#ff4444',
  },
  {
    key: 'slideFive',
    title: 'Through your journey',
    desc: 'We will be there throughout your journey handling your legalities.',
    // image: require('../images/intro_five.png'),
    bg: '#59b2ab',
  },
  {
    key: 'slideSix',
    title: 'E-Kaagaz™',
    desc:
      'Document Vault by Vakilsearch.com - Save and share instantly. Upto1GB of secure, free storage".',
    // image: require('../images/docvault.png'),
    bg: '#febe29',
  },
  {
    key: 'slideSeven',
    title: 'Expert Help',
    desc: 'NANI is here to answer your queries in real-time',
    // image: require('../images/nani_onboaridng.png'),
    bg: '#ff4444',
  },
];

export default function IntroductionScreen() {
  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.bg}]}>
        <Image style={styles.imageStyle} source={item.image} />
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.descStyle}>{item.desc}</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View>
        <Text>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View>
        <Text>Next</Text>
      </View>
    );
  };
  const onDone = () => {
    console.log('finished');
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, {backgroundColor: 'black'}]}
        // renderDoneButton={renderDoneButton}
        // renderNextButton={renderNextButton}
        // onDone={onDone}
        showPrevButton={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  slider: {
    overflow: 'hidden', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
    marginVertical: 20,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: 'grey',
  },
  inactiveDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    backgroundColor: '#cccccc',
  },
  imageStyle: {
    width: '90%',
    height: '45%',
    borderColor: 'black',
    borderWidth: 5,
    marginTop: 40,
    marginBottom: 40,
  },
  titleStyle: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginBottom: 12,
  },
  descStyle: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
  textButton: {
    color: '#202020',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingVertical: 9,
    backgroundColor: '#fff000',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#fff000',
  },
});
