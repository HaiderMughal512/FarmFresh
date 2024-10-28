import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Custominput from '../../common/Custominput';
import styles from './styles';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View>
          {/*<Image source={require('../images/logo.png')} style={styles.logo} />
          <Text style={styles.logintxt}>Create New Account</Text>
          <Custominput
            placeholder="Enter your Name"
            icon={require('../images/user.png')}
          />
          <Custominput
            placeholder="Enter your Phone Number"
            icon={require('../images/telephone.png')}
          />
          <Custominput
            placeholder="Enter your Email id"
            icon={require('../images/mail.png')}
          />
          <Custominput
            placeholder="Enter your password"
            icon={require('../images/padlock.png')}
            type="password"
          />
          <Custominput
            placeholder="Enter your Confirm Password"
            icon={require('../images/padlock.png')}
            type="password"
          /> */}
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

export default Signup;
