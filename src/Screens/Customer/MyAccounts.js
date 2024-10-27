import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const MyAccounts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../Customer/icons/person.png')} 
          style={styles.icon} 
        />
        <TextInput 
          placeholder="Name" 
          style={styles.textInput} 
        />
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../Customer/icons/telephone.png')} 
          style={styles.icon} 
        />
        <TextInput 
          placeholder="Phone Number" 
          style={styles.textInput} 
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../Customer/icons/email.png')} 
          style={styles.icon} 
        />
        <TextInput 
          placeholder="Email" 
          style={styles.textInput} 
        />
      </View>

      {/* Address Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../Customer/icons/location.png')} 
          style={styles.icon} 
        />
        <TextInput 
          placeholder="Address" 
          style={styles.textInput} 
        />
      </View>

      {/* Change Password Button */}
      <TouchableOpacity 
        style={styles.changePasswordButton} 
        onPress={() => navigation.navigate('Changepassword')}
      >
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
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
    flexDirection: 'row',
    height: 55,
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  changePasswordButton: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    marginTop: 20,
  },
  changePasswordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  updateButton: {
    height: 50,
    width: '70%',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  updateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MyAccounts;
