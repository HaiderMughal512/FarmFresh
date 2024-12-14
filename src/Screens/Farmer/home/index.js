import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {ImageNames} from '../../../images';
import ImageSlider from '../../../components/imageSlider';
import Custominput from '../../../common/Custominput';
import {Card, TopProducts} from '../../../components';
import {getFarmerProductList} from '../../../api/products';
import {useSelector} from 'react-redux';

export default function FarmerHome() {
  const user = useSelector(state => state.userReducer?.user);
  const [fruit, setFruit] = useState([]);
  const [Vegetable, setVegetable] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    let res = await getFarmerProductList(user?.U_id);
    const frtLst = res.filter(item => {
      return item.P_category.trim() === 'Fruit';
    });
    setFruit(frtLst);

    const vgtLst = res.filter(item => {
      return item.P_category.trim() === 'Vegetable';
    });
    setVegetable(vgtLst);
    setLoading(false);
    console.log(res);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  ) : (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.Imagecontainer}>
          <Image source={ImageNames.LOGO} style={styles.logo} />
          <Text style={styles.Farmtext}>Farm Fresh</Text>
        </View>
        <View>
          <ImageSlider />
        </View>
        <Custominput
          placeholder="Enter your Email id"
          icon={require('../../Customer/icons/search.png')}
          onChangeText={setSearch}
        />
        <View>
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
          <TopProducts list={fruit} key={3} search={search} />
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Vegetable
          </Text>
          <TopProducts list={Vegetable} key={5} search={search} />
          {/* <Card />
           */}

          {/* <Card /> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    marginTop: 20,
  },
  Imagecontainer: {
    borderRadius: 30,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 5,

    alignItems: 'center',
  },
  Farmtext: {
    height: 60,
    alignSelf: 'center',
    width: '50%',
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 28,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    textAlign: 'center',
    elevation: 2,
    shadowOpacity: 0.5,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
  },

  logo: {
    elevation: 6,

    height: 80,
    width: 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginTop: 50,
  },
});
