import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageSliderNew, TopProducts} from '../../components';
import {everyfakelist, fakeTopSellingData} from '../../utils/Data';

const Home = () => {
  return (
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
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Customer/icons/search.png')}
            style={{height: 24, width: 24, alignSelf: 'center', marginLeft: 10}}
          />

          <TextInput placeholder="Search" style={{paddingLeft: 20}} />
        </View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Top Selling Product
        </Text>
        <View>
          {/* <Topselling/> */}
          <TopProducts list={fakeTopSellingData} />
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
          Every Day Essentials{' '}
        </Text>
        {/* <View style={{margin:10}}>
      <Text style={{marginLeft:10,marginTop:10,fontSize:20,fontWeight:'bold',color:'black'}}>Everday Essentials</Text>
      </View> */}
        <View>
          <TopProducts list={everyfakelist} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
