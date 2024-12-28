import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getProductWithFeedback} from '../api/products';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../Redux/cart/cartAction';
import {imageIp} from '../env';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';
import {deleteFeedback, editFeedback} from '../api/feedback';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer?.user);

  const menuRef = useRef();

  const [product, setProduct] = useState('');
  const [feedBacks, setFeedBacks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuVisibile, setMenuVisible] = useState(false);

  console.log('Login User', user);

  const getProduct = async () => {
    let res = await getProductWithFeedback(route.params?.id);
    console.log('Product Response', res);
    setProduct(res?.item);
    setFeedBacks(res?.feedBacks);
    setUsers(res?.users);
    setLoading(false);
  };

  const handleProduct = () => {
    if (!product) return;

    const imageUri = `${imageIp}${product?.images}`;

    dispatch(
      addToCart({
        productName: product.P_name,
        price: product.P_price,
        imageSource: imageUri,
        id: product.P_id,
        quantity: 1,
        F_id: product?.f_id,
      }),
    );

    navigation.navigate('Cart');
  };

  useEffect(() => {
    console.log('Product Id', route.params?.id);
    getProduct();
  }, []);

  // Match feedback with user details
  const getUserDetails = userId => {
    const userDetail = users?.find(user => user.U_id === userId);
    return userDetail || {};
  };

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.show();
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.hide();
    }
  };

  const handleEdit = async id => {
    console.log('Edit Feedback...');

    let res = await editFeedback(id, 'Hard Codded');

    console.log('Edit Feedback Response', res);

    setMenuVisible(false);
  };

  const handleDelete = async id => {
    console.log('Delete Feedback...');
    let res = await deleteFeedback(id);
    console.log('Delete Feedback Response', res);

    setMenuVisible(false);
  };

  return loading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} color={'red'} />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Product Details */}
      {product ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.P_name}</Text>
          {product?.images ? (
            <Image
              source={{uri: `${imageIp}${product.images}`}}
              style={styles.productImage}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.errorMessage}>Image not available</Text>
          )}
          <Text style={styles.productPrice}>RS. {product.P_price}</Text>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {product.P_description ||
              'No description available for this product.'}
          </Text>
        </View>
      ) : (
        <Text style={styles.errorMessage}>Product data is missing.</Text>
      )}

      {/* <TouchableOpacity style={styles.addButton} onPress={handleProduct}>
        <LinearGradient
          colors={['green', 'red']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientButton}>
          <Text style={styles.addButtonText}>
            {user?.U_role === 'Farmer' ? 'Feedback' : 'Add to Cart'}
          </Text>
        </LinearGradient>
      </TouchableOpacity> */}
      {user?.U_role !== 'Farmer' && (
        <TouchableOpacity style={styles.addButton} onPress={handleProduct}>
          <LinearGradient
            colors={['green', 'red']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}

      {/* Feedback Section */}
      <Text style={styles.feedBackText}>Feedbacks</Text>
      <FlatList
        data={feedBacks}
        scrollEnabled={false}
        renderItem={({item}) => {
          const userDetail = getUserDetails(item.From_User); // Get user details for feedback
          return (
            <View style={styles.feedbackContainer}>
              {/* <Menu
                ref={menuRef}
                // visible={menuVisibile}
                anchor={
                  <TouchableOpacity
                    onPress={openMenu}
                    style={{
                      position: 'absolute',
                      right: 5,
                      width: '20',
                      height: 20,
                      backgroundColor: 'white',
                      elevation: 2,
                    }}>
                    <Icon name="more-vertical" size={20} color="black" />
                  </TouchableOpacity>
                }
                onRequestClose={closeMenu}>
                <MenuItem onPress={handleEdit}>Edit</MenuItem>
                <MenuDivider />
                <MenuItem onPress={handleDelete}>Delete</MenuItem>
              </Menu> */}
              <Text style={styles.feedbackUser}>
                {userDetail.U_name || 'Anonymous User'}
              </Text>
              <Text style={styles.feedbackEmail}>
                {/* {userDetail.U_email || 'No Email Provided'} */}
              </Text>
              <Text style={styles.feedbackMessage}>{item?.FeedBack1}</Text>
              <Text style={styles.feedbackDate}>
                {new Date(item.F_date).toDateString()}
              </Text>

              {item?.From_User == user?.U_id && (
                <Button
                  title="Edit"
                  onPress={() => {
                    handleEdit(item?.Feed_id);
                  }}
                />
              )}
              {(item?.From_User == user?.U_id || user?.U_role === 'Farmer') && (
                <Button
                  title="Delete"
                  onPress={() => {
                    handleDelete(item?.Feed_id);
                  }}
                />
              )}
            </View>
          );
        }}
        keyExtractor={item => item.Feed_id.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 5,
  },
  detailsContainer: {
    padding: 16,
    marginTop: 50,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  productImage: {
    width: '100%',
    height: 250,
    marginVertical: 16,
  },
  productPrice: {
    fontSize: 24,
    color: '#ff6347',
    fontWeight: '600',
    marginVertical: 10,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    padding: 16,
    textAlign: 'center',
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
  gradientButton: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedBackText: {
    fontSize: 20,
    color: 'black',
    padding: 16,
  },
  feedbackContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  feedbackUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  feedbackEmail: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  feedbackMessage: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  feedbackDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
});
