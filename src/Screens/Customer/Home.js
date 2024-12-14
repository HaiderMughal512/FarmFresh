import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageSliderNew, TopProducts} from '../../components';
import {everyfakelist, fakeTopSellingData} from '../../utils/Data';
import {getProductList} from '../../api/products';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fruitList, setFruitList] = useState([]);
  const [vegetableList, setVegetableList] = useState([]);
  const [search, setSearch] = useState('');

  const getProducts = async () => {
    let res = await getProductList();

    console.log('Product data', res);

    const frtLst = res.filter(item => {
      return item.P_category.trim() === 'Fruit';
    });
    setFruitList(frtLst);

    const vgtLst = res.filter(item => {
      return item.P_category.trim() === 'Vegetable';
    });
    setVegetableList(vgtLst);

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
  ) : (
    <ScrollView
      style={{flex: 1, marginBottom: 20}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        {/* <ImageSlider /> */}
        <ImageSliderNew />
        <View
          style={{
            height: 55,
            width: '90%',
            borderRadius: 10,
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            // backgroundColor: 'red',
          }}>
          <Image
            source={require('../Customer/icons/search.png')}
            style={{height: 24, width: 24, alignSelf: 'center', marginLeft: 10}}
          />

          <TextInput
            placeholder="Search"
            style={{paddingLeft: 20}}
            onChangeText={setSearch}
          />
        </View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Fruits
        </Text>
        <View>
          {/* <Topselling/> */}
          <TopProducts list={fruitList} search={search} key={1} />
        </View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {' '}
          VegeTables{' '}
        </Text>
        {/* <View style={{margin:10}}>
      <Text style={{marginLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',color:'black'}}>Everday Essentials</Text>
      </View> */}
        <View>
          <TopProducts list={vegetableList} search={search} key={2} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
