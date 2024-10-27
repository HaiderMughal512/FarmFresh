import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Appnavigator from './src/Navigation/Appnavigator'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
      <Appnavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
