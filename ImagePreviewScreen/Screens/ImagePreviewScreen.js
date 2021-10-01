import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import ImagePreviewSlider from '../components/ImagePreviewSliderComponent';

import PushNotification, {Importance} from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

export default function ImagePreviewScreen() {
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onMessage(async remoteMessage => {
      console.log('onMessage', remoteMessage);
      if (!remoteMessage) return;
      if (CURRENT_OS === 'ios') return handleIosInteraction(remoteMessage);
      return handleAndroidInteraction(remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );
        }
      });
  }, []);

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel-id', // (required) channelId,
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
      bigLargeIcon: 'ic_launcher',
      bigLargeIconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png',
    });
  };
  const [slides, setSlides] = useState([
    {
      image: 'https://source.unsplash.com/random/200x200?sig=0',
      key: 'https://source.unsplash.com/random/200x200?sig=0',
    },
  ]);
  const addImage = () => {
    setSlides([
      ...slides,
      {
        image: `https://source.unsplash.com/random/200x200?sig=${slides.length}`,
        key: `https://source.unsplash.com/random/200x200?sig=${slides.length}`,
      },
    ]);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.imageStyle} source={{uri: item.image}} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImagePreviewSlider
        renderScreen={renderItem}
        data={slides}
        timeDelay={6000}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          padding: 20,
          backgroundColor: '#ddd',
        }}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: '#ffffff',
              borderColor: '#007aff',
              borderWidth: 1,
            },
          ]}
          onPress={() => addImage()}>
          <Text style={{fontFamily: 'Roboto-Medium', color: '#007aff'}}>
            Add Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {backgroundColor: '#fff000', maxWidth: '50%', alignSelf: 'center'},
          ]}
          onPress={() => handleNotification()}>
          <Text style={{fontFamily: 'Roboto-Medium', color: '#000'}}>Done</Text>
        </TouchableOpacity>
      </View>
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
  imageStyle: {
    width: '100%',
    height: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 40,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    minWidth: 150,
    maxWidth: '50%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
