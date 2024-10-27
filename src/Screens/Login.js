import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Custominput from '../common/Custominput';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.logintxt}>Login</Text>
      <Custominput
        placeholder="Enter your Email id"
        icon={require('../images/mail.png')}
      />
      <Custominput
        placeholder="Enter your password"
        icon={require('../images/padlock.png')}
        type="password"
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
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', paddingTop: 13}}>Login</Text>
      </TouchableOpacity>
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
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', paddingTop: 13}}>Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: '85%',
          backgroundColor: '#000',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', paddingTop: 13}}>Farmer</Text>
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
          navigation.navigate('Signup');
        }}>
        Create a New Account?
      </Text>
    </View>
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

export default Login;
