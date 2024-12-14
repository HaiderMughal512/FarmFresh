// import React, {useEffect, useRef, useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// const MainProduct = () => {
//   const navigation = useNavigation();

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(-50)).current;
//   const scaleAnim = useRef(new Animated.Value(0.8)).current;

//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (!hasAnimated) {
//       Animated.parallel([
//         Animated.timing(fadeAnim, {
//           toValue: 1,
//           duration: 1500,
//           useNativeDriver: true,
//         }),
//         Animated.timing(slideAnim, {
//           toValue: 0,
//           duration: 1500,
//           useNativeDriver: true,
//         }),
//         Animated.spring(scaleAnim, {
//           toValue: 1,
//           friction: 5,
//           useNativeDriver: true,
//         }),
//       ]).start(() => {
//         setHasAnimated(true);
//       });
//     }
//   }, [hasAnimated, fadeAnim, slideAnim, scaleAnim]);

//   const productDisplay = () => {
//     navigation.navigate('AddProduct');
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.greetingContainer,
//           {
//             opacity: fadeAnim,
//             transform: [{translateY: slideAnim}, {scale: scaleAnim}],
//           },
//         ]}>
//         <Text style={styles.greetingText}>Hi,</Text>
//         <Text style={styles.welcomeText}>
//           {' '}
//           It's Time to Manage The Inventory
//         </Text>
//       </Animated.View>

//       <TouchableOpacity style={styles.card} onPress={productDisplay}>
//         <LinearGradient
//           colors={['#FF6F61', '#FF8E53']}
//           style={styles.gradientButton}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </LinearGradient>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.card}
//         onPress={() => {
//           navigation.navigate('UpdateProduct');
//         }}>
//         <LinearGradient
//           colors={['#FF6F61', '#FF8E53']}
//           style={styles.gradientButton}>
//           <Text style={styles.buttonText}>Update Product</Text>
//         </LinearGradient>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.card}
//         onPress={() => {
//           navigation.navigate('DeleteProduct');
//         }}>
//         <LinearGradient
//           colors={['#FF6F61', '#FF8E53']}
//           style={styles.gradientButton}>
//           <Text style={styles.buttonText}>Delete Product</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingContainer: {
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   greetingText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333',
//   },
//   welcomeText: {
//     fontSize: 18,
//     color: '#666',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   card: {
//     width: '100%',
//     marginBottom: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   gradientButton: {
//     paddingVertical: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// export default MainProduct;
