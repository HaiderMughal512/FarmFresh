import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'; // Added LinearGradient import

const {width, height} = Dimensions.get('window');
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    // Updated the gradient colors for a fresher feel
    <LinearGradient
      colors={['#FFFB7D', '#00D4FF']} // Light yellow to soft blue gradient
      style={styles.container}>
      <View>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>What would you like today?</Text>
        <Text style={styles.subText}>Fruits & Vegetables!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: (height * 0.15) / 2,
  },
  textContainer: {
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50', // Changed to dark grey for contrast
    alignSelf: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#34495E', // Updated to a slightly darker grey
    alignSelf: 'center',
  },
});

export default Splash;
