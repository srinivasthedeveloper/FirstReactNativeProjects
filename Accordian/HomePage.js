import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

import axios from 'axios';

import AccordianComponent from './AccordianComponent';

export default function HomePage() {
  const incomeApiUrl = 'http://13.235.132.207:3000/get_measurables';
  const [fields, setFields] = useState([]);
  function getApi() {
    axios
      .get(incomeApiUrl)
      .then(function (response) {
        setFields(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={Object.entries(fields)}
        renderItem={({item}) => (
          <AccordianComponent title={item[1].title}>
            {Object.entries(item[1]).map(([key, value]) => (
              <>
                {key != 'data' && key != 'title' ? (
                  <Text>
                    {key} : ${value}
                  </Text>
                ) : key != 'title' ? (
                  <FlatList
                    data={Object.entries(value[0])}
                    renderItem={({item}) => (
                      <AccordianComponent title={item[0]}>
                        {Object.entries(item[1]).map(([key, value]) => (
                          <Text>
                            {key} : ${value}
                          </Text>
                        ))}
                      </AccordianComponent>
                    )}
                    keyExtractor={item => item.index}
                  />
                ) : null}
              </>
            ))}
          </AccordianComponent>
        )}
        keyExtractor={item => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
