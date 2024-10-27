import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Iconant from 'react-native-vector-icons/AntDesign';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../Redux/cart/cartAction';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cartReducer);
  const increase = item => {
    // console.log('Increase', products);

    dispatch(
      increaseQuantity({
        quantity: 1,
        id: item.id,
        price: item.price,
      }),
    );
  };
  const decrease = item => {
    if (item.quantity > 1) {
      console.log('decrement');
      dispatch(
        decreaseQuantity({
          quantity: 1,
          id: item.id,
          price: item.price,
        }),
      );
    }
  };
  const remove = item => {
    dispatch(
      removeFromCart({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        productName: item.productName,
      }),
    );
    console.log('removeProduct');
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.mainItemView}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
            marginRight: 10,
            marginTop: 5,
          }}
          onPress={() => {
            remove(item);
          }}>
          <Iconant name={'delete'} size={20} color={'red'} />
        </TouchableOpacity>
        <View style={styles.itemContainer}>
          {/* <Image source={{uri: item.image}} style={styles.productImage} /> */}
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.productId}>Product ID: {item.id}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                decrease(item);
              }}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
            <Text
              style={{
                borderWidth: 1,
                height: 30,
                width: 30,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 18,
              }}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                increase(item);
              }}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    console.log('cart', products);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={products?.productlist}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.subTotalView}>
        <Text style={styles.subTotalTitle}>Sub Total</Text>
        <Text style={styles.subTotalValue}>
          $ {Math.round(products?.subtotal, 4)}
        </Text>
      </View>

      {/* <Button
        title="Check"
        onPress={() => {
          console.log('Products List', products);
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    // padding: 16,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  mainItemView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
    borderRadius: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 4,
  },
  productId: {
    fontSize: 12,
    color: '#AAA',
  },

  subTotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotalTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  subTotalValue: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

export default Cart;