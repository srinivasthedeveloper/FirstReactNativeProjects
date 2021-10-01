import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function AccordianComponent({title, children}) {
  const toggleView = () => {
    setVisibility(!isVisible);
    icon == '+' ? setIcon('-') : setIcon('+');
  };
  const [isVisible, setVisibility] = useState(false);
  const [icon, setIcon] = useState('+');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleView} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{icon}</Text>
      </TouchableOpacity>
      <View
        style={
          isVisible ? styles.visible : {display: 'none', height: 0, width: 0}
        }>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderWidth: 3,
    borderColor: '#ddd',
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'grey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  visible: {
    padding: 10,
    paddingTop: 0,
  },
});
