import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from '../../components';

const Like = () => {
  const favourites = useSelector(
    state => state.favouriteReducer?.favouriteList,
  );

  if (!favourites || favourites.length === 0) {
    return (
      <View style={style.emptyContainer}>
        <Text style={style.noItemText}>No items found</Text>
      </View>
    );
  }
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
const style = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
  },
});

export default Like;
