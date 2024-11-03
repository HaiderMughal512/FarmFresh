import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MyAccounts from '../Screens/Customer/MyAccounts';
import ContactUs from '../Screens/Customer/ContactUs';
import PrivacyPolicy from '../Screens/Customer/PrivacyPolicy';
import TermCondition from '../Screens/Customer/TermCondition';
import Myorder from '../Screens/Customer/Myorder';
import Logout from '../Screens/Customer/Logout';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FARM FRESH"
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        drawerActiveTintColor: '#ff6347',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: styles.drawerLabel,
        drawerStyle: {
          backgroundColor: '#99FF99',
          width: 250,
        },
      }}>
      <Drawer.Screen name="FARM FRESH" component={TabNavigator} />
      <Drawer.Screen
        name="My Account"
        component={MyAccounts}
        options={{headerTitle: 'Personal Information'}}
      />
      <Drawer.Screen name="My Order" component={Myorder} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen name="Terms & Conditions" component={TermCondition} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#28a745',
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Drawernavigator;
