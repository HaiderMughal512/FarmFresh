import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  getFarmerOrders,
  getMyOrders,
  updateFarmerNotificationStatus,
  updateOrderStatus,
} from '../../api/orders';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateNotificationList} from '../../Redux/notification/notificationAction';

const Orders = () => {
  const user = useSelector(state => state.userReducer?.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [order, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [check, setCheck] = useState(0);
  const getOrder = async () => {
    try {
      console.log('User Id', user?.U_id);

      let res = await getFarmerOrders(user?.U_id);
      console.log('Order Response with Users', res);

      setOrders(res?.orders);
      setUsers(res?.users);
      console.log('User APi response', res);
    } catch (error) {
      console.error('Failed to fetch orders', error);
      setError('Unable to fetch your orders. Please try again.');
    }
  };

  const handleOrderPress = (id, status) => {
    console.log('Order Id', id);
    navigation.navigate('OrderDetail', {id: id, status});
  };

  const handleUpdateStatus = async (id, status) => {
    console.log('Id', id, 'Status', status);
    // let res = await updateOrderStatus(id, status);
    let notRes = await updateFarmerNotificationStatus(id);

    console.log('Status Update Response', notRes);
    if (
      notRes === 'Update Successfully' ||
      notRes === 'Notification Not exist'
    ) {
      dispatch(UpdateNotificationList(id));
      // console.log('Notification Update', notRes);

      setCheck(check + 1);
    }
  };

  const OrderItem = ({
    O_id,
    O_amount,
    O_date,
    O_delivery_Address,
    O_status,
    U_name,
    U_number,
    u_id,
  }) => {
    const specificUser = users.find(user => user?.U_id === u_id);
    // console.log('Specific User', specificUser);

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          handleOrderPress(O_id, O_status);
        }}>
        <Text style={styles.productId}>Order ID: {O_id}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>RS{O_amount}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>
            {new Date(O_date).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{specificUser?.U_name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{specificUser?.U_number}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Delivery Address:</Text>
          <Text style={styles.value}>{O_delivery_Address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{O_status}</Text>
        </View>
        {O_status === 'Pending' && (
          <Button
            title="Update Status"
            onPress={() => {
              handleUpdateStatus(O_id, 'Confirm');
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getOrder();
  }, []);
  useFocusEffect(
    useCallback(() => {
      getOrder();
    }, [check]),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={order}
        keyExtractor={item => item.O_id.toString()} // Use O_id as key extractor
        renderItem={({item}) => (
          <OrderItem
            O_id={item.O_id}
            O_amount={item.O_amount}
            O_date={item.O_date}
            O_delivery_Address={item.O_delivery_Address}
            O_status={item.O_status}
            U_name={user?.U_name}
            U_number={user?.U_number}
            u_id={item?.u_id}
          />
        )}
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

export default Orders;
