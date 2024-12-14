import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Redux/cart/cartAction';
import {imageIp} from '../../env';

export default function Description({route}) {
  const user = useSelector(state => state.userReducer?.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {product} = route?.params || {};

  const handleProduct = () => {
    if (!product) return;

    const imageUri = `${imageIp}${product?.images}`;

    dispatch(
      addToCart({
        productName: product.P_name,
        price: product.P_price,
        imageSource: imageUri,
        id: product.P_id,
        quantity: 1,
      }),
    );
    navigation.navigate('Cart');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {product ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.P_name}</Text>
          {product?.images ? (
            <Image
              source={{uri: `${imageIp}${product.images}`}}
              style={styles.productImage}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.errorMessage}>Image not available</Text>
          )}
          <Text style={styles.productPrice}>RS. {product.P_price}</Text>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {product.P_description ||
              'No description available for this product.'}
          </Text>
        </View>
      ) : (
        <Text style={styles.errorMessage}>Product data is missing.</Text>
      )}

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleProduct}>
        <LinearGradient
          colors={['green', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientButton}>
          <Text style={styles.addButtonText}>
            {user?.U_role === 'Farmer' ? 'Feedback' : 'Add to Cart'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 5,
  },
  detailsContainer: {
    padding: 16,
    marginTop: 50,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  productImage: {
    width: '100%',
    height: 250,
    marginVertical: 16,
  },
  productPrice: {
    fontSize: 24,
    color: '#ff6347',
    fontWeight: '600',
    marginVertical: 10,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    padding: 16,
    textAlign: 'center',
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
  gradientButton: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
