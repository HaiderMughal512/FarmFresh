import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  serachView: {
    height: height(5),
    width: width(90),
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: height(2),
    flexDirection: 'row',
  },
  searchIconTouch: {
    width: width(10),
    height: height(4),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: width(78),
    height: height(5),
    paddingStart: width(2),
  },
  titleText: {
    marginLeft: width(3),
    marginBottom: height(1),
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
