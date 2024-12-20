import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  getOrderProducts,
  updateOrderStatus,
  updateProductQuantity,
} from '../../api/orders';
import Modal from 'react-native-modal';
import Custominput from '../../common/Custominput';
import {useSelector} from 'react-redux';
import {giveFeedback} from '../../api/feedback';
import LinearGradient from 'react-native-linear-gradient';

export default function OrderDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const user = useSelector(state => state.userReducer?.user);

  const [products, setProducts] = useState([]);
  const [feedBack, setFeedBack] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [prodId, setProdId] = useState('');

  const [check, setCheck] = useState(route.params?.status !== 'Dispatched');

  const getOrder = async () => {
    try {
      console.log('FarmerId', route.params?.farmerId);

      let res = await getOrderProducts(route.params?.id);
      setProducts(res);
      console.log(res);
    } catch (error) {
      console.error('Failed to fetch orders', error);
      setError('Unable to fetch your orders. Please try again.');
    }
  };

  const openModal = id => {
    setProdId(id);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const OrderItem = ({O_id, O_amount, O_P_id, O_Quantity}) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.productId}>Order ID: {O_id}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>RS {O_amount}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Product Id:</Text>
          <Text style={styles.value}>{O_P_id}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Quantity:</Text>
          <Text style={styles.value}>{O_Quantity}</Text>
        </View>
        {/* <Button title="Packed" /> */}
        {route.params?.role === 'Customer' && (
          <Button
            title="Give Feedback"
            onPress={() => {
              openModal(O_P_id);
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  const handleUpdateStatus = async () => {
    let res = await updateProductQuantity(
      products.map(({$id, ...rest}) => rest),
    );
    console.log('Status Update Response', res);
    if (res === 'Updated Successfully') {
      setCheck(false);
    }
  };

  const handleSubmitFeedBack = async () => {
    console.log('Producdt Id', prodId);
    console.log('Farmer Id', route.params?.farmerId);
    console.log('User Id', user?.U_id);

    let res = await giveFeedback({
      P_id: prodId,
      From_User: user?.U_id,
      To_User: route.params?.farmerId,
      FeedBack1: feedBack,
      F_date: new Date(),
    });

    console.log('Feedbak Response', res);

    if (res === 'Feedback Submitted') {
      setFeedBack('');
      setIsVisible(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [route.params?.id]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.O_itemid.toString()} // Use O_id as key extractor
        renderItem={({item}) => (
          <OrderItem
            O_id={item.O_id}
            O_amount={item.Oi_price}
            O_P_id={item.P_id}
            O_Quantity={item.Oi_quantity}
            // O_status={item.O_status}
          />
        )}
      />

      {check && route.params?.role !== 'Customer' && (
        <Button
          title="Update Status"
          onPress={() => {
            handleUpdateStatus();
          }}
        />
      )}

      {/* <Modal isVisible={isVisible} onBackdropPress={closeModal}>
        <View style={styles.modalView}>
          <Text>Feedback</Text>
          <Custominput
            placeholder="Enter Feedback"
            onChangeText={setFeedBack}
          />

          <Button
            title="submit"
            onPress={() => {
              handleSubmitFeedBack();
            }}
          />
        </View>
      </Modal> */}
      <Modal isVisible={isVisible} onBackdropPress={closeModal}>
        <View style={styles.modalContainer}>
          {/* Title */}
          <Text style={styles.modalTitle}>Feedback</Text>

          {/* Input */}
          <Custominput
            placeholder="Enter your feedback here..."
            onChangeText={setFeedBack}
            style={styles.feedbackInput}
          />

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmitFeedBack}>
            <LinearGradient
              colors={['#6A11CB', '#2575FC']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  feedbackInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    textAlignVertical: 'top', // Ensures text starts at the top-left
    marginBottom: 20,
  },
  submitButton: {
    width: '100%',
    marginTop: 10,
  },
  gradientButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
