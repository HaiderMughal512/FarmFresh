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
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyAccounts = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Octicons name="person" size={25} color="black" />

        <TextInput placeholder="Name" style={styles.textInput} />
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={25} color="black" />
        <TextInput placeholder="Phone Number" style={styles.textInput} />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Octicons name="mail" size={25} color="black" />

        <TextInput placeholder="Email" style={styles.textInput} />
      </View>

      {/* Address Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={25} color="black" />

        <TextInput placeholder="Address" style={styles.textInput} />
      </View>

      {/* Change Password Button */}
      <TouchableOpacity
        style={styles.changePasswordButton}
        onPress={() => navigation.navigate('Changepassword')}>
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyAccounts;
