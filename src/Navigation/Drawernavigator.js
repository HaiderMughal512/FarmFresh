import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MyAccounts from '../Screens/Customer/MyAccounts';
import PrivacyPolicy from '../Screens/Customer/PrivacyPolicy';
import Myorder from '../Screens/Customer/Myorder';
import Logout from '../Screens/Customer/Logout';
import {ContactUsScreen, TermsAndConditionScreen} from '../Screens';

const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="FARM FRESH">
      <Drawer.Screen name="FARM FRESH" component={TabNavigator} />
      <Drawer.Screen
        name="My Account"
        component={MyAccounts}
        options={{headerTitle: 'Personal Information'}}
      />
      <Drawer.Screen name="My Order" component={Myorder} />
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen
        name="Terms & Conditions"
        component={TermsAndConditionScreen}
      />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default Drawernavigator;
