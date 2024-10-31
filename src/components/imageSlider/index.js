import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {ImageNames} from '../../images';
import styles from './styles';

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        // showsButtons={true}
        autoplay={true}
        autoplayTimeout={3}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        removeClippedSubviews={false} // Prevent clipping of images
        scrollEnabled={true} // Enable scrolling
        loop={true} // Enable looping
        index={0} // Start from the first slide
        duration={300} // Animation duration for transitions
      >
        <View style={styles.slide}>
          <Image
            source={ImageNames.ORANGE}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={ImageNames.SLIDER}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};

export default ImageSlider;
