import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
import Signup from '../Screens/Signup';
import Drawernavigator from './Drawernavigator'; // Import Drawernavigator
import Changepassword from '../Screens/Customer/Changepassword';
import Cart from '../Screens/Customer/Cart';
import FarmerHome from '../Screens/Farmer/home';
import Description from '../components/description';
import AddProduct from '../Screens/Farmer/addProduct';
import FarmerNavigation from './FarmerNavigation';
import FarmerPasswordUpdate from '../Screens/Farmer/FarmerPasswordUpdate';
// import MainProduct from '../Screens/Farmer/products/MainProduct';
// import DeleteProduct from '../Screens/Farmer/products/DeleteProduct';
// import UpdateProduct from '../Screens/Farmer/products/UpdateProduct';

const Stack = createNativeStackNavigator(); // Ensure 'Stack' is correctly defined

const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="MainProduct"
          component={MainProduct}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="DeleteProduct"
          component={DeleteProduct}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="UpdateProduct"
          component={UpdateProduct}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Home"
          component={Drawernavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FarmerHome"
          component={FarmerHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FarmerNavigation"
          component={FarmerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FarmerPasswordUpdate"
          component={FarmerPasswordUpdate}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Changepassword"
          component={Changepassword}
          options={{
            headerTitle: 'Change Password',
            headerStyle: {
              backgroundColor: '#28a745',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;
