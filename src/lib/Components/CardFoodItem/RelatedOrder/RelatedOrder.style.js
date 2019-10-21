import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  imageCard: {
    width: 100,
    borderRadius: 10,
    overflow: 'hidden',
    height: '100%',
  },
  cardRecent: {
    width: WIDTH * 0.93,
    height: 'auto',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  itemDesc: {
    width: WIDTH * 0.6,
  },
  itemBottom: {
    marginBottom: 10,
    width: 270,
  },
  itemRight: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  itemRightBottom: {
    flexDirection: 'column',
    marginLeft: 10,
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
  qtyGroup: {
    flexDirection: 'row',
  },
});
