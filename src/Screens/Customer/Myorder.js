import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getMyOrders} from '../../api/orders';
import {useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Myorder = () => {
  const list = useSelector(state => state.cartReducer?.productlist);
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const user = useSelector(state => state.userReducer?.user);
  const [loading, setLoading] = useState(true);

  const getOrder = async () => {
    try {
      let res = await getMyOrders(user?.U_id);
      setOrders(res);
      console.log('My Orders', res);
    } catch (error) {
      console.error('Failed to fetch orders', error);
      setError('Unable to fetch your orders. Please try again.');
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrder();
  }, []);
  useFocusEffect(
    useCallback(() => {
      getOrder();
    }, [list]),
  );

  const handleOrderPress = (id, F_id) => {
    console.log('Order Id', F_id);
    navigation.navigate('OrderDetail', {
      id: id,
      role: 'Customer',
      farmerId: F_id,
    });
  };

  const OrderItem = ({
    O_id,
    O_amount,
    O_date,
    O_delivery_Address,
    O_status,
    F_id,
  }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          handleOrderPress(O_id, F_id);
        }}>
        <Text style={styles.productId}>Order ID: {O_id}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>RS.{O_amount}</Text>
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
      </TouchableOpacity>
    );
  };

  return loading ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
  ) : (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Text style={styles.header}>My Orders</Text>

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
            F_id={item.F_id}
          />
        )}
      />

      {/* This button is for debugging and testing */}
      {/* <Button
        title="Check"
        onPress={() => {
          console.log('My Orders:', orders);
        }}
      /> */}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
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
