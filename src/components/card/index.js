import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Redux/cart/cartAction';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Favourites from '../favourite';
import Description from '../description';
import {imageIp} from '../../env';

export default function Card({item}) {
  const user = useSelector(state => state.userReducer?.user);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handelAddCart = () => {
    console.log('Price', item.f_id);

    dispatch(
      addToCart({
        productName: item?.P_name,
        price: item?.P_price,
        imageSource: '',
        id: item?.P_id,
        quantity: 1,
        F_id: item.f_id,
      }),
    );
    if (user?.U_role === 'Farmer') {
      navigation.navigate('Details', {id: item?.P_id});
    }
  };

  const hanledes = () => {
    navigation.navigate('Details', {id: item?.P_id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={hanledes}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        {/* <ImageBackground
          source={item.imageSource}
          resizeMode="cover"
          style={styles.image}></ImageBackground> */}

        <Image
          source={{uri: `${imageIp}${item?.images}`}}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item?.P_name}</Text>
        <Text style={styles.price}>RS. {item?.P_price}</Text>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton} onPress={handelAddCart}>
          <LinearGradient
            colors={['green', 'red']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientButton}>
            <Text style={styles.addButtonText}>
              {user?.U_role === 'Farmer' ? 'Feedback' : 'ADD'}
            </Text>
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
    </TouchableOpacity>
  );
}
