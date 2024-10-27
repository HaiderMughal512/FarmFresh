import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';

const Contactus = () => {
  return (
    <View style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Octicons name="person" size={25} color="black" />
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Octicons name="mail" size={25} color="black" />

        <TextInput placeholder="Email" style={styles.textInput} />
      </View>

      {/* Message Input */}
      <View style={styles.messageContainer}>
        <TextInput
          placeholder="Message"
          style={styles.messageInput}
          multiline={true}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contactus;
