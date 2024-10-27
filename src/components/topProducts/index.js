import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {fakeTopSellingData} from '../../utils/Data';
import styles from '../card/styles';
import Card from '../card';

export default function index({list}) {
  const renderItem = ({item}) => <Card item={item} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
