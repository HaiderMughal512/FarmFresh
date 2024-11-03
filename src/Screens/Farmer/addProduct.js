import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../common/Custominput';

export default function AddProduct() {
  const [productname, setproductname] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [image, setimage] = useState('');
  const [category, setcategory] = useState('');

  return (
    <View>
      <Custominput placeholder={'Name'} />
      <Custominput />
      <Custominput />
      <Custominput />
    </View>
  );
}
