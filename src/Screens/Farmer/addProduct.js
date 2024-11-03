import {View, Text, Button, Image} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../common/Custominput';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import {addProducts} from '../../api/products';

export default function AddProduct() {
  const user = useSelector(state => state.userReducer.user);

  const [productname, setproductname] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [image, setimage] = useState();
  const [imagePath, setimagePath] = useState('');
  const [category, setcategory] = useState('');

  const chooseImage = () => {
    let options = {
      mediaType: 'Photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      console.log('Image Response', response);

      if (response.didCancel) {
        console.log('Cancel');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        console.log('Camera Unavailable');
        return;
      } else if (response.errorCode == 'permission') {
        console.log('Permission');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);

        return;
      }

      setimage({
        uri: response.assets[0]?.uri,
        type: response.assets[0]?.type,
        name: response.assets[0]?.fileName,
      });

      setimagePath(response.assets[0]);
    });
  };

  const handleAddProduct = async () => {
    try {
      let formData = new FormData();
      formData.append('file', image);
      formData.append('f_id', user?.U_id);
      formData.append('P_name', productname);
      formData.append('P_description', description);
      formData.append('P_price', price);
      formData.append('P_quantity', quantity);
      formData.append('P_category', category);

      let res = await addProducts(formData);
      console.log('Add Product Response', res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Custominput placeholder="Name" onChangeText={setproductname} />
      <Custominput placeholder="Deccription" onChangeText={setdescription} />
      <Custominput placeholder="Price" onChangeText={setprice} />
      <Custominput placeholder="Quantity" onChangeText={setquantity} />
      <Custominput placeholder="Category" onChangeText={setcategory} />
      <Button title="Choose Image" onPress={chooseImage} />

      <Button title="Add Product" onPress={handleAddProduct} />

      {image?.uri && (
        <Image
          source={{uri: image?.uri}}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
      )}
    </View>
  );
}
