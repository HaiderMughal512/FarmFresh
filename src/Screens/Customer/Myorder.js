import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMyOrders} from '../../api/orders';
import {useSelector} from 'react-redux';

const Myorder = () => {
  const [order, setOrder] = useState([]);
  const user = useSelector(state => state.userReducer.user);
  const getOrder = async () => {
    let res = await getMyOrders(user?.U_id);
    setOrder(res);
    // console.log(res);
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <View>
      <Text>Myorder is on pending</Text>

      <Button
        title="Check"
        onPress={() => {
          console.log('My Orders', order);
        }}
      />
    </View>
  );
};

export default Myorder;
