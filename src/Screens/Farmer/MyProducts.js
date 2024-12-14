import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getFarmerProductList} from '../../api/products';
import {Card} from '../../components';

const MyProducts = () => {
  const user = useSelector(state => state.userReducer?.user);
  // const [fruit, setFruit] = useState([]);
  const [items, setitems] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    let res = await getFarmerProductList(user?.U_id);
    setitems(res);
    setLoading(false);
    console.log(res);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  ) : (
    <View style={{flex: 1}}>
      <Text style={styles.header}>Your Products</Text>

      <ScrollView style={{flex: 1}}>
        <FlatList
          data={items}
          contentContainerStyle={{flex: 1}}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({item}) => {
            return <Card item={item} />;
          }}
          keyExtractor={item => item.P_id}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
});
export default MyProducts;
