import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

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
    <View style={styles.container}>
      <View>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>What would you like today?</Text>
        <Text style={styles.subText}>Fruits & Vegetables!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: '#4CAF50',
    alignSelf: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#757575',
    alignSelf: 'center',
  },
});

export default Splash;
