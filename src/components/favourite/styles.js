import {StyleSheet} from 'react-native';
import {width} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  parentView: {
    // height: 40,
    // width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width(1),
  },
});

export default styles;
