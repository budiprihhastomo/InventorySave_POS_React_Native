import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardLogin: {
    backgroundColor: '#fff',
    width: '100%',
    height: 540,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    position: 'absolute',
    bottom: 0,
    elevation: 20,
    padding: 40,
  },
  loginHeader: {
    backgroundColor: '#fff',
  },
  titleText: {
    marginTop: 20,
    color: '#34495e',
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginTop: 0,
    justifyContent: 'center',
  },
  itemInput: {
    padding: 5,
    marginVertical: 10,
  },
  inputBox: {
    color: '#34495e',
  },
  buttonLogin: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#2ecc71',
    borderWidth: 2.5,
    elevation: 1,
    justifyContent: 'center',
  },
  buttonRegister: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
    elevation: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#2ecc71',
  },
  buttonAction: {
    marginVertical: 15,
  },
});
