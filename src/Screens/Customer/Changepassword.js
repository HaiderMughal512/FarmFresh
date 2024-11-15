import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {updatePassword} from '../../api/User';
import {useSelector} from 'react-redux';
import {errorMessage, successMessage} from '../../utils/Methods';

const Changepassword = () => {
  const [currpassword, setcurrpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [connewpassword, setconnewpassword] = useState('');
  const user = useSelector(state => state.userReducer?.user);

  const validateInputs = async () => {
    if (!currpassword.trim() || !newpassword.trim() || !connewpassword.trim()) {
      errorMessage('Error', 'All fields are required.');
      return false;
    }

    if (newpassword.trim() !== connewpassword.trim()) {
      errorMessage('Error', 'New passwords do not match.'); // Use custom errorMessage function
      return false;
    }

    if (currpassword.trim() !== user.U_password) {
      errorMessage('Error', 'Current password is incorrect.');
      return false;
    }

    return true;
  };

  const handleUpdate = async () => {
    const isValid = await validateInputs();
    if (!isValid) return;

    console.log('Updating password for:', {
      email: user.U_email,
      currentPassword: currpassword.trim(),
      newPassword: newpassword.trim(),
    });

    try {
      let res = await updatePassword(
        user.U_email,
        currpassword.trim(),
        newpassword.trim(),
      );
      console.log('Update password response', res);

      if (res.success) {
        errorMessage('Success', 'Password updated successfully.');
      } else {
        successMessage(
          'Success',
          res.message || 'Password update successfully.',
        );
      }
    } catch (error) {
      errorMessage('Error', 'An unexpected error occurred.');
      console.error('Update password error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Current Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={setcurrpassword}
          value={currpassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="New Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={setnewpassword}
          value={newpassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Confirm New Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={setconnewpassword}
          value={connewpassword}
        />
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
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
