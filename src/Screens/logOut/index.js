import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Logout = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('Login'); // Ensure 'Login' is registered in your stack
  };

  return (
    <View style={styles.parentView}>
      <Text style={styles.thankText}>
        "Thank you for shopping with Farm Fresh! We hope to see you again soon."
      </Text>

      <TouchableOpacity
        style={styles.logOutTouch}
        onPress={handleLogout} // Attach the function here
      >
        <Text style={styles.logOutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
