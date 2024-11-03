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

const Changepassword = () => {
  const [currpassword, setcurrpassword] = useState();
  const [newpassword, setnewpassword] = useState();
  const [connewpassword, setconnewpassword] = useState();
  const user = useSelector(state => state.userReducer?.user);

  const handleUpdate = async () => {
    let res = await updatePassword(user.U_email, currpassword, newpassword);
    console.log('update password response', res);
  };
  return (
    <View style={styles.container}>
      {/* Current Password Input */}
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
        />
      </View>
      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="New Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChange={setnewpassword}
        />
      </View>
      {/* Confirm New Password Input */}
      //{' '}
      <View style={styles.inputContainer}>
        <Image
          source={require('../Customer/icons/padlock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Confirm New Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChange={setconnewpassword}
        />
      </View>
      {/* Update Password Button */}
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
