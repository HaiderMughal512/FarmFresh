import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {forgotPassword} from '../api/User';

const ForgetPassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  //   const handleForgotPassword = async () => {
  //     if (!name.trim() || !email.trim()) {
  //       Alert.alert('Error', 'Please enter both name and email');
  //       return;
  //     }

  //     setLoading(true);

  //     // Call the forgotPassword function with name and email
  //     const result = await forgotPassword(email, name);
  //     console.log('forget password api response', result);

  //     if (result) {
  //       if (result.U_email) {
  //         // If user exists, show password
  //         Alert.alert('Password Found', `Your password is: ${result.U_password}`);
  //       } else {
  //         // If user does not exist
  //         Alert.alert('Error', 'User not found');
  //       }
  //     } else {
  //       Alert.alert('Error', 'Something went wrong!');
  //     }

  //     setLoading(false);
  //   };
  const handleForgotPassword = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Error', 'Please enter both name and email');
      return;
    }

    setLoading(true);

    // Call the forgotPassword function with name and email
    const result = await forgotPassword(email, name);
    console.log('forget password api response', result);

    if (result) {
      if (result?.U_email === email.trim() && result?.U_name === name.trim()) {
        // If both email and name match case-sensitively, show the password
        Alert.alert(
          'Password Found',
          `Your password is: ${result?.U_password}`,
        );
      } else {
        // If either the email or name does not match
        Alert.alert('Error', 'User not found');
      }
    } else {
      Alert.alert('Error', 'Something went wrong!');
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.label}>Enter your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Enter your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleForgotPassword}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Retrieve Password</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgetPassword;
