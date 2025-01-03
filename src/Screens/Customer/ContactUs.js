import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Linking} from 'react-native'; // Required for Linking.openURL

// Send Email Function
export function sendEmail(fromEmail, message) {
  const subject = 'Message from Farm Fresh User';
  const body = `From: ${fromEmail}\n\n${message}`; // Including sender's email in the body
  const url = `mailto:malikhaidera14@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}&from=${encodeURIComponent(fromEmail)}`;

  Linking.openURL(url)
    .then(result => {
      if (result) {
        console.log('Email app opened successfully');
      } else {
        console.log('Unable to open email app');
      }
    })
    .catch(error => console.log('Error opening email app:', error));
}

const ContactUsScreen = () => {
  const [userEmail, setUserEmail] = useState(''); // To store user email input
  const [message, setMessage] = useState(''); // To store the message input

  const handleSend = () => {
    // Validation for email and message
    if (!userEmail.trim()) {
      Alert.alert('Email Required', 'Please enter your email address.');
      return;
    }

    if (!message.trim()) {
      Alert.alert('Message Required', 'Please enter a message before sending.');
      return;
    }

    // Sending email using sendEmail function with user's email
    sendEmail(userEmail, message); // Passing user's email as the "from" email
    Alert.alert(
      'Email Sent',
      'Your message has been sent to the support team.',
    );
    setMessage(''); // Clear message input after sending
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>
        Let us know how we can help you. Write your message below and send it to
        our support team.
      </Text>

      {/* Email Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={userEmail}
        onChangeText={setUserEmail}
        keyboardType="email-address"
      />

      {/* Message Input Field */}
      <TextInput
        style={[styles.input, {height: 150}]}
        placeholder="Type your message here..."
        value={message}
        onChangeText={setMessage}
        multiline
        textAlignVertical="top"
      />

      {/* Send Button */}
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ContactUsScreen;
