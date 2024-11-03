import {View, Text, Button, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from '../../components';

const Like = () => {
  const favourites = useSelector(
    state => state.favouriteReducer?.favouriteList,
  );
  return (
    <ScrollView style={{flex: 1}}>
      <FlatList
        data={favourites}
        contentContainerStyle={{flex: 1}}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
        keyExtractor={item => item.P_id}
      />
      {/* <Button
        title="press"
        onPress={() => {
          console.log('favouriteList', favourites);
        }}
      /> */}
    </ScrollView>
  );
};

export default Like;
