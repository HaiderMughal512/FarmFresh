import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageSliderNew, TopProducts} from '../../components';
import {everyfakelist, fakeTopSellingData} from '../../utils/Data';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Home = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      {/* Image Slider */}
      <ImageSliderNew />

      {/* Search Bar */}
      <View style={styles.serachView}>
        <TextInput placeholder="Search" style={styles.inputStyle} />
        <TouchableOpacity style={styles.searchIconTouch}>
          <EvilIcons name="search" size={25} color="black" />
        </TouchableOpacity>
      </View>

      {/* Top Selling */}
      <Text style={styles.titleText}>Top Selling Product</Text>
      <TopProducts list={fakeTopSellingData} />

      {/* Everyday Essentials */}
      <Text style={styles.titleText}> Every Day Essentials </Text>
      <TopProducts list={everyfakelist} />
    </ScrollView>
  );
};
export default Home;
