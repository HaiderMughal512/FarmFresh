import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../common/Custominput';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignUp} from '../api/User';
import {showMessage} from 'react-native-flash-message';
import {errorMessage, successMessage} from '../utils/Methods';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !confirmpass.trim()
    ) {
      errorMessage('Signup Error', 'Please fill all the fields');
      return;
    }
    if (name.trim().length < 3) {
      errorMessage('Signup Error', 'Name must be at least 3 characters long');
      return;
    }
    if (!email.trim().includes('@') || !email.trim().endsWith('@gmail.com')) {
      errorMessage('Signup Error', 'Please enter a valid Gmail address');
      return;
    }
    if (phone.trim().length < 10 || isNaN(phone)) {
      errorMessage(
        'Signup Error',
        'Phone number must be at least 10 digits and contain only numbers',
      );
      return;
    }
    if (address.trim().length < 5) {
      errorMessage(
        'Signup Error',
        'Address must be at least 5 characters long',
      );
      return;
    }
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password); // Check for at least one number
    if (password.trim().length < 8 || !hasLetters || !hasNumbers) {
      errorMessage(
        'Signup Error',
        'Password must be at least 8 characters long and include both letters and numbers',
      );
      return;
    }
    if (password.trim() !== confirmpass.trim()) {
      errorMessage('Signup Error', 'Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      let res = await SignUp(email, password, phone, name, address);
      console.log('Sign Up Response:', res);
      console.log('phone response', phone);

      if (res === 'User registered successfully') {
        successMessage('Authentication', 'User Registered Successfully');
        navigation.navigate('Login');
      } else {
        errorMessage('Authentication', 'User already Registered');
      }
    } catch (error) {
      console.error('Signup error:', error);
      errorMessage('Authentication', 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <Image source={require('../images/logo.png')} style={styles.logo} />
          <Text style={styles.logintxt}>Create New Account</Text>
          <Custominput
            placeholder="Enter your Name"
            icon={require('../images/user.png')}
            onChangeText={setName}
            value={name}
          />
          <Custominput
            placeholder="Enter your Email id"
            icon={require('../images/mail.png')}
            onChangeText={setEmail}
            value={email}
          />
          <Custominput
            placeholder="Enter your Phone Number"
            icon={require('../images/telephone.png')}
            onChangeText={setPhone}
            value={phone}
          />
          <Custominput
            placeholder="Enter Address"
            icon={require('../images/padlock.png')}
            onChangeText={setAddress}
            value={address}
          />
          <Custominput
            placeholder="Enter your password"
            icon={require('../images/padlock.png')}
            type="password"
            onChangeText={setPassword}
            value={password}
          />
          <Custominput
            placeholder="Enter your Confirm Password"
            icon={require('../images/padlock.png')}
            type="password"
            onChangeText={setConfirmpass}
            value={confirmpass}
          />

          {loading ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignUp}>
              <Text style={styles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
          )}

          <Text
            style={styles.alreadyHaveAccountText}
            onPress={() => navigation.navigate('Login')}>
            Already have an Account?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  signupButton: {
    height: 50,
    width: '85%',
    backgroundColor: '#000',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
  },
  alreadyHaveAccountText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default Signup;
