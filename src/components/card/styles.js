import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  container: {
    height: height(33),
    width: width(45),
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    marginBottom: height(1),
  },
  imageContainer: {
    height: height(17),
    width: width(40),
    backgroundColor: 'orange',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    margin: 5,
    // backgroundColor: 'red',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    // backgroundColor: 'green',
  },
  price: {
    fontSize: 16,
    color: '#888',
    // marginVertical: 5,
    // backgroundColor: 'yellow',
  },
  addButton: {
    marginTop: 10,
    width: width(30),
  },
  gradientButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
