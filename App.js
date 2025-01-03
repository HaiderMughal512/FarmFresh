import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Appnavigator from './src/Navigation/Appnavigator';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import FlashMessage from 'react-native-flash-message';
// import messaging, {getMessaging} from '@react-native-firebase/messaging';

const App = () => {
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }
  // const getToken = async () => {
  //   console.log('checking fucntion');

  //   const token = await getMessaging().getToken();
  //   console.log('Token', token);
  // };
  // useEffect(() => {
  //   // requestUserPermission();
  //   console.log('getting token');

  //   getToken();
  //   // initializeFirebase();
  // }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Appnavigator />
      </Provider>
      <FlashMessage position="top" />
    </GestureHandlerRootView>
  );
};

export default App;
