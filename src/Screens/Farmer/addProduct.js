import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import Custominput from '../../common/Custominput';
import {addProducts, editProducts} from '../../api/products';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {imageIp} from '../../env';

export default function AddProduct() {
  const user = useSelector(state => state.userReducer.user);
  const route = useRoute();
  const navigation = useNavigation();

  const [productname, setproductname] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [image, setimage] = useState(null);
  const [category, setcategory] = useState('');

  const chooseImage = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      } else if (response.errorCode) {
        console.log('Image Picker Error: ', response.errorMessage);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setimage({
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName,
        });
      } else {
        console.log('No image selected');
      }
    });
  };

  const handleAddProduct = async () => {
    try {
      let formData = new FormData();
      formData.append('f_id', user?.U_id);
      formData.append('P_name', productname);
      formData.append('P_description', description);
      formData.append('P_price', price);
      formData.append('P_quantity', quantity);
      formData.append('P_category', category);

      console.log('Image ', image);

      if (route.params?.edit) {
        const img = image;
        setimage({name: img, type: 'image/jpeg'});
        formData.append('file', image);

        console.log('Edit Image', image);

        let res = await editProducts(route.params?.data?.P_id, formData);
        console.log('Edit Product Response', res);
        if (res === 'Product updated successfully.') {
          navigation.navigate('FarmerNavigation');
        }
      } else {
        formData.append('file', image);

        let res = await addProducts(formData);

        console.log('Add Product Response', res);
        if (res === 'Product Added Successfully') {
          navigation.navigate('FarmerNavigation');
        }
      }
    } catch (error) {
      console.log('Error adding product:', error);
    }
  };

  const setAttributesValue = () => {
    const data = route.params?.data;
    console.log('Setting Data');

    setproductname(data?.P_name);
    setdescription(data?.P_description);
    setprice(data?.P_price.toString());
    setquantity(data?.P_quantity.toString());
    setcategory(data?.P_category);
    setimage(data?.images);
    console.log('Edit Product Data', data);
  };

  useFocusEffect(
    useCallback(() => {
      if (route.params?.edit) {
        setAttributesValue();
      }
    }, [route.params?.data?.P_id]),
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Product</Text>

      <Custominput
        placeholder="Product Name"
        onChangeText={setproductname}
        style={styles.input}
        value={productname}
      />
      <Custominput
        placeholder="Description"
        onChangeText={setdescription}
        style={styles.input}
        value={description}
      />
      <Custominput
        placeholder="Price"
        onChangeText={setprice}
        style={styles.input}
        value={price}
      />
      <Custominput
        placeholder="Quantity"
        onChangeText={setquantity}
        style={styles.input}
        value={quantity}
      />
      <Custominput
        placeholder="Category"
        onChangeText={setcategory}
        style={styles.input}
        value={category}
      />

      <TouchableOpacity style={styles.imageButton} onPress={chooseImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {image ? (
        image?.uri ? (
          <Image
            source={{uri: image.uri}}
            style={styles.imagePreview}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={{uri: `${imageIp}${image}`}}
            style={styles.imagePreview}
            resizeMode="contain"
          />
        )
      ) : (
        <Text style={styles.placeholderText}>No Image Selected</Text>
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  imageButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#2196f3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
});
