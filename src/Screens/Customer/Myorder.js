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
  const OrderItem = ({Oi_price, Oi_quantity, P_id}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.productId}>Product ID: {P_id}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${Oi_price}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{Oi_quantity}</Text>
        </View>
        {/* <View style={styles.infoContainer}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>${Oi_price * Oi_quantity}</Text>
        </View> */}
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={order}
        keyExtractor={item => item.P_id}
        renderItem={({item}) => (
          <OrderItem
            Oi_price={item.O_amount}
            Oi_quantity={item.O_status}
            P_id={item.u_id}
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
});
export default Myorder;
