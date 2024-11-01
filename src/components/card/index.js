import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/cart/cartAction';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Favourites from '../favourite';

export default function Card({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handelAddCart = () => {
    console.log('Price', item.price);

    dispatch(
      addToCart({
        productName: item.productName,
        price: item.price,
        imageSource: item.imageSource,
        id: item.id,
        quantity: 1,
      }),
    );
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={item.imageSource}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </View>

      {/* Product Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.price}>$ {item.price}</Text>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton} onPress={handelAddCart}>
          <LinearGradient
            colors={['green', 'red']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientButton}>
            <Text style={styles.addButtonText}>ADD</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Favourites item={item} />
      {/* <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: 'white',
          position: 'absolute',
          top: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="heart" size={20} />
      </TouchableOpacity> */}
    </View>
  );
}
