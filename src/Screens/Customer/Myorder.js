import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMyOrders} from '../../api/orders';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Myorder = () => {
  const [order, setOrder] = useState([]);
  const user = useSelector(state => state.userReducer.user);

  const getOrder = async () => {
    let res = await getMyOrders(user?.U_id);
    setOrder(res);
    console.log(res);
  };

  useEffect(() => {
    getOrder();
  }, []);

  const OrderItem = ({
    O_amount,
    O_date,
    O_delivery_Address,
    O_id,
    O_payment_status,
    O_status,
    u_id,
  }) => {
    // Format the date for display
    const formattedDate = new Date(O_date).toLocaleDateString();

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.orderId}>Order ID: {O_id}</Text>
        <Text style={styles.userId}>User ID: {u_id}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>${O_amount}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{formattedDate}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Delivery Address:</Text>
          <Text style={styles.value}>{O_delivery_Address}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Payment Status:</Text>
          <Text style={styles.value}>{O_payment_status}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Order Status:</Text>
          <Text style={styles.value}>{O_status}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={order}
        keyExtractor={item => item.O_id.toString()}
        renderItem={({item}) => (
          <OrderItem
            O_amount={item.O_amount}
            O_date={item.O_date}
            O_delivery_Address={item.O_delivery_Address}
            O_id={item.O_id}
            O_payment_status={item.O_payment_status}
            O_status={item.O_status}
            u_id={item.u_id}
          />
        )}
      />
      <Button
        title="Check"
        onPress={() => {
          console.log('My Orders', order);
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 5,
  },
  userId: {
    fontSize: 14,
    color: '#666',
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
});

export default Myorder;
