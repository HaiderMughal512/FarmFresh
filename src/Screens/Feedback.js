import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Feedback() {
  const user = useSelector(state => state.userReducer?.user);

  return (
    <View style={styles.container}>
      <Text>Feedback</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
