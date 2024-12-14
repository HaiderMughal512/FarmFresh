import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import FarmerHome from '../Screens/Farmer/home';
import MyProducts from '../Screens/Farmer/MyProducts';
import InsertProducts from '../Screens/Farmer/InsertProducts';
import Orders from '../Screens/Farmer/Orders';
import Profile from '../Screens/Farmer/Profile';
import styles from '../components/card/styles';
import AddProduct from '../Screens/Farmer/addProduct';
const Tab = createBottomTabNavigator();

const FarmerNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        // tabBarStyle: Styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="FarmerHome"
        component={FarmerHome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="MyProducts"
        component={MyProducts}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name="file-tray-stacked-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={60}
              color={focused ? 'green' : 'red'}
              style={Styles.insert}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FarmerNavigation;
const Styles = StyleSheet.create({
  insert: {
    position: 'absolute',
    bottom: 8,
  },
  tabBarStyle: {
    borderTopColor: 'green',
    borderTopWidth: 2,
  },
});
