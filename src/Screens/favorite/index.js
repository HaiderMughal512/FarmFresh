import {View, Text, Button, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from '../../components';
import styles from './styles';

const Favorite = () => {
  const favourites = useSelector(
    state => state.favouriteReducer?.favouriteList,
  );
  return (
    <View style={styles.parentView}>
      <FlatList
        data={favourites}
        contentContainerStyle={styles.flatListStyle}
        numColumns={2}
        scrollEnabled={true}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
        keyExtractor={({index}) => {
          return index;
        }}
      />
      <Button
        title="press"
        onPress={() => {
          console.log('favouriteList', favourites);
        }}
      />
    </View>
  );
};

export default Favorite;
