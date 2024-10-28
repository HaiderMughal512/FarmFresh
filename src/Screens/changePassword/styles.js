import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    height: 55,
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  updateButton: {
    height: 50,
    width: '70%',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  updateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
