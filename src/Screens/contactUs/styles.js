import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: height(5),
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  inputContainer: {
    height: height(6),
    width: width(80),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
  messageContainer: {
    height: height(23),
    width: width(80),
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  messageInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
  submitButton: {
    height: height(6),
    width: width(75),
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  submitText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
});

export default styles;
