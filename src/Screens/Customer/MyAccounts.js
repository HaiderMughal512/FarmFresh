import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {updateUser} from '../../api/User';
import {errorMessage, successMessage} from '../../utils/Methods';
import {showMessage} from 'react-native-flash-message';

const MyAccounts = ({navigation}) => {
  const user = useSelector(state => state.userReducer?.user);
  const [name, setname] = useState(user?.U_name ? user?.U_name : '');
  const [email, setemail] = useState(user?.U_email ? user?.U_email : '');
  const [phone, setPhone] = useState(user?.U_number ? user?.U_number : '');
  // const [password, setPass] = useState(user?.U_number ? user?.U_number : '');
  const [address, setaddress] = useState(
    user?.U_address ? user?.U_address : '',
  );

  const handleUpdate = async () => {
    console.log('Number', phone);
    let res = await updateUser(email, user?.U_password, phone, name, address);
    successMessage('User profile', 'Update Successfully');
    console.log('Update Response', res);
  };

  // useEffect(() => {
  //   console.log('User', user?.U_number);
  //   setPhone(user?.U_number);
  // }, []);
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
          value={name}
          onChangeText={setname}
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
          value={phone.toString()}
          onChangeText={setPhone}
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
          value={email}
          onChangeText={setemail}
          editable={false}
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
          value={address}
          onChangeText={setaddress}
        />
      </View>

      {/* Change Password Button */}
      <TouchableOpacity
        style={styles.changePasswordButton}
        onPress={() => navigation.navigate('Changepassword')}>
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
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
    elevation: 1,
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
