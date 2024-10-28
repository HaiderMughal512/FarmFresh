import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    height: 55,
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
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
  changePasswordButton: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    marginTop: 20,
  },
  changePasswordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  updateButton: {
    height: 50,
    width: '70%',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  updateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
