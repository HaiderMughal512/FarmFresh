import {View, Text, Button, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from '../../components';

const Like = () => {
  const favourites = useSelector(
    state => state.favouriteReducer?.favouriteList,
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={favourites}
        contentContainerStyle={{flex: 1, alignItems: 'center'}}
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

export default Like;
