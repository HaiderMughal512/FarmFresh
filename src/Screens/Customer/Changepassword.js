import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

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
          placeholder='Current Password' 
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
          placeholder='New Password' 
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
          placeholder='Confirm New Password' 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    height: 55,
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
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
  updateButton: {
    height: 50,
    width: '70%',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  updateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Changepassword;
