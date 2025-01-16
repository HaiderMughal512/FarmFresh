import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawernavigator from './Drawernavigator'; // Import Drawernavigator
import {
  CartScreen,
  ChangePasswordScreen,
  LogInScreen,
  SignUpScreen,
  SplashScreen,
} from '../Screens';

const Stack = createNativeStackNavigator(); // Ensure 'Stack' is correctly defined

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Drawernavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Changepassword"
          component={ChangePasswordScreen}
          options={{headerTitle: 'Change Password'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
