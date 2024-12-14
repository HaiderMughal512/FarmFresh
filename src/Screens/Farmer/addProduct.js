import React, {useState} from 'react';
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
import {addProducts} from '../../api/products';

export default function AddProduct() {
  const user = useSelector(state => state.userReducer.user);

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
      console.log('Error adding product:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Product</Text>

      <Custominput
        placeholder="Product Name"
        onChangeText={setproductname}
        style={styles.input}
      />
      <Custominput
        placeholder="Description"
        onChangeText={setdescription}
        style={styles.input}
      />
      <Custominput
        placeholder="Price"
        onChangeText={setprice}
        style={styles.input}
      />
      <Custominput
        placeholder="Quantity"
        onChangeText={setquantity}
        style={styles.input}
      />
      <Custominput
        placeholder="Category"
        onChangeText={setcategory}
        style={styles.input}
      />

      <TouchableOpacity style={styles.imageButton} onPress={chooseImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {image?.uri ? (
        <Image
          source={{uri: image.uri}}
          style={styles.imagePreview}
          resizeMode="contain"
        />
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
