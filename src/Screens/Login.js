import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Custominput from '../common/Custominput';
import {login} from '../api/User';
import {errorMessage} from '../utils/Methods';
import {useDispatch} from 'react-redux';
import {addUser} from '../Redux/user/userAction';
import {getFarmerNotifiation} from '../api/orders';
import {
  setNotificationCount,
  setNotificationList,
} from '../Redux/notification/notificationAction';

const Login = () => {
  const navigation = useNavigation();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setemail('');
  //   setpassword('');
  //   setLoading(false);
  // }, []);
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      errorMessage('Login Error', 'please fill all the feilds');
      return;
    }
    if (!email.trim().includes('@') || !email.trim().endsWith('@gmail.com')) {
      errorMessage('Login Error', 'Please enter a valid Gmail address.');
      return;
    }
    setLoading(true);
    console.log(email, password);
    const res = await login(email, password, 'Farmer');
    console.log(res);

    if (res?.U_email === email.trim()) {
      dispatch(addUser(res));

      if (res?.U_role === 'Customer') {
        console.log('Navigation');

        navigation.navigate('Home');
      } else {
        const notificationResponse = await getFarmerNotifiation(res?.U_id);
        const unreadCount = notificationResponse.filter(
          notification => notification.Status.trim() === 'Unread',
        ).length;
        dispatch(setNotificationList(notificationResponse));
        dispatch(setNotificationCount(unreadCount));
        console.log('notification', notificationResponse);

        navigation.navigate('FarmerNavigation');
      }
      setemail('');
      setpassword('');
    } else {
      errorMessage('Authentication', 'User Not Exist');
    }
    // setemail('');
    // setpassword('');
    setLoading(false);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.logintxt}>Login</Text>
      <Custominput
        placeholder="Enter your Email id"
        icon={require('../images/mail.png')}
        onChangeText={setemail}
        value={email}
      />
      <Custominput
        placeholder="Enter your password"
        icon={require('../images/padlock.png')}
        type="password"
        onChangeText={setpassword}
        value={password}
      />
      <Text
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginRight: 20,
          fontSize: 14,
          fontWeight: '700',
          color: 'blue',
          textDecorationLine: 'underline',
          alignSelf: 'flex-end',
        }}
        onPress={() => {
          navigation.navigate('ForgetPassword');
        }}>
        Forget Password?
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
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
          onPress={handleLogin}>
          <Text style={{color: 'white', paddingTop: 13}}>Login</Text>
        </TouchableOpacity>
      )}

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
