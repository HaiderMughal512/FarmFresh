import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {fakeTopSellingData} from '../../utils/Data';
import styles from '../card/styles';
import Card from '../card';

export default function index({list, search}) {
  const renderItem = ({item}) => <Card item={item} />;
  return (
    <FlatList
      // data={
      //   list && list.length > 0
      //     ? list?.filter(item =>
      //         item.toLowerCase().includes(search.toLowerCase()),
      //       )
      //     : []
      // }
      data={
        list && list.length > 0
          ? list?.filter(item =>
              item?.P_name.toLowerCase().includes(search.toLowerCase()),
            )
          : []
      }
      renderItem={renderItem}
      keyExtractor={item => item.P_id}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
