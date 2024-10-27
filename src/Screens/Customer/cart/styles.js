import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    // padding: 16,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  mainItemView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
    borderRadius: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 4,
  },
  productId: {
    fontSize: 12,
    color: '#AAA',
  },

  subTotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotalTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  subTotalValue: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

export default styles;
