import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Changepassword = () => {
  return (
    <View style={styles.container}>
      {/* Current Password Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Current Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="New Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>

      {/* Confirm New Password Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Confirm New Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>

      {/* Update Password Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Changepassword;
