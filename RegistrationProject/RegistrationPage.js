import React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
export default function RegistrationPage() {
  return (
    <View>
      <Text>Registration form</Text>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
