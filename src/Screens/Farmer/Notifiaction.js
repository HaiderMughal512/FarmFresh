import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {updateFarmerNotificationStatus} from '../../api/orders';
import {UpdateNotificationList} from '../../Redux/notification/notificationAction';

export default function Notifiaction() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const list = useSelector(
    state => state.notificationReducer?.notificationlist,
  );

  const handlePress = async item => {
    console.log('Pressed Item', item);
    let res = await updateFarmerNotificationStatus(item?.O_id);
    console.log('Update Response', res);
    if (res === 'Update Successfully') {
      dispatch(UpdateNotificationList(item?.O_id));
      // navigation.navigate("")
      navigation.navigate('OrderDetail', {
        id: item?.O_id,
        status: 'Confirm',
      });
    }
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: item?.Status === 'Unread' ? 'gray' : 'white',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
      }}
      onPress={() => {
        handlePress(item);
      }}>
      <Text>{item?.Notification1}</Text>
    </TouchableOpacity>
  );
  console.log('Update Notificationlist', list);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item?.Notifiaction_ID}
      />
    </View>
  );
}
