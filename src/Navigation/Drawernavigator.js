import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {
  ContactUsScreen,
  LogOutScreen,
  MyAccountScreen,
  MyOrdersScreen,
  PrivacyPolicyScreen,
  TermsAndConditionScreen,
} from '../Screens';

const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="FARM FRESH">
      <Drawer.Screen name="FARM FRESH" component={TabNavigator} />
      <Drawer.Screen
        name="My Account"
        component={MyAccountScreen}
        options={{headerTitle: 'Personal Information'}}
      />
      <Drawer.Screen name="My Order" component={MyOrdersScreen} />
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen
        name="Terms & Conditions"
        component={TermsAndConditionScreen}
      />
      <Drawer.Screen name="Logout" component={LogOutScreen} />
    </Drawer.Navigator>
  );
};

export default Drawernavigator;
