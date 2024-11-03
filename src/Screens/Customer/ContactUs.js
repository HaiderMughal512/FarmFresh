import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Contactus = () => {
  return (
    <View style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/person.png')}
          style={styles.icon}
        />
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/email.png')}
          style={styles.icon}
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
  },
  inputContainer: {
    height: 55,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
  messageContainer: {
    height: 200,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
  submitButton: {
    height: 55,
    width: '75%',
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  submitText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Contactus;
