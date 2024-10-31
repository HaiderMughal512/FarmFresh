import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../common/Custominput';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignUp} from '../api/User';
import {showMessage} from 'react-native-flash-message';
import {errorMessage, successMessage} from '../utils/Methods';

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [password, setpassword] = useState();
  const [confirmpass, setconfirmpass] = useState();
  const navigation = useNavigation();

  const handleSignUp = async () => {
    let res = await SignUp(email, password, phone, name, address);
    console.log('Sign Up Response', res);

    if (res === 'User registered successfully') {
      successMessage('Authentication', 'User Registered Successfully');
      navigation.navigate('Login');
    } else {
      errorMessage('Authentication', 'User Not Registered');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require('../images/logo.png')} style={styles.logo} />
          <Text style={styles.logintxt}>Create New Account</Text>
          <Custominput
            placeholder="Enter your Name"
            icon={require('../images/user.png')}
            onChangeText={setname}
          />
          <Custominput
            placeholder="Enter your Phone Number"
            icon={require('../images/telephone.png')}
            onChangeText={setphone}
          />
          <Custominput
            placeholder="Enter your Email id"
            icon={require('../images/mail.png')}
            onChangeText={setemail}
          />
          <Custominput
            placeholder="Enter your password"
            icon={require('../images/padlock.png')}
            type="password"
            onChangeText={setpassword}
          />
          <Custominput
            placeholder="Enter your Confirm Password"
            icon={require('../images/padlock.png')}
            type="password"
            onChangeText={setconfirmpass}
          />
          <TouchableOpacity
            style={{
              height: 50,
              width: '85%',
              backgroundColor: '#000',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 20,
              alignItems: 'center',
            }}
            onPress={handleSignUp}>
            <Text style={{color: 'white', paddingTop: 13}}>Signup</Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: '800',
              alignSelf: 'center',
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Already have Account?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 50,
  },
  logintxt: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: '#000',
  },
});
export default Signup;
