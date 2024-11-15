import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getMyOrders} from '../../api/orders';
import {useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Myorder = () => {
  const list = useSelector(state => state.cartReducer?.productlist);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const user = useSelector(state => state.userReducer?.user);

  const getOrder = async () => {
    try {
      let res = await getMyOrders(user?.U_id);
      setOrders(res);
      console.log(res);
    } catch (error) {
      console.error('Failed to fetch orders', error);
      setError('Unable to fetch your orders. Please try again.');
    }
  };

  useEffect(() => {
    getOrder();
  }, []);
  useFocusEffect(
    useCallback(() => {
      getOrder();
    }, [list]),
  );

  const OrderItem = ({
    O_id,
    O_amount,
    O_date,
    O_delivery_Address,
    O_status,
  }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.productId}>Order ID: {O_id}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>${O_amount}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>
            {new Date(O_date).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Delivery Address:</Text>
          <Text style={styles.value}>{O_delivery_Address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{O_status}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={orders}
        keyExtractor={item => item.O_id.toString()} // Use O_id as key extractor
        renderItem={({item}) => (
          <OrderItem
            O_id={item.O_id}
            O_amount={item.O_amount}
            O_date={item.O_date}
            O_delivery_Address={item.O_delivery_Address}
            O_status={item.O_status}
          />
        )}
      />

      {/* This button is for debugging and testing */}
      <Button
        title="Check"
        onPress={() => {
          console.log('My Orders:', orders);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
});

export default Myorder;
