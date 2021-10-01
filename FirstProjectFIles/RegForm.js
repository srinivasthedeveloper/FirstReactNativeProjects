import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

// const TextInputField = ({
//   message,
//   ispassword = false,
//   type,
//   isvalid = true,
// }) => {
//   return (
//     <TextInput
//       style={isvalid ? styles.textInput : [styles.textInput, styles.error]}
//       onChangeText={text => validate(text, type)}
//       placeholder={message}
//       secureTextEntry={ispassword}
//       underlineColorAndroid="#777"
//     />
//   );
// };
// function validate(text, type) {
//   if (type == 'username' && text == 'a') {
//     this.setState({isvalid: false});
//   }
// }
class RegForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dob: new Date(),
      number: '',
      email: '',
      password: '',
      type: '',
      isValidName: 2,
      isValidDate: 2,
      isValidNumber: 2,
      isValidEmail: 2,
      isValidPassword: 2,
      isDateTimePickerVisible: false,
    };
  }

  showDatePicker = () => {
    this.setState({isValidDate: 1});
    // console.log('show');
    this.setState({isDateTimePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isValidDate: 1});
    // console.log('hide');
    this.setState({isDateTimePickerVisible: false});
  };

  handleConfirm = dob => {
    // console.log('handle');
    this.setState({dob});
    this.setState({isValidDate: 1});
    this.setState({isDateTimePickerVisible: false});
  };

  validate(text, type) {
    const nameValidator = /^[a-zA-Z]{5,20}$/;
    const DOBValidator = /^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.]\d{4}$/;
    const phoneNumberValidator = /^[0]?[6789]\d{9}$/;
    const emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordValidator = /^[a-zA-Z0-9!@#$%^&*]{5,20}$/;
    if (type == 'username') {
      if (nameValidator.test(text)) {
        this.setState({isValidName: 1});
        this.setState({name: text});
      } else if (text == '') {
        this.setState({isValidName: 2});
      } else {
        this.setState({isValidName: 0});
      }
      // } else if (type == 'dob') {
      //   if (DOBValidator.test(text)) {
      //     this.setState({isValidDOB: 1});
      //   } else if (text == '') {
      //     this.setState({isValidDOB: 2});
      //   } else {
      //     this.setState({isValidDOB: 0});
      //   }
    } else if (type == 'phonenumber') {
      if (phoneNumberValidator.test(text)) {
        this.setState({number: text});
        this.setState({isValidNumber: 1});
      } else if (text == '') {
        this.setState({isValidNumber: 2});
      } else {
        this.setState({isValidNumber: 0});
      }
    } else if (type == 'email') {
      if (emailValidator.test(text)) {
        this.setState({email: text});
        this.setState({isValidEmail: 1});
      } else if (text == '') {
        this.setState({isValidEmail: 2});
      } else {
        this.setState({isValidEmail: 0});
      }
    } else if (type == 'password') {
      if (passwordValidator.test(text)) {
        this.setState({password: text});
        this.setState({isValidPassword: 1});
      } else if (text == '') {
        this.setState({isValidPassword: 2});
      } else {
        this.setState({isValidPassword: 0});
      }
    }
  }

  render() {
    return (
      <View style={styles.regForm}>
        <Text style={styles.header}>Register</Text>
        <View>
          {/*<TextInputField
            message="Enter Name:-"
            type="userName"
            isvalid={this.state.isvalid}
          />
          <TextInputField message="Enter DOB (01/01/1111):-" type="dob" />
          <TextInputField message="Enter PhoneNumber:-" type="phone" />
          <TextInputField message="Enter Email:-" type="email" />
          <TextInputField
            message="Enter Password:-"
            ispassword={true}
            type="password"
          />
          <TextInputField
            message="Conform Password:-"
            ispassword={true}
            type="conform"
          /> */}
          <TextInput
            style={
              this.state.isValidName == 2
                ? styles.textInput
                : this.state.isValidName == 0
                ? [styles.textInput, styles.error]
                : [styles.textInput, styles.success]
            }
            onChangeText={text => this.validate(text, 'username')}
            placeholder="Enter UserName:-"
            placeholderTextColor="white"
            secureTextEntry={false}
            underlineColorAndroid="transparent"
          />

          <View>
            <TextInput
              style={
                this.state.isValidDate == 2
                  ? styles.textInput
                  : [styles.textInput, styles.success]
              }
              onPressIn={this.showDatePicker}
              placeholder={this.state.dob.toLocaleDateString()}
              placeholderTextColor="white"
            />
            <DateTimePickerModal
              isVisible={this.state.isDateTimePickerVisible}
              mode="date"
              date={this.state.dob}
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              minimumDate={new Date().setFullYear(
                new Date().getFullYear() - 120,
              )}
              maximumDate={new Date().setFullYear(
                new Date().getFullYear() - 17,
              )}
            />
          </View>

          {/* <TextInput
            style={
              this.state.isValidDOB == 2
                ? styles.textInput
                : this.state.isValidDOB == 0
                ? [styles.textInput, styles.error]
                : [styles.textInput, styles.success]
            }
            onChangeText={text => this.validate(text, 'dob')}
            placeholder="Enter DOB (MM/DD/YYYY):-"
            secureTextEntry={false}
            underlineColorAndroid="transparent"
          /> */}
          <TextInput
            style={
              this.state.isValidNumber == 2
                ? styles.textInput
                : this.state.isValidNumber == 0
                ? [styles.textInput, styles.error]
                : [styles.textInput, styles.success]
            }
            onChangeText={text => this.validate(text, 'phonenumber')}
            placeholder="Enter Mobile Number:-"
            keyboardType="numeric"
            placeholderTextColor="white"
            secureTextEntry={false}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={
              this.state.isValidEmail == 2
                ? styles.textInput
                : this.state.isValidEmail == 0
                ? [styles.textInput, styles.error]
                : [styles.textInput, styles.success]
            }
            onChangeText={text => this.validate(text, 'email')}
            placeholder="Enter E-mail:-"
            placeholderTextColor="white"
            secureTextEntry={false}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={
              this.state.isValidPassword == 2
                ? styles.textInput
                : this.state.isValidPassword == 0
                ? [styles.textInput, styles.error]
                : [styles.textInput, styles.success]
            }
            onChangeText={text => this.validate(text, 'password')}
            placeholder="Enter Password:-"
            placeholderTextColor="white"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
          <View style={{paddingTop: '10%'}}>
            <Button
              title="SUBMIT"
              onPress={() =>
                Alert.alert(
                  'User Data:-',
                  'Name: ' +
                    this.state.name +
                    '\nDOB: ' +
                    this.state.dob.toLocaleDateString() +
                    '\nNumber: ' +
                    this.state.number.toString() +
                    '\nE-mail: ' +
                    this.state.email +
                    '\nPassword: ' +
                    this.state.password,
                )
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    borderColor: 'red',
  },
  success: {
    borderColor: 'green',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 150,
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textInput: {
    borderColor: '#0095ff',
    color: '#fff',
    borderWidth: 2,
    padding: 15,
    borderRadius: 500,
    borderTopWidth: 0,
  },
});

export default RegForm;
