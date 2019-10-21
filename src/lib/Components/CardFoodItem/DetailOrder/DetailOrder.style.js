import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  cardHeader: {
    width: WIDTH * 0.93,
    height: 'auto',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 5,
    padding: 30,
    flexDirection: 'column',
  },
  itemTop: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemBottom: {
    marginBottom: 10,
    width: 270,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrice: {
    color: '#0fbcf9',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  textCategory: {
    fontSize: 10,
    width: 60,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    color: '#fff',
    backgroundColor: '#0fbcf9',
    marginTop: 5,
    marginLeft: 10,
  },
  textDesc: {
    width: WIDTH * 0.8,
  },
  qtyGroup: {
    flexDirection: 'row',
  },
  btnQty: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#0fbcf9',
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  inputQty: {
    width: 50,
    height: 40,
  },
});
