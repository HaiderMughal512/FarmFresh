import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import CustomerHome from '../Screens/Customer/Home';
import Like from '../Screens/Customer/Like'; // Make sure this component exists
import Cart from '../Screens/Customer/Cart';
import Notification from '../Screens/Customer/Notification';
import Home from '../Screens/Customer/Home';
import {Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-reanimated/lib/typescript/Animated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
