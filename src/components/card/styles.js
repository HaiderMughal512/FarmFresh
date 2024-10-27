import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 170,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  },
  imageContainer: {
    height: '50%',
    width: '90%',
    backgroundColor: 'orange',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    margin: 5,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  addButton: {
    marginTop: 10,
    width: '70%',
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
