import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser} from '../../Redux/user/userAction';

const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 18, color: '#333', textAlign: 'center'}}>
        "Thank you for shopping with Farm Fresh! We hope to see you again soon."
      </Text>

      <TouchableOpacity
        style={{
          height: 50,
          width: '85%',
          backgroundColor: '#000',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={handleLogout}>
        <Text style={{color: 'white', fontSize: 16}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
